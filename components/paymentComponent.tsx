'use client'

import Script from "next/script";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [total, setTotal] = useState<number | null>(null);
  const [order, setorder] = useState<null|number>(null);
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
     setorder(order.id)

  const options = {
  key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  amount: order.amount,
  currency: "INR",
  name: "Test App",
  order_id: order.id,

  handler: async function (response: any) {
    console.log(response);

    const res = await fetch('/api/verify-payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(response)
    });
           router.push(`/statuspage/${order.id}`)
    const result = await res.json();
    console.log(result);
  },

  // ✅ Handle modal close (user cancels payment)
  modal: {
    ondismiss: async function () {
      console.log("Payment popup closed by user");
          router.push(`/statuspage/${order.id}`)
    }
  }
};
    const rzp = new (window as any).Razorpay(options);
      // ✅ Handle failed payments
rzp.on("payment.failed", function (response: any) {
  console.error("Payment Failed:", response);
         router.push(`/statuspage/${order.id}`)
})
    rzp.open();
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white">
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />

      <h2 className="text-3xl text-black font-bold mb-4">
        Total Payment: ₹{total ?? "Loading..."}
      </h2>

      <button
        className="border border-black text-black rounded-3xl px-6 py-3 hover:bg-black hover:text-white transition"
        onClick={handlePayment}
      >
        Pay Now
      </button>
    </div>
  );
}