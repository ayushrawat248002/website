'use client';

import Cart from "@/components/Cartcomponent";
import { useCartStore } from "@/components/Cartstore";
import { useRouter } from "next/navigation";
import { useStepGuard } from "@/components/useStepGuard";
import { useCallback, useEffect } from "react";
import { useState, useRef } from "react";
const Page =  () => {
     
    const [ispresent, setIsPresent] = useState< boolean|null>(null);
    const emailRef = useRef<any>(null);
    const passwordRef = useRef<any>(null);

  useEffect(() => {
    async function checkAuth() {
      const res = await fetch("/api/auth");
      const data = await res.json();
      setIsPresent(data.success);
    }

    checkAuth();
  }, []);

  const router = useRouter();

  const handleInput = async(e : any) => {
                 e.preventDefault();
                 if(emailRef.current.value.length === 0 ){
                      window.alert('Please Enter the Email')  
                      return;  
                 }else if(passwordRef.current.value.length === 0){
                       window.alert('Please Enter password');
                       return;
                 }

             const res : any = await fetch('/api/userlogin', {
                   method: 'POST',
                   headers: {
                     'Content-Type': 'application/json',
                   },
                   body: JSON.stringify({
                     email: emailRef.current.value,
                     password: passwordRef.current.value,
                   }),
             });

             const result = await res.json();

                      if(result.status === 401){
                            window.alert('User Not found...Proceeed to signup')
                      }


              
  }


  const guard =  useStepGuard("cart");

  const changeStep = useCartStore((s) => s.setStep);

  const handleContinue = () => {
    changeStep("address");
    console.log("moved to address");

    router.push("/paymentSteps/address");
  };

  if (!guard.valid) {
    return null;
  }

  return (
    <main className="h-[100vh] overflow-y-auto w-full">
      {ispresent ? ( 
        <>
        <Cart />

        <div className="p-4">
          <button
            onClick={handleContinue}
            className="w-full bg-black text-white py-3 rounded-xl"
          >
            Continue to Address →
          </button>
        </div>
        </>
     ) :  (  ispresent != null ?   (<div className="">

    <div className=" h-full bg-stone-100 flex">
      {/* Left Side Image */}
      <div className="hidden lg:block w-1/2 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1600&auto=format&fit=crop"
          alt="Fashion"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute bottom-16 left-16 text-white max-w-md">
          <p className="uppercase tracking-[0.4em] text-sm mb-4">
            New Collection
          </p>

          <h1 className="text-6xl font-light leading-none mb-6">
            Timeless
            <br />
            Essentials
          </h1>

          <p className="text-white/80 text-lg">
            Crafted for modern minimalism with premium fabrics and elegant
            silhouettes.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">

          <div className="mb-12">
            <h2 className="text-4xl font-semibold tracking-tight text-stone-900">
              Welcome Back
            </h2>

            <p className="mt-3 text-stone-500">
              Sign in to continue shopping.
            </p>
          </div>

          <form className="space-y-6">

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Email
              </label>

              <input
                ref = {emailRef}
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-stone-300 bg-white px-5 text-black py-4 outline-none transition focus:border-black"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-stone-700">
                  Password
                </label>

                <button
                  type="button"
                  className="text-sm text-stone-500 hover:text-black"
                >
                  Forgot?
                </button>
              </div>

              <input
                ref={passwordRef}
                type="password"
                placeholder="Enter password"
                className="w-full rounded-xl border border-stone-300 bg-white px-5 py-4 outline-none transition text-black focus:border-black"
              />
            </div>

            {/* Remember */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-stone-600">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-black"
                />
                Remember me
              </label>
            </div>

            {/* Button */}
            <button
            onClick={ handleInput }
              className="w-full rounded-xl bg-black py-4 text-white font-medium transition hover:bg-stone-800"
            >
              Sign In
            </button>

            {/* Divider */}
            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-stone-300" />
              </div>

              <div className="relative flex justify-center">
                <span className="bg-stone-100 px-4 text-sm text-stone-500">
                  OR
                </span>
              </div>
            </div>

            {/* Google */}
            <button
              type="button"
              className="w-full rounded-xl border border-stone-300 bg-white py-4 font-medium hover:bg-stone-50 transition"
            >
              Continue with Google
            </button>

            {/* Footer */}
            <p className="text-center text-sm text-stone-500">
              Don't have an account?
              <button
                type="button"
                className="ml-2 font-semibold text-black hover:underline"
              >
                Create one
              </button>
            </p>

          </form>
        </div>
      </div>
    </div>
  ;

      </div>) : (<div className="text-3xl text-black animate-pulse"> Loading ....</div>)) }
     
    </main>
  );
};

export default Page;