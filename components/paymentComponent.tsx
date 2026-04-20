'use client'

import Script from "next/script";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Spinner } from "./ui/spinner";
import { useCartStore } from "./Cartstore";
export default function Home() {
  const router = useRouter();
  const [total, setTotal] = useState<number | null>(null);
  const [order, setorder] = useState<null|number>(null);
  const[loading,setloading] = useState<boolean>(false);
  const clearcart = useCartStore((state)=>state.clearCart)
  useEffect(() => {
    const stored = localStorage.getItem("total");
    if (stored) setTotal(JSON.parse(stored));
  }, []);

  useEffect(()=>{

      return()=>{
        setloading(false)
      }
  },[])

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
    setloading(true);
    const res = await fetch('/api/verify-payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(response)
    });
    clearcart()
  
       await new Promise<void>((res) => setTimeout(() => {res()},3000) )
           router.push(`/statuspage`)
    const result = await res.json();
    console.log(result);
  },

  // ✅ Handle modal close (user cancels payment)
  modal: {
    ondismiss: async function () {

      console.log("Payment popup closed by user");
      
         setloading(true)
            await new Promise<void>((res) => setTimeout(() => {res()},3000) )
          router.push(`/statuspage`)
    }
  }
};
    const rzp = new (window as any).Razorpay(options);
      // ✅ Handle failed payments
rzp.on("payment.failed", async function (response: any) {
  console.error("Payment Failed:", response);
   await fetch(`/api/order/${order.order_id}`, {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
});
  setloading(true);
        await new Promise<void>((res) => setTimeout(() => {res()},3000) )
         router.push(`/statuspage`)
})
    rzp.open();
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white">
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />

      {loading ? (<div><Spinner className="h-30" /></div>) : <>
      
                 <h2 className="text-3xl text-black font-bold mb-4">
        Total Payment: ₹{total ?? "Loading..."}
      </h2>

      <button
        className="border border-black text-black rounded-3xl px-6 py-3 hover:bg-black hover:text-white transition"
        onClick={handlePayment}
      >
        Pay Now
      </button>
      </>}

     
    </div>
  );
}