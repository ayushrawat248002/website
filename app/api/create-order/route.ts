import Razorpay from "razorpay";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req : NextRequest) {
  try {
    const total = await req.json()
    console.log(process.env.TEST_API_KEY,process.env.TEST_SECRET_KEY)
    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET, 
    });

    const options = {
      amount: total.amount * 100, // ₹500 in paise
      currency: "INR",
      receipt: "receipt_order_1",
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json(order);
  } catch (err) {
    return NextResponse.json({ error:'error coccured'  }, { status: 500 });
  }
}