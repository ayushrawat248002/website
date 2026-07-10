import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
};

type Step = "cart" | "address" | "payment";

type Store = {
  obj: {
    step: Step;
    address: any[];
    currentaddress: any;
    cart: CartItem[];
    orders: any[];
    theme: "white" | "black";
  };

  // 🔥 NEW
  setStep: (step: Step) => void;
  nextStep: () => void;
  prevStep: () => void;

  setcurrentAddress: (adress: Object) => void;
  setAddress: (address: Object) => void;
  setorderSummary: (orderSummary: Object) => void;
  changeorderSummary: (orderid: any) => void;

  addItem: (item: Omit<CartItem, "quantity">) => void;
  increase: (id: string) => void;
  decrease: (id: string) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;

  setTheme: (theme: "white" | "black") => void;
};

const isSameAddress = (a: any, b: any) =>
  a.fullName === b.fullName &&
  a.phone === b.phone &&
  a.address === b.address &&
  a.city === b.city &&
  a.state === b.state &&
  a.pincode === b.pincode;

export const useCartStore = create<Store>()(
  persist(
    (set, get) => ({
      obj: {
        step: "cart", // ✅ default
        address: [],
        currentaddress: null,
        cart: [],
        orders: [],
        theme: "black",
      },

      // 🔥 STEP CONTROL

      setStep: (step) =>
        set((state) => ({
          obj: { ...state.obj, step : step },
        })),

      nextStep: () =>
        set((state) => {
          const { step, cart, currentaddress } = state.obj;

          if (step === "cart" && cart.length > 0) {
            return { obj: { ...state.obj, step: "address" } };
          }

          if (step === "address" && currentaddress) {
            return { obj: { ...state.obj, step: "payment" } };
          }

          return state;
        }),

      prevStep: () =>
        set((state) => {
          const { step } = state.obj;

          if (step === "payment") {
            return { obj: { ...state.obj, step: "address" } };
          }

          if (step === "address") {
            return { obj: { ...state.obj, step: "cart" } };
          }

          return state;
        }),

      // -------------------------
      // EXISTING LOGIC (kept)
      // -------------------------

      setTheme: (theme) =>
        set((state) => ({
          obj: { ...state.obj, theme },
        })),

      setorderSummary: (orderSummary: any) =>
        set((state) => ({
          obj: {
            ...state.obj,
            orders: [...state.obj.orders, orderSummary],
          },
        })),

      changeorderSummary: (orderid: any) =>
        set((state) => ({
          obj: {
            ...state.obj,
            orders: state.obj.orders.map((order: any) =>
              order.order_id === orderid
                ? { ...order, status: "paid" }
                : order
            ),
          },
        })),

      setAddress: (newAddress: any) =>
        set((state) => {
          const exists = state.obj.address.some((addr: any) =>
            isSameAddress(addr, newAddress)
          );

          if (exists) return state;

          return {
            obj: {
              ...state.obj,
              address: [...state.obj.address, newAddress],
            },
          };
        }),

      setcurrentAddress: (address) =>
        set((state) => ({
          obj: { ...state.obj, currentaddress: address },
        })),

      addItem: (item) =>
        set((state) => {
          const existing = state.obj.cart.find((i) => i.id === item.id);

          if (existing) {
            return {
              obj: {
                ...state.obj,
                cart: state.obj.cart.map((i) =>
                  i.id === item.id
                    ? { ...i, quantity: i.quantity + 1 }
                    : i
                ),
              },
            };
          }

          return {
            obj: {
              ...state.obj,
              cart: [...state.obj.cart, { ...item, quantity: 1 }],
            },
          };
        }),

      increase: (id) =>
        set((state) => ({
          obj: {
            ...state.obj,
            cart: state.obj.cart.map((item) =>
              item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          },
        })),

      decrease: (id) =>
        set((state) => ({
          obj: {
            ...state.obj,
            cart: state.obj.cart
              .map((item) =>
                item.id === id
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              )
              .filter((item) => item.quantity > 0),
          },
        })),

      removeItem: (id) =>
        set((state) => ({
          obj: {
            ...state.obj,
            cart: state.obj.cart.filter((item) => item.id !== id),
          },
        })),

      clearCart: () =>
        set((state) => ({
          obj: { ...state.obj, cart: [] },
        })),
    }),
    {
      name: "cart-product",
    }
  )
);