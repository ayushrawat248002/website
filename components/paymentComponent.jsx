"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function Home() {

    let total;

    
          total = JSON.parse(localStorage.getItem('total'))

  const handlePayment = async () => {
    const res = await fetch("/api/create-order", {
      method: "POST",
      body : JSON.stringify(total)
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
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="h-[100vh] flex justify-center flex-col bg-white items-center ">
      {/* ✅ ADD SCRIPT HERE */}
     <Script
  src="https://checkout.razorpay.com/v1/checkout.js"
  strategy="lazyOnload"
/>

   <h2 className="text-3xl text-bold text-black mb-4"> total payment :  ₹{total}</h2>
         
      <button className="text-black border border-black rounded-3xl p-3" onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
}