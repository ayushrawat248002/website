'use client';

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function Orders() {

  const { data, error, isLoading } = useSWR("/api/order", fetcher, {
    refreshInterval: 10000,
  });
  console.log(data)


  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-500">
        Loading your orders...
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center text-red-500">
        Failed to load orders
      </div>
    );
  }



  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl text-black font-bold mb-6">🛍️ My Orders</h1>

      <div className="grid gap-4">
        {data.orders.map((order: any) => (
          <div
            key={order.order_id}
            className="bg-white shadow-md rounded-2xl p-5 border flex justify-between items-center"
          >
            {/* Left side */}
            <div>
              <p className="text-sm text-black">
                Order ID: {order.order_id}
              </p>

              <p className="text-lg text-black font-semibold">
                ₹{order.amount || "N/A"}
              </p>

              {/* Status messages */}
              {order.status === "paid" && (
                <p className="text-green-600 font-medium mt-1">
                  ✅ Payment successful. Your order is confirmed!
                </p>
              )}

              {order.status === "failed" && (
                <p className="text-red-500 font-medium mt-1">
                  ❌ Payment failed. Please try again.
                </p>
              )}

              {order.status === "created" && (
                <p className="text-yellow-500 font-medium mt-1">
                  ⏳ Payment pending...
                </p>
              )}
            </div>

            {/* Right badge */}
            <div>
              <span
                className={`px-4 py-1 rounded-full text-sm font-semibold ${
                  order.status === "paid"
                    ? "bg-green-100 text-green-700"
                    : order.status === "failed"
                    ? "bg-red-100 text-red-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
               
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}