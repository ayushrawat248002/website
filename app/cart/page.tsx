'use client'
export const dynamic = "force-dynamic";

import { useReducer } from "react";
import checkoutReducer from '@/components/checkoutReducer';
import AddressStep from "@/components/addressStep";
import Cart from '@/components/Cartcomponent';

const initialState = {
  step: 'cart',
};

// 🧠 Strategy map
const stepComponents : any = {
  cart: Cart,
  address: AddressStep,
};

export default function CartPage() {
  const [state, dispatch] = useReducer(checkoutReducer, initialState);

  // 🎯 Pick component dynamically
  const StepComponent = stepComponents[state.step];

  return (
    <main>
      <h1>Current Step: {state.step}</h1>

      {/* 🚀 Render selected strategy */}
      {StepComponent && <StepComponent dispatch={dispatch} />}
    </main>
  );
}