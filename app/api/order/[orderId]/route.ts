import connectDB from "@/lib/mongodb";
import { Order } from "@/models/order";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ orderId: string }> }
) {
  await connectDB();

  const { orderId } = await params;

  const order = await Order.findOne({
    order_id: orderId,
  });

  return Response.json(order);
}