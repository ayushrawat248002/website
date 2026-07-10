'use client'
import { Suspense, lazy, useEffect } from "react";
 import { useCartStore } from "@/components/Cartstore";
import { useRouter } from "next/navigation";
 import { useStepGuard } from "@/components/useStepGuard";
const AddressStep = lazy(() => import("@/components/addressStep"));


  
      
           
  
export default function Page() {
  
  const step = useCartStore((state) => state.obj.step)
  const valid = useStepGuard("address");

   const router = useRouter()

    useEffect(() => {
           if (!valid.valid) {
             router.replace(`/paymentSteps/${step}`);
           }
         }, [valid, router]);
  return (
    <main className="h-svh w-svw">
      <Suspense fallback={<p>Loading...</p>}>
      <AddressStep />
      </Suspense>
    </main>
  );
}