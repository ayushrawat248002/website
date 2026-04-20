import connectDB from "@/lib/mongodb";
import { Payment } from "@/models/payment";

export async function GET(

) {
  try {
    await connectDB();

   

    const order = await Payment.find();
    console.log(order)
    if (!order) {
      return Response.json(
        { success: false, message: "Order not found" },
        { status: 404 }
      );
    }

    return Response.json({
      success: true,
      order,
    });
  } catch (err: any) {
    return Response.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}