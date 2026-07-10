
'use client'
import { useStepGuard } from "@/components/useStepGuard";
import AddressStep from "@/components/addressStep";
import { useEffect } from "react";
import { useCartStore } from "@/components/Cartstore";
import { useRouter } from "next/navigation";


const Page = () => {
  const router = useRouter();
  const changeStep = useCartStore((s) => s.setStep)
   const {valid, step} =   useStepGuard('address')
   
   useEffect(() => {
    if (!valid) {
     return;
    }
  }, [valid, router]);
    
     console.log(valid)
     console.log('hit')
     if(!valid){
      return null;
     }


  
 

  return (
    <main>
      <AddressStep />
    </main>
  );
};

export default Page;