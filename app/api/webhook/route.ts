import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import { Payment } from "@/models/payment";
import { Order } from "@/models/order";
import connectDB from "@/lib/mongodb";
import PaymentWebhook from "@/models/webhookModel";
export async function POST(req: NextRequest) {
  const session = await mongoose.startSession();

  try {
    await connectDB();

    // 🔐 1. Raw body
    const rawBody = await req.text();

    // 🔐 2. Signature
    const signature = req.headers.get("x-razorpay-signature");
    if (!signature) {
      return new NextResponse("Missing signature", { status: 400 });
    }

    const secret = process.env.RAZORPAY_WEBHOOK_SECRET!;
    const expected = crypto
      .createHmac("sha256", secret)
      .update(rawBody)
      .digest("hex");

    if (expected !== signature) {
      return new NextResponse("Invalid signature", { status: 400 });
    }

    const body = JSON.parse(rawBody);

    // 🎯 Only handle success event
    if (body.event !== "payment.captured") {
      return new NextResponse("Ignored", { status: 200 });
    }

    const payment = body.payload.payment.entity;

      
    await PaymentWebhook.create({
      orderId : payment.order_id,
      paymentId : payment.id,
      amount : payment.amount,
      status : payment.status,
      currency : payment.currency,
      email  : payment.email,
      contact : payment.contact,
      createdAtRazorpay : payment.createAt,
      method : payment.method
    })

    const payment_id = payment.id;
    const order_id = payment.order_id;
    const amount = payment.amount / 100; // ✅ convert

    // 🔁 Start transaction HERE safely
    session.startTransaction();
      
    // 🔁 Duplicate check
    const exists = await Payment.findOne({ payment_id }).session(session);

    if (exists) {
      await session.abortTransaction();
      return new NextResponse("Already processed", { status: 200 });
    }

    // ⚡ Atomic update
    const order = await Order.findOneAndUpdate(
      {
        order_id,
        status: { $ne: "paid" },
        statusOrd : {$ne : 'marked'}
      },
      {
        status: "paid",
        payment_id,
        statusOrd : 'marked'
      },
      { session }
    );

    if (!order) {
      await session.abortTransaction();
      return new NextResponse("Order already paid", { status: 200 });
    }

    // 💳 Save payment
    await Payment.create(
      [
        {
          payment_id,
          order_id,
          payment_createdAt: new Date(),
          amount,
          status: "captured",
          method: payment.method,
        },
      ],
      { session }
    );

    // ✅ Commit
    await session.commitTransaction();

    return new NextResponse("OK", { status: 200 });

  } catch (err: any) {
    try {
      await session.abortTransaction();
    } catch {}

    return new NextResponse(err.message, { status: 500 });

  } finally {
    session.endSession();
  }
}