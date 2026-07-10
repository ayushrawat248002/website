'use client'

import Home from "@/components/paymentComponent";
import { useStepGuard } from "@/components/useStepGuard";
 import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useCartStore } from "@/components/Cartstore";

const Page = () => {
     const router = useRouter();
   const valid = useStepGuard("payment");
  const step = useCartStore((state) => state.obj.step)
  console.log(valid)
  useEffect(() => {
    if (!valid.valid) {
      router.replace(`/paymentSteps/${step}`);
    }
  }, [valid, router]);

  if (!valid) return null;

  return (
    <main>
      <Home />
    </main>
  );
};

export default Page;