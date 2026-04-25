'use client'

import Script from "next/script";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Spinner } from "./ui/spinner";
import { useCartStore } from "./Cartstore";
export default function Home() {
  const router = useRouter();
  const [total, setTotal] = useState<number | null>(null);
  const displayTotal = total ?? 0;
  const [order, setorder] = useState<null|number>(null);
  const[loading,setloading] = useState<boolean>(false);
  const clearcart = useCartStore((state)=>state.clearCart)
  const buyerDetail = useCartStore((state) => state.obj.currentaddress)
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
    setloading(true)
    const res = await fetch("/api/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: total }),
    });

    const order = await res.json();
     setorder(order.id)
     setloading(false)

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
   <div className="min-h-screen  bg-gray-100 flex justify-center items-center p-6">
  <Script
    src="https://checkout.razorpay.com/v1/checkout.js"
    strategy="afterInteractive"
  />

  {loading ? (
    <div>
      <Spinner className="h-30" />
    </div>
  ) : (
    <div className="bg-white overflow-y-scroll h-auto text-black shadow-xl rounded-2xl w-full max-w-3xl p-6 space-y-6">

      {/* Heading */}
      <h2 className="text-2xl font-bold text-black">
        Checkout
      </h2>

      {/* User Info */}
      <div className="border p-4 rounded-lg">
        <h3 className="font-semibold mb-2">Customer Details</h3>
        <p>{buyerDetail.fullName}</p>
        <p>{buyerDetail.address}</p>
        <p>{buyerDetail.city}</p>
         <p>{buyerDetail.pincode}</p>
         <p>{buyerDetail.phone}</p>
        <p>Email: johndoe@email.com</p>
      </div>

      {/* Address */}
  

      {/* Price Breakdown */}
      <div className="border p-4 rounded-lg space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{total}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>₹50</span>
        </div>

        <div className="flex justify-between">
          <span>Tax</span>
          <span>₹100</span>
        </div>

        <hr />

        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>₹{displayTotal + 150}</span>
        </div>
      </div>

      {/* Pay Button */}
      <button
        className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
        onClick={handlePayment}
      >
        Pay 
      </button>

    </div>
  )}
</div>
  );
}