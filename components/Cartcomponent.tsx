'use client'
export const dynamic = "force-dynamic";

import { useCartStore } from "@/components/Cartstore";

const Cart = ({ dispatch }: any) => {
  const cart = useCartStore((state) => state.obj.cart);
  const increase = useCartStore((state) => state.increase);
  const decrease = useCartStore((state) => state.decrease);
  const removeItem = useCartStore((state) => state.removeItem);

  const total = cart.reduce(
    (acc: number, item: any) => acc + item.price * item.quantity,
    0
  );

  return (
    <section className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <div className="text-center text-gray-500 text-lg mt-10">
          🛒 Your cart is empty
        </div>
      ) : (
        <>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {cart.map((item: any) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {item.category}
                  </p>

                  <div className="mt-3 text-sm text-gray-700">
                    <p>Qty: <span className="font-medium">{item.quantity}</span></p>
                    <p>
                      Total:{" "}
                      <span className="font-semibold text-green-600">
                        ₹{item.price * item.quantity}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decrease(item.id)}
                      className="px-2 py-1 bg-black rounded hover:bg-gray-300"
                    >
                      -
                    </button>

                    <span className="px-2 text-black ">{item.quantity}</span>

                    <button
                      onClick={() => increase(item.id)}
                      className="px-2 py-1 bg-black rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="mt-10 bg-white shadow-md rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xl font-semibold text-gray-800">
              Grand Total:{" "}
              <span className="text-green-600">₹{total}</span>
            </p>

            <button
              onClick={() =>
                dispatch({ type: "GO_TO_STEP", payload: "address" })
              }
              className="mt-4 md:mt-0 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow"
            >
              Proceed to Checkout →
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;