'use client'

import Script from "next/script";
import { useEffect, useState } from "react";

export default function Home() {
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("total");
    if (stored) setTotal(JSON.parse(stored));
  }, []);

  const handlePayment = async () => {
    if (!total) return;

    if (!(window as any).Razorpay) {
      alert("Payment SDK not loaded. Please wait.");
      return;
    }

    const res = await fetch("/api/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: total }),
    });

    const order = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: "INR",
      name: "Test App",
      order_id: order.id,
      handler: function (response: any) {
        console.log(response);
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white">
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />

      <h2 className="text-3xl font-bold mb-4">
        Total Payment: ₹{total ?? "Loading..."}
      </h2>

      <button
        className="border border-black rounded-3xl px-6 py-3 hover:bg-black hover:text-white transition"
        onClick={handlePayment}
      >
        Pay Now
      </button>
    </div>
  );
}