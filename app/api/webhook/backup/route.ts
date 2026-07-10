import mongoose from "mongoose";
import { Order } from "@/models/order";
import { Payment } from "@/models/payment";
import PaymentWebhook from "@/models/webhookModel";
import connectDB from "@/lib/mongodb";
import { TiMediaPause } from "react-icons/ti";

export const reconcileFromWebhook = async () => {
  const session = await mongoose.startSession();

  try {
    await connectDB();


const fn = () =>
  PaymentWebhook.findOneAndUpdate(
    {
      status: "captured",
      statusWeb: { $ne: "marked" }
    },
    {
      $set: { statusWeb: "marked" }
    },
    { sort: { createdAt: 1 }, new: true }
  );

const allresult = async () => {
  const running = [];
  const results : any = [];
  const concurrency = 4;

  let stop = false;

  const worker = async () => {
    while (!stop) {
      const doc = await fn();

      if (!doc) {
        stop = true;
        return;
      }

      results.push(doc);
    }
  };

  // start workers
  for (let i = 0; i < concurrency; i++) {
    running.push(worker());
  }

  await Promise.all(running);

  return results;
};
    // ✅ STEP 1: Fetch webhook docs FIRST
    const webhookDocs = await allresult();
 



    if (!webhookDocs.length) return;

    const orderIds = webhookDocs.map((d : any) => d.orderId);
    const paymentIds = webhookDocs.map((d : any) => d.paymentId);

    // ✅ STEP 2: Fetch only relevant orders
    const orders = await Order.find({
      order_id: { $in: orderIds },
      statusOrd : {$ne : 'marked'}
    }).select("order_id status");

    const orderMap = new Map(
      orders.map((o) => [o.order_id, o])
    );

    // ✅ STEP 3: Check existing payments
    const existingPayments = await Payment.find({
      payment_id: { $in: paymentIds },
    }).select("payment_id");

    const existingSet = new Set(
      existingPayments.map((p) => p.payment_id)
    );

    const orderOps: any[] = [];
    const paymentOps: any[] = [];

    for (const doc of webhookDocs) {
      const order = orderMap.get(doc.orderId);

      // ❗ Skip if no order found
      if (!order) continue;

      // ✅ Order update (idempotent)
      if (order.status !== "paid") {
        orderOps.push({
          updateOne: {
            filter: {
              order_id: doc.orderId,
              status: { $ne: "paid" },
            },
            update: {
              $set: {
                status: "paid",
                statusOrd : 'marked',
                payment_id: doc.paymentId,
              },
            },
          },
        });
      }

      // ✅ Payment insert (only if not exists)
      if (!existingSet.has(doc.paymentId)) {
        paymentOps.push({
            updateOne: {
  filter: { payment_id: doc.paymentId },
  update: {
    $setOnInsert: {
      payment_id: doc.paymentId,
      order_id: doc.orderId,
      amount: doc.amount / 100,
      status: "captured",
    },
  },
  upsert: true,
}
        });
      }
    }

    if (!orderOps.length && !paymentOps.length) return;

    // 🔁 Transaction
    session.startTransaction();

    if (orderOps.length) {
      await Order.bulkWrite(orderOps, { session });
    }

    if (paymentOps.length) {
      await Payment.bulkWrite(paymentOps, { session });
    }

    await session.commitTransaction();

  } catch (err) {
    await session.abortTransaction();
    console.error("Reconcile error:", err);
  } finally {
    session.endSession();
  }
};