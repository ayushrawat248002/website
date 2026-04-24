'use client'

import { useState } from "react";
import { useCartStore } from "./Cartstore";

type Props = {
  dispatch: any;
};

type FormType = {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
};

const AddressStep = ({ dispatch, changeState }:any) => {
  const cart = useCartStore((state) => state.obj.cart);
  const addAddress = useCartStore((state) => state.setAddress);
  const saveAddress = useCartStore((state) => state.obj.address);
  const currentAddress = useCartStore((state) => state.setcurrentAddress);

  const [form, setForm] = useState<FormType>({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [errors, setErrors] = useState<Partial<FormType>>({});
  const [selected, setSelected] = useState<number | null>(null);
  const [addToggle, setToggle] = useState<boolean>(false);

  const total = cart.reduce(
    (acc: number, item: any) => acc + item.price * item.quantity,
    0
  );

  const deliveryFee = total > 499 ? 0 : 40;

  const validate = () => {
    const newErrors: Partial<FormType> = {};

    if (!form.fullName.trim()) newErrors.fullName = "Required";
    if (!/^\d{10}$/.test(form.phone)) newErrors.phone = "Invalid phone";
    if (!form.address.trim()) newErrors.address = "Required";
    if (!form.city.trim()) newErrors.city = "Required";
    if (!form.state.trim()) newErrors.state = "Required";
    if (!/^\d{6}$/.test(form.pincode)) newErrors.pincode = "Invalid pincode";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (addToggle) {
      if (!validate()) return;

      addAddress(form);
      currentAddress(form);
      setToggle(false);
    } else {
      if (selected === null) {
        alert("Please select an address");
        return;
      }
      currentAddress(saveAddress[selected]);
    }

    localStorage.setItem('total', JSON.stringify(total));
    dispatch({ type: "GO_TO_STEP", payload: "payment" });
     changeState(false)
  };

  const inputClass = (field: keyof FormType) =>
    `w-full px-4 py-2.5 rounded-xl border text-sm ${
      errors[field] ? "border-red-400" : "border-gray-300"
    } focus:outline-none focus:ring-2 focus:ring-black`;

  return (
    <div className="h-auto bg-gray-100 p-6">

      {/* Progress */}
      <div className="max-w-5xl mx-auto mb-6 flex justify-between text-sm text-gray-600">
        <span className="font-semibold">🛒 Cart</span>
        <span className="font-semibold text-black">📍 Address</span>
        <span>💳 Payment</span>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow">

          <h2 className="text-xl font-semibold text-black mb-4">
            Delivery Address
          </h2>

          {/* Saved Addresses */}
          {saveAddress?.length > 0 && !addToggle && (
            <div className="space-y-4 mb-4">
              {saveAddress.map((add: FormType, index: number) => (
                <label
                  key={index}
                  className={`flex gap-3 p-4 border rounded-xl cursor-pointer ${
                    selected === index
                      ? "border-black bg-gray-50"
                      : "hover:border-gray-400"
                  }`}
                >
                  <input
                    type="radio"
                    name="address"
                    checked={selected === index}
                    onChange={() => setSelected(index)}
                  />

                  <div>
                    <h3 className="font-semibold text-black">{add.fullName}</h3>
                    <p className="text-sm text-gray-600">{add.address}</p>
                    <p className="text-sm text-gray-600">
                      {add.city}, {add.state} - {add.pincode}
                    </p>
                    <p className="text-sm text-gray-500">📞 {add.phone}</p>
                  </div>
                </label>
              ))}
            </div>
          )}

          {/* Form */}
          {(saveAddress?.length === 0 || addToggle) && (
            <div className="space-y-3 text-black">
              <input value={form.fullName} placeholder="Full Name" 
                className={inputClass("fullName")}
                onChange={(e)=>setForm({...form,fullName:e.target.value})}
              />

              <input value={form.phone} placeholder="Phone"
                className={inputClass("phone")}
                onChange={(e)=>setForm({...form,phone:e.target.value})}
              />

              <input value={form.address} placeholder="Street Address"
                className={inputClass("address")}
                onChange={(e)=>setForm({...form,address:e.target.value})}
              />

              <div className="grid grid-cols-2 gap-3">
                <input value={form.city} placeholder="City"
                  className={inputClass("city")}
                  onChange={(e)=>setForm({...form,city:e.target.value})}
                />

                <input value={form.state} placeholder="State"
                  className={inputClass("state")}
                  onChange={(e)=>setForm({...form,state:e.target.value})}
                />
              </div>

              <input value={form.pincode} placeholder="Pincode"
                className={inputClass("pincode")}
                onChange={(e)=>setForm({...form,pincode:e.target.value})}
              />
            </div>
          )}

          <button
            onClick={handleSubmit}
            className="mt-5 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800"
          >
            Continue →
          </button>

          {!addToggle && (
            <button
              onClick={() => {
                setToggle(true);
                setSelected(null);
              }}
              className="mt-3 text-sm text-blue-600"
            >
              + Add new address
            </button>
          )}
        </div>

        {/* RIGHT */}
        <div className="bg-white p-6 rounded-2xl shadow h-fit">
          <h2 className="text-lg text-black font-semibold mb-4">
            Order Summary
          </h2>

          <div className="space-y-3 text-black text-sm">
            {cart.map((item: any) => (
              <div key={item.id} className="flex justify-between">
                <span>{item.name} × {item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          <hr className="my-4" />

          <div className="flex text-black justify-between text-sm">
            <span>Subtotal</span>
            <span>₹{total}</span>
          </div>

          <div className="flex text-black justify-between text-sm">
            <span>Delivery</span>
            <span>{deliveryFee === 0 ? "Free" : `₹${deliveryFee}`}</span>
          </div>

          <div className="flex text-black justify-between font-semibold mt-3">
            <span>Total</span>
            <span>₹{total + deliveryFee}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressStep;