'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Home from "@/components/paymentComponent";
import { useStepGuard } from "@/components/useStepGuard";

export default function Page() {
  const router = useRouter();
  const guard = useStepGuard("payment");

  useEffect(() => {
    return () => {
      console.log("unmount");
    };
  }, []);

  useEffect(() => {
    if (!guard.valid) {
      router.replace(`/paymentSteps/${guard.step}`);
    }
  }, [guard.valid, guard.step, router]);

  if (!guard.valid) {
    return null;
  }

  return (
    <main>
      <Home />
    </main>
  );
}