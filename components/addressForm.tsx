'use client'
import { useState, ChangeEvent, FormEvent } from "react";

type FormType = {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
};

type ErrorsType = Partial<FormType>;

const AddressForm = () => {

  const [form, setForm] = useState<FormType>({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [errors, setErrors] = useState<ErrorsType>({});

  // ✅ Validation
  const validate = () => {
    const newErrors: ErrorsType = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter valid 10-digit phone";
    }

    if (!form.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!form.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!form.state.trim()) {
      newErrors.state = "State is required";
    }

    if (!/^[0-9]{6}$/.test(form.pincode)) {
      newErrors.pincode = "Enter valid 6-digit pincode";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Handle change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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

  // ✅ Submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    console.log("Submitted Address:", form);

    setForm({
      fullName: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
    });
  };

  const inputClass = (field: keyof FormType) =>
    `w-full px-3 py-2 rounded-lg border bg-gray-900 text-white placeholder-gray-400 ${
      errors[field] ? "border-red-500 focus:ring-red-400" : "border-gray-700 focus:ring-blue-500"
    } focus:outline-none focus:ring-2`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="bg-gray-900 p-6 rounded-2xl shadow-lg w-full max-w-md border border-gray-800">
        <h2 className="text-xl font-semibold mb-5 text-white">
          📍 Delivery Address
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <input
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              className={inputClass("fullName")}
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
          </div>

          <div>
            <input
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className={inputClass("phone")}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          <div>
            <input
              name="address"
              placeholder="Street Address"
              value={form.address}
              onChange={handleChange}
              className={inputClass("address")}
            />
            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
          </div>

          <div className="flex gap-3">
            <div className="w-1/2">
              <input
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
                className={inputClass("city")}
              />
              {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
            </div>

            <div className="w-1/2">
              <input
                name="state"
                placeholder="State"
                value={form.state}
                onChange={handleChange}
                className={inputClass("state")}
              />
              {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
            </div>
          </div>

          <div>
            <input
              name="pincode"
              placeholder="Pincode"
              value={form.pincode}
              onChange={handleChange}
              className={inputClass("pincode")}
            />
            {errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Save Address
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;