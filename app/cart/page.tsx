'use client'
export const dynamic = "force-dynamic";

import { useReducer } from "react";
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

  // 🎯 Pick component dynamically
  const StepComponent = stepComponents[state.step];

  return (
    <main className="h-full w-full">
   

      {/* 🚀 Render selected strategy */}
      {StepComponent && <StepComponent dispatch={dispatch} />}
    </main>
  );
}