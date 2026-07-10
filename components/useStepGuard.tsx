'use client'
import { useCartStore } from "./Cartstore";

export const useStepGuard = (requiredStep: string) => {

  const step = useCartStore((s) => s.obj.step);
console.log(step, ' current step')
  return { valid : step === requiredStep , step };
};