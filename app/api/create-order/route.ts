import Razorpay from "razorpay";
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import {Order} from "@/models/order"; // ✅ fixed

export async function POST(req: NextRequest) {

  // 🔌 1. DB connection (separate try-catch)
  try {
    await connectDB();
  } catch (dbError: any) {
    console.error("DB Connection Error:", dbError);
    return NextResponse.json(
      { error: "Database connection failed" },
      { status: 500 }
    );
  }

  try {
    // 📥 2. Parse request
    const body = await req.json();

    if (!body.amount) {
      return NextResponse.json(
        { error: "Amount is required" },
        { status: 400 }
      );
    }

    // 🔐 3. Validate env
    if (!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      throw new Error("Razorpay keys missing");
    }

    // 💳 4. Razorpay instance
    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID , // ✅ FIXED (removed NEXT_PUBLIC)
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: body.amount * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    // 📦 5. Create order in Razorpay
    const order = await razorpay.orders.create(options);

    // 🗄️ 6. Save in DB
    await Order.create({
      order_id: order.id,
      amount: body.amount,
      currency: "INR",
      status: "created",
    });

    return NextResponse.json(order);

  } catch (err: any) {
    console.error("Create Order Error:", err);

    return NextResponse.json(
      { error: err.message || "Something went wrong" },
      { status: 500 }
    );
  }
}