'use client'
export const dynamic = "force-dynamic";
import { Spinner } from "@/components/ui/spinner";
import { useEffect, useReducer,useState } from "react";
import checkoutReducer from '@/components/checkoutReducer';
import AddressStep from "@/components/addressStep";
import Cart from '@/components/Cartcomponent';
import Home from '@/components/paymentComponent'
const initialState = {
  step: 'cart',
};


// 🧠 Strategy map
const stepComponents : any = {
  cart: Cart,
  address: AddressStep,
  payment : Home
};

export default function CartPage() {
  const [state, dispatch] = useReducer(checkoutReducer, initialState);
  const[loading, setloading] = useState(false)
 
  const changeState = (state : any) => {
    setloading(state)
  }

   useEffect(()=> {
     const pausemechanism = async() => {
          await new Promise<void>((res)=>setTimeout(()=> {res()},2500));
        setloading(true)
  }
    if(!loading){
       pausemechanism()
      }
      console.log(loading)

   },[loading])

  // 🎯 Pick component dynamically
  const StepComponent = stepComponents[state.step];

  return (
    <main className="h-full w-full">
   
      {!loading && <Spinner/>}
      {/* 🚀 Render selected strategy */}
      { (StepComponent&&loading) && <StepComponent dispatch={dispatch} changeState = {changeState} />}
    </main>
  );
}