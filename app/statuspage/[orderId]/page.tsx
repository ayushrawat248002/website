'use client'

import { useEffect, useState, use } from "react";

const Page = ({ params }: { params: Promise<{ orderId: string }> }) => {
  const [status, setStatus] = useState("checking...");

  // ✅ unwrap the promise
  const { orderId } = use(params);

  useEffect(() => {
    let alive = true;

    const poll = async () => {
      if (!alive) return;

      try {
        const res = await fetch(`/api/order/${orderId}`);
        const order = await res.json();

        if (order?.status === "paid") {
          setStatus("paid successfully");
          alive=false
          return;
        }
       const createdAtMs = new Date(order.createdAt).getTime();

if (Date.now() - createdAtMs >   10000) {
  setStatus("failed");
  alive = false;
  return;
}
      } catch (err) {
        console.error("Polling error:", err);
      }

      if (alive) {
        setTimeout(poll, 4000); // poll again in 60s
      }
    };

    poll();

    return () => {
      alive = false;
    };
  }, [orderId]);

  return <div className="h-screen w-screen flex items-center justify-center"> <h1 className="text-black text-2xl">{status}</h1></div>;
};

export default Page;
