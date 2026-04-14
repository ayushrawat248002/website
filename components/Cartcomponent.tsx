'use client'
export const dynamic = "force-dynamic";
import { useCartStore } from "@/components/Cartstore";
import { useEffect } from "react";
const Cart = ({ dispatch }: any) => {
  const cart = useCartStore((state) => state.obj.cart);
  const increase = useCartStore((state) => state.increase);
  const decrease = useCartStore((state) => state.decrease);
  const removeItem = useCartStore((state) => state.removeItem);

  const total = cart.reduce(
    (acc : any, item : any) => acc + item.price * item.quantity,
    0
  );


  return (
    <section className="flex h-screen gap-4 flex-wrap p-4">
      {cart.length === 0 ? (
        <div>Cart is empty</div>
      ) : (
        cart.map((item : any) => (
          <div
            key={item.id}
            className="h-[240px] w-[200px] border p-2 rounded"
          >
            <h2 className="font-bold">{item.name}</h2>
            <p>{item.category}</p>
            <p>Qty: {item.quantity}</p>
            <p>Total: ₹{item.price * item.quantity}</p>

            <div className="flex gap-2 mt-2">
              <button onClick={() => increase(item.id)}>+</button>
              <button onClick={() => decrease(item.id)}>-</button>
              <button onClick={() => removeItem(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))
      )}

      <div className="w-full mt-4">
        <p className="font-bold text-lg">
          Grand Total: ₹{total}
        </p>

        <button
          onClick={() =>
            dispatch({ type: "GO_TO_STEP", payload: "address" })
          }
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Checkout
        </button>
      </div>
    </section>
  );
};

export default Cart;