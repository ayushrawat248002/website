import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import {Order} from '@/models/order';

export async function GET() {
  try {
    await connectDB();

    const MinutesAgo = Math.floor(Date.now() - (40 * 1000));

    try {
      const updated = await Order.updateMany(
        { order_createdAt: { $lt: MinutesAgo }, status : 'created' },
        { $set: { status : 'failed' } },
      );

      console.log('updated order:', updated.modifiedCount);
    } catch (err) {
      console.error('update error:', err);
    }

    const orders = await Order.find().lean();

    return NextResponse.json({ success: true, orders });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
