'use client';

import Cart from "@/components/Cartcomponent";
import { useCartStore } from "@/components/Cartstore";
import { useRouter } from "next/navigation";
import { useStepGuard } from "@/components/useStepGuard";

const Page = () => {
  const router = useRouter();

  const guard = useStepGuard("cart");

  const changeStep = useCartStore((s) => s.setStep);

  const handleContinue = () => {
    changeStep("address");
    console.log("moved to address");

    router.push("/paymentSteps/address");
  };

  if (!guard.valid) {
    return null;
  }

  return (
    <main className="h-[100vh] w-full">
      <div className="h-full overflow-y-scroll">
        <Cart />

        <div className="p-4">
          <button
            onClick={handleContinue}
            className="w-full bg-black text-white py-3 rounded-xl"
          >
            Continue to Address →
          </button>
        </div>
      </div>
    </main>
  );
};

export default Page;