import { verifyPaymentSignature } from "@/lib/hmacverification";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = body;

    // 🔐 Verify checkout signature (client-side payment proof)
    const isValid = verifyPaymentSignature({
      order_id: razorpay_order_id,
      payment_id: razorpay_payment_id,
      signature: razorpay_signature,
      secret: process.env.RAZORPAY_KEY_SECRET,
    });

    if (!isValid) {
      return Response.json(
        { success: false, error: "Invalid signature" },
        { status: 400 }
      );
    }

    // ✅ Just respond success (NO DB updates here)
    return Response.json({
      success: true,
      message: "Payment verified. Awaiting webhook confirmation.",
    });

  } catch (err: any) {
    return Response.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}