'use client'

import Cart from "@/components/Cartcomponent";
import { useCartStore } from "@/components/Cartstore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useStepGuard } from "@/components/useStepGuard";
const Page = () => {
    const valid = useStepGuard('cart')
     
    useEffect(() => {
    changeStep('cart')
   },[])
 


  const router = useRouter();
   const changeStep = useCartStore((s) => s.setStep)
   const cart = useCartStore((s) => s.obj.cart);
  const handleContinue = () => {
  
      changeStep('address')
      router.push('/paymentSteps/address')
            console.log('runed address')
   
  
  };

  
   if(!valid.valid)return null;
  return (
    <main className="h-[100vh] w-full">
      <div className="h-full overflow-y-scroll">
        <Cart />

        {/* 🔥 Continue Button */}
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