'use client';

import { useCartStore } from "./Cartstore";

const stepOrder = {
  cart: 0,
  address: 1,
  payment: 2,
  statusPage: 3,
} as const;

type Step = keyof typeof stepOrder;

export const useStepGuard = (requiredStep: Step) => {
  const step = useCartStore((s) => s.obj.step);

  return {
    valid: stepOrder[step] >= stepOrder[requiredStep],
    step,
  };
};