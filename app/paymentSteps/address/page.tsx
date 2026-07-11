'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AddressStep from "@/components/addressStep";
import { useStepGuard } from "@/components/useStepGuard";

export default function Page() {
  const router = useRouter();
  const guard = useStepGuard("address");

  useEffect(() => {
    if (!guard.valid) {
      router.replace(`/paymentSteps/${guard.step}`);
    }
  }, [guard.valid, guard.step, router]);

  if (!guard.valid) {
    return null;
  }

  return (
    <main className="h-svh w-svw">
      <AddressStep />
    </main>
  );
}