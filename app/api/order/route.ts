import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import {Order} from '@/models/order';

export async function GET() {
  try {
    await connectDB();

    const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);

    try {
      const updated = await Order.findOneAndUpdate(
        { createdAt: { $lt: tenMinutesAgo }, paymentStatus: 'pending' },
        { $set: { paymentStatus: 'failed' } },
        { new: true }
      );
      console.log('updated order:', updated);
    } catch (err) {
      console.error('update error:', err);
    }

    const orders = await Order.find().lean();

    return NextResponse.json({ success: true, orders });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
