import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import { Payment} from "@/models/payment";
import {Order} from "@/models/order";

export async function POST(req : NextRequest) {
  const session = await mongoose.startSession();

  try {
    // 🔐 1. Get raw body (IMPORTANT)
    const rawBody = await req.text();

    // 🔐 2. Get signature from headers
    const signature = req.headers.get("x-razorpay-signature");

    // 🔐 3. Generate expected signature
   const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

if (!secret) {
  throw new Error("RAZORPAY_WEBHOOK_SECRET is not defined");
}

const expected = crypto
  .createHmac("sha256", secret)
  .update(rawBody)
  .digest("hex");

    // ❌ Reject if invalid
    if (expected !== signature) {
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 400 }
      );
    }

    // ✅ Safe to parse now
    const body = JSON.parse(rawBody);

    // We only care about success event
    if (body.event === "payment.captured") {
      const payment = body.payload.payment.entity;

      const payment_id = payment.id;
      const order_id = payment.order_id;
      const amount = payment.amount;

      // 🔁 Start transaction
      session.startTransaction();

      // 🔁 4. Duplicate check
      const exists = await Payment.findOne({
        payment_id,
      }).session(session);

      if (exists) {
        await session.abortTransaction();
        session.endSession();

        return NextResponse.json({
          status: "already processed",
        });
      }

      // ⚡ 5. Atomic order update
      const order = await Order.findOneAndUpdate(
        {
          order_id,
          status: { $ne: "paid" },
        },
        {
          status: "paid",
          payment_id,
        },
        { session }
      );

      if (!order) {
        // already paid by another request
        await session.abortTransaction();
        session.endSession();

        return NextResponse.json({
          status: "order already paid",
        });
      }

      // 💳 6. Save payment
      await Payment.create(
        [
          {
            payment_id,
            order_id,
            payment_createdAt : Date.now(),
            amount,
            status: "captured",
            method: payment.method,
          },
        ],
        { session }
      );

      // ✅ Commit
      await session.commitTransaction();
      session.endSession();

      console.log("Webhook processed:", payment_id);
    }

    return NextResponse.json({ status: "ok" });
  } catch (err : any) {
    await session.abortTransaction();
    session.endSession();

    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}