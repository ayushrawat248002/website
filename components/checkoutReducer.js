'use client'
const steps = {
  cart: ['address'],
  address: ['payment'],
  payment: ['success', 'fail'],
  success: [],
  fail: ['payment']
};

// ✅ FSM validator
const isValidTransition = (current, next) => {
  return steps[current]?.includes(next);
};

const checkoutReducer = (state, action) => {
  switch (action.type) {

    case 'GO_TO_STEP': {
      const nextStep = action.payload;

      if (!isValidTransition(state.step, nextStep)) {
        console.warn(`❌ Invalid transition: ${state.step} → ${nextStep}`);
        return state;
      }

      return {
        ...state,
        step: nextStep
      };
    }

    case 'RESET':
      return { step: 'cart' };

    default:
      return state;
  }
};

export default checkoutReducer;