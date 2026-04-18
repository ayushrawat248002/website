"use client";

import Script from "next/script";

export default function Home() {
  const handlePayment = async () => {
    const res = await fetch("/api/create-order", {
      method: "POST",
    });

    const order = await res.json();
     console.log(process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID)
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: "INR",
      name: "Test App",
      order_id: order.id,
      handler: function (response) {
        console.log(response);

        const res = fetch('/api/verify-payment', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(response)
});

  const result = await res.json();
  console.log(result)

      }
    }

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center ">
      {/* ✅ ADD SCRIPT HERE */}
     <Script
  src="https://checkout.razorpay.com/v1/checkout.js"
  strategy="lazyOnload"
/>

      <button className="text-black border border-black rounded-3xl p-6" onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
}