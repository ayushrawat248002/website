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

const AddressStep = ({ dispatch }: Props) => {

  // ✅ Zustand selectors
  const addAddress = useCartStore((state) => state.setAddress);
  const saveAddress = useCartStore((state) => state.obj.address);
  const currentAddress = useCartStore((state) => state.setcurrentAddress);
  const selectedaddress = useCartStore((state) => state.obj.currentaddress);

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

  // ✅ Validation
  const validate = () => {
    const newErrors: Partial<FormType> = {};

    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!/^\d{10}$/.test(form.phone)) newErrors.phone = "Enter valid 10-digit phone";
    if (!form.address.trim()) newErrors.address = "Address is required";
    if (!form.city.trim()) newErrors.city = "City is required";
    if (!form.state.trim()) newErrors.state = "State is required";
    if (!/^\d{6}$/.test(form.pincode)) newErrors.pincode = "Enter valid 6-digit pincode";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Input handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // ✅ Select address
  const handleClick = (address: FormType, index: number) => {
    setForm(address);
    setSelected(index);
    currentAddress(address); // ✅ keep store in sync                 
  };

  // ✅ Submit logic (fixed)
  const handleSubmit = () => {
    if (!validate()) return;

    if (addToggle) {
      addAddress(form);
      currentAddress(form);
      setToggle(false);
    } else if (selected !== null) {
      currentAddress(saveAddress[selected]);
    } else {
      return; // ❌ prevent submit without selection
    }

    setForm({
      fullName: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
    });

    dispatch({ type: "GO_TO_STEP", payload: "payment" });
  };

  const inputClass = (field: keyof FormType) =>
    `w-full px-3 py-2 rounded-lg border ${
      errors[field] ? "border-red-500" : "border-gray-300"
    } focus:outline-none focus:ring-2 ${
      errors[field] ? "focus:ring-red-400" : "focus:ring-black"
    }`;

  const isDisabled =
    !addToggle && selected === null && saveAddress?.length > 0;

  return (
    <div className="max-w-md mx-auto h-screen mt-10 p-6 bg-white rounded-2xl shadow-lg">

      {/* ✅ Existing Addresses */}
      {(saveAddress?.length > 0 && !addToggle) && (
        <div>
          {saveAddress.map((add: FormType, index: number) => {
            const isActive =
              selected === index ||
              (selectedaddress &&
                selectedaddress.fullName === add.fullName &&
                selectedaddress.phone === add.phone &&
                selectedaddress.address === add.address);

            return (
              <div
                key={index}
                className="mb-4 p-3 flex gap-3 border rounded-lg"
              >
                <button
                  onClick={() => handleClick(add, index)}
                  className={`w-[20px] h-[20px] rounded-full border ${
                    isActive ? "bg-black" : "bg-white"
                  }`}
                />

                <div>
                  <h2 className="font-semibold">{add.fullName}</h2>
                  <p>{add.address}</p>
                  <p>{add.city}, {add.state}</p>
                  <p>{add.pincode}</p>
                  <p>{add.phone}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ✅ Form */}
      {(saveAddress?.length === 0 || addToggle) && (
        <div>
          <h2 className="text-xl font-semibold mb-5">📍 Delivery Address</h2>

          <div className="mb-3">
            <input
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              className={inputClass("fullName")}
            />
            {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName}</p>}
          </div>

          <div className="mb-3">
            <input
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className={inputClass("phone")}
            />
            {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
          </div>

          <div className="mb-3">
            <input
              name="address"
              placeholder="Street Address"
              value={form.address}
              onChange={handleChange}
              className={inputClass("address")}
            />
            {errors.address && <p className="text-red-500 text-xs">{errors.address}</p>}
          </div>

          <div className="flex gap-3 mb-3">
            <input
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              className={inputClass("city")}
            />
            <input
              name="state"
              placeholder="State"
              value={form.state}
              onChange={handleChange}
              className={inputClass("state")}
            />
          </div>

          <div className="mb-4">
            <input
              name="pincode"
              placeholder="Pincode"
              value={form.pincode}
              onChange={handleChange}
              className={inputClass("pincode")}
            />
            {errors.pincode && <p className="text-red-500 text-xs">{errors.pincode}</p>}
          </div>
        </div>
      )}

      {/* ✅ Submit */}
      <button
        onClick={handleSubmit}
        disabled={isDisabled}
        className={`w-full py-3 rounded-lg font-semibold ${
          isDisabled ? "bg-gray-400" : "bg-black text-white hover:bg-gray-800"
        }`}
      >
        Continue to Payment →
      </button>

      {/* ✅ Toggle */}
      <button
        onClick={() => setToggle(true)}
        className="mt-4 text-sm text-blue-600 underline"
      >
        Add new address
      </button>
    </div>
  );
};

export default AddressStep;