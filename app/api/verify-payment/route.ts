import mongoose from "mongoose";
import { verifyPaymentSignature } from "@/lib/hmacverification";
import {Payment} from "@/models/payment";
import {Order} from "@/models/order";
import { NextRequest } from "next/server";
import connectDB from "@/lib/mongodb";

export async function POST(req : NextRequest) {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
     await connectDB()
    const body = await req.json();
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = body;

    // 🔐 1. Verify signature
    const isValid = verifyPaymentSignature({
      order_id: razorpay_order_id,
      payment_id: razorpay_payment_id,
      signature: razorpay_signature,
      secret: process.env.RAZORPAY_KEY_SECRET,
    });

    if (!isValid) {
      await session.abortTransaction();
      session.endSession();
      return Response.json({ error: "Invalid signature" }, { status: 400 });
    }

    // 🔁 2. Prevent duplicate payment (inside transaction)
    const exists = await Payment.findOne(
      { payment_id: razorpay_payment_id },
      null,
      { session }
    );

    if (exists) {
      await session.abortTransaction();
      session.endSession();
      return Response.json({
        success: true,
        message: "Already processed",
      });
    }

    // ⚡ 3. Atomic order update
    const order = await Order.findOneAndUpdate(
      {
        order_id: razorpay_order_id,
        status: { $ne: "paid" },
      },
      {
        status: "paid",
        payment_id: razorpay_payment_id,
      },
      { new: true, session } // 👈 important
    );

    if (!order) {
      await session.abortTransaction();
      session.endSession();
      return Response.json({
        success: false,
        message: "Order already paid",
      });
    }

    // 💳 4. Save payment (same transaction)
    await Payment.create(
      [
        {
          payment_id: razorpay_payment_id,
          order_id: razorpay_order_id,
          status: "captured",
          amount: order.amount,
        },
      ],
      { session }
    );

    // ✅ 5. Commit transaction
    await session.commitTransaction();
    session.endSession();

    return Response.json({ success: true });

  } catch (err : any) {
    // ❌ Rollback everything if any step fails
    await session.abortTransaction();
    session.endSession();

    return Response.json(
      { error: err.message },
      { status: 500 }
    );
  }
}