



import connectDB from "@/lib/mongodb";
import { Order } from "@/models/order";
import { NextRequest } from "next/server";

export async function PATCH(req : NextRequest, { params  } : {params : any}) {
  try {
    await connectDB();

    const { order_id } = await params;

   const order = await Order.findOneAndUpdate(
  { order_id },
  { paymentStatus: "failed" },
  {
    returnDocument: "after",
    runValidators: true,
  }
);
    if (!order) {
      return Response.json(
        { success: false, message: "Order not found" },
        { status: 404 }
      );
    }

    return Response.json({
      success: true,
      message: "Payment status updated to failed",
      order,
    });
  } catch (err : any) {
    return Response.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}