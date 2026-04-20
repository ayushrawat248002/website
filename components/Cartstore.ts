import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
};

type Store = {
   obj : {
    address: any;
    currentaddress : any,
    cart: CartItem[];
    orders : []
    theme : 'white'|'black',
  };
  setcurrentAddress : (adress : Object) => void
  setAddress: (address: Object) => void;
  setorderSummary : (orderSummary : Object) => void;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  increase: (id: string) => void;
  decrease: (id: string) => void;
  removeItem: (id: string) => void;
  setTheme : (theme : 'white'|'black') => void
  clearCart: () => void;
   changeorderSummary : (orderid : any) => void
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
    (set) => ({
      obj: {
        address: [],
        currentaddress : null,
        cart: [],
        orders :[], 
        theme : 'black',
      },

      setTheme : (theme : 'white'|'black') => set((state : any) => {
        return {
          obj: {
            ...state.obj,
            theme: theme,
          },
        };
      }),

      setorderSummary : (orderSummary : any) => set((state :any) => {
        return  {
               obj : {
                ...state.obj,orders : [...state.obj.orders,orderSummary]
               }
        }
      }),

       changeorderSummary : (orderid : any) => set((state :any) => {
        return  {
               obj : {
                ...state.obj,orders : state.obj.orders.map((order : any) => {
                     if(order.order_id === orderid){
                      return {...order,status : 'paid' }
                     }else{
                      return order
                     }
                })
               }
        }
      }),

      // ✅ set address


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
        setcurrentAddress : (address) => set((state) => {
                 return {
                  obj : {
                    ...state.obj,currentaddress : address
                  }
                 }
        }),

      // ✅ add item
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

      // ✅ increase quantity
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

      // ✅ decrease quantity
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

      // ✅ remove item
      removeItem: (id) =>
        set((state) => ({
          obj: {
            ...state.obj,
            cart: state.obj.cart.filter((item) => item.id !== id),
          },
        })),

      // ✅ clear cart
      clearCart: () =>
        set((state) => ({
          obj: {
            ...state.obj,
            cart: [],
          },
        })),
    }),
    {
      name: "cart-storage", // localStorage key
    }
  )
);