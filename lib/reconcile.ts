import mongoose from "mongoose";
import Razorpay from "razorpay";
import { Order } from "@/models/order";
import { Payment } from "@/models/payment";
import connectDB from "@/lib/mongodb";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

// 🔧 helper: chunk array

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
 const chunk = (arr: any[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

export async function reconcileOrders() {
  const session = await mongoose.startSession();

  try {
    await connectDB();

    // ⏱ avoid race with webhook
    const minTime = new Date(Date.now() - 2 * 60 * 1000);

   const fn = () => Order.findOneAndUpdate({
            status : 'created',
            statusOrd : 'not marked'
   },{
    $set : {
      statusOrd : 'marked'
    }}, { sort: { order_createdAt: 1 }, new: true }
  );

       const collectOrder = async() => {
          let stop = false;
          const result : any = [];
          const running = [];
          const worker = async() => {

                while(!stop){
                const order = await fn();
                  if (!order) {
        stop = true;
        return;
      }
                   result.push(order)
                }
          }

          for (let i = 0; i < 4; i++) {
    running.push(worker());
  }

  await Promise.all(running);

  return result;
       }

    const orders = await collectOrder();

    if (!orders.length) return;

    const batches = chunk(orders, 3); 

    const capturedPayments: any[] = [];

   
    for (const batch of batches) {
      const results = await Promise.all(
        batch.map(async (order) => {
          try {
            const payments = await razorpay.orders.fetchPayments(order.order_id);

            const captured = payments.items.find(
              (p: any) => p.status === "captured"
            );

            if (!captured) return null;

            return {
              order_id: order.order_id,
              payment_id: captured.id,
              amount: captured.amount,
            };

          } catch (err) {
            console.error("API error:", err);
            return null;
          }
        })
      );

      capturedPayments.push(...results.filter(Boolean));

      // 🧠 throttle between batches
      await delay(200);
    }

    if (!capturedPayments.length) return;

    // 🔁 CHECK EXISTING PAYMENTS (single query)
    const existing = await Payment.find({
      payment_id: { $in: capturedPayments.map(p => p.payment_id) },
    }).select("payment_id");

    const existingSet = new Set(existing.map(p => p.payment_id));

    // 📦 PREPARE BULK OPS
    const orderOps: any[] = [];
    const paymentOps: any[] = [];

    for (const p of capturedPayments) {
      if (existingSet.has(p.payment_id)) continue;

      orderOps.push({
        updateOne: {
          filter: {
            order_id: p.order_id,
            status: { $ne: "paid" },
          },
          update: {
            $set: {
              status: "paid",
              payment_id: p.payment_id,
            },
          },
        },
      });

      paymentOps.push({
        insertOne: {
          document: {
            payment_id: p.payment_id,
            order_id: p.order_id,
            amount: p.amount / 100,
            status: "captured",
          },
        },
      });
    }

    if (!orderOps.length && !paymentOps.length) return;

    // 🔒 TRANSACTION START
    session.startTransaction();

    if (orderOps.length) {
      await Order.bulkWrite(orderOps, { session });
    }

    if (paymentOps.length) {
      await Payment.bulkWrite(paymentOps, { session });
    }

    await session.commitTransaction();

    console.log(" Reconciliation batch completed");

  } catch (err) {
    await session.abortTransaction();
    console.error(" Reconciliation failed:", err);
  } finally {
    session.endSession();
  }
}