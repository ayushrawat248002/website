import connectDB from "@/lib/mongodb";
import {Payment } from "@/models/payment";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ orderId: string }> }
) {
  await connectDB();

  const { orderId } = await params;

  const order = await Payment.findOne({
    order_id: orderId,
  });

  return Response.json(order);
}