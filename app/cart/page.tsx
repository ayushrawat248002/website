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
  const[loading, setloading] = useState(true)
 
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
    <main className="h-[100vh] ">
   
      {!loading && <div className="h-full  flex items-center justify-center "><Spinner/></div>}
      {/* 🚀 Render selected strategy */}
      { (StepComponent&&loading) && <div className="h-[100vh] overflow-y-scroll"><StepComponent dispatch={dispatch} changeState = {changeState} /></div>}
    </main>
  );
}