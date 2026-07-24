'use client';

import Cart from "@/components/Cartcomponent";
import { useCartStore } from "@/components/Cartstore";
import { useRouter } from "next/navigation";
import { useStepGuard } from "@/components/useStepGuard";
import { useCallback, useEffect } from "react";
import { useState, useRef } from "react";


const Page =  () => {
     const [isloading, setisloading] = useState(false);
    const [ispresent, setIsPresent] = useState< boolean|null>(null);
    const [step, Setstep] = useState('signin');
    const emailRef = useRef<any>(null);
    const check = useRef<any>(false)
    const passwordRef = useRef<any>(null);

    const detailsObj : any = {}

    const setDetails = (e : any, key : any) => {
  
                detailsObj[key] =  e.target.value;
              
    }

    const SendDetails = async() => {
               let flag = false;
               const arr = Object.values(detailsObj);
                   if(arr.length < 5){
                    flag = true
                   }
                   if(flag){window.alert('All fields are required to be filled'); return;};
                           if(detailsObj.password !== detailsObj.confirmpassword){
                                  window.alert('password and reconfirm password not matching');
                                  return
                           }     

                      const res =   await fetch("/api/usersignup", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(detailsObj),
});

     const data = await res.json();
              if(data.status === 200){
                setIsPresent(true)
              }
         console.log(data.message)
                  }

    const SignIn
 = () => {
  return (
    <div className="">

    <div className="  bg-stone-100 flex items-start">
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
      <div className="flex-1 flex  items-center justify-center px-6 py-12">
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
              
                ref={check}
              
                  type="checkbox"
                  className="h-4 w-4 accent-black"
                />
                Remember me
              </label>
            </div>

            {/* Button */}
            <button
            onClick={handleInput }
              className={`w-full ${isloading ? 'hidden' : ''} rounded-xl bg-black py-4 text-white font-medium transition hover:bg-stone-800`}
            >
              Sign In
            </button>
                        <div className={`h-full ${!isloading ? 'hidden' : ''} flex items-center justify-center`}>
          <div className="h-10 w-10 rounded-full border-3 border-gray-300 border-b-black  animate-spin "></div>
    </div>

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
     
            {/* Footer */}
            <p className="text-center text-sm text-stone-500">
              Don't have an account?
              <button
                type="button"
                onClick={() => Setstep('signup')}
                className="ml-2 font-semibold text-black underline underline-offset-2 hover:underline"
              >
                Create one
              </button>
            </p>

          </form>
        </div>
      </div>
    </div>
  ;

      </div>
  )
 }    
 
 const SignUp = () => {
  return (
           <div className="h-[120vh] relative overflow-y-scroll bg-stone-100 flex">
  {/* Left Side Image */}
  <div className="hidden lg:block w-1/2 relative overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600&auto=format&fit=crop"
      alt="Fashion"
      className="absolute inset-0 h-full w-full object-cover"
    />

    <div className="absolute inset-0 bg-black/30" />

    <div className="absolute bottom-16 left-16 text-white max-w-md">
      <p className="uppercase tracking-[0.4em] text-sm mb-4">
        Join the Community
      </p>

      <h1 className="text-6xl font-light leading-none mb-6">
        Create
        <br />
        Account
      </h1>

      <p className="text-white/80 text-lg">
        Discover curated fashion pieces and exclusive collections crafted for
        your everyday style.
      </p>
    </div>
  </div>

  {/* Right Side */}
  <div className="flex-1  flex  px-6 py-10">
    <div className="w-full  ">

      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-4xl font-semibold tracking-tight text-stone-900">
          Sign Up
        </h2>

        <p className="mt-3 text-stone-500">
          Create your account in a few simple steps.
        </p>
      </div>

      <form className = "space-y-5">

        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Full Name
          </label>

          <input
            type="text"
            onChange={(e) => setDetails(e, 'name')}
            placeholder="John Doe"
            className="w-full rounded-xl border border-stone-300 bg-white px-5 py-4 text-black outline-none transition focus:border-black"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Email
          </label>

          <input
            type="email"
             onChange={(e) => setDetails(e, 'email')}
            placeholder="Enter your email"
            className="w-full rounded-xl border border-stone-300 bg-white px-5 py-4 text-black outline-none transition focus:border-black"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Phone Number
          </label>

          <input
            type="tel"
             onChange={(e) => setDetails(e, 'number')}
            placeholder="+91 9876543210"
            className="w-full rounded-xl border border-stone-300 bg-white px-5 py-4 text-black outline-none transition focus:border-black"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Password
          </label>

          <input
            type="password"
             onChange={(e) => setDetails(e, 'password')}
            placeholder="Create a password"
            className="w-full rounded-xl border border-stone-300 bg-white px-5 py-4 text-black outline-none transition focus:border-black"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Confirm Password
          </label>

          <input
            type="password"
             onChange={(e) => setDetails(e, 'confirmpassword')}
            placeholder="Confirm password"
            className="w-full rounded-xl border border-stone-300 bg-white px-5 py-4 text-black outline-none transition focus:border-black"
          />
        </div>

        {/* Terms */}
        <label className="flex items-start gap-3 text-sm text-stone-600">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 accent-black"
          />

          <span>
            I agree to the{" "}
            <button
              type="button"
              className="underline underline-offset-2 text-black"
            >
              Terms
            </button>{" "}
            and{" "}
            <button
              type="button"
              className="underline underline-offset-2 text-black"
            >
              Privacy Policy
            </button>
            .
          </span>
        </label>

        {/* Button */}
        <button
          type="submit"
          onClick={(e) =>{ e.preventDefault(); SendDetails()}}
          className="w-full rounded-xl bg-black py-4 text-white font-medium transition hover:bg-stone-800"
        >
          Create Account
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

        {/* Footer */}
        <p className="text-center text-sm text-stone-500">
          Already have an account?
          <button
            type="button"
            className="ml-2 font-semibold text-black underline underline-offset-2"
          >
            Sign In
          </button>
        </p>

      </form>
    </div>
  </div>
</div>
  )
 }
const userStep: Record<string, React.ReactNode> = {
  signup: <SignUp />,
  signin: <SignIn />,
};


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
                    setisloading(true)
                    console.log( check.current.checked)
             const res : any = await fetch('/api/userlogin', {
                   method: 'POST',
                   headers: {
                     'Content-Type': 'application/json',
                   },
                   body: JSON.stringify({
                     email: emailRef.current.value,
                     password: passwordRef.current.value,
                     cookieNeeded : check.current.checked
                   }),
             });
    
             const result = await res.json();
                          setisloading(false);

                          if(result.status === 200){
                                setIsPresent(true)
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
    <main className="h-screen  bg-[#f7f5f2] w-full">
      {ispresent ? ( 
        < div className="flex flex-col" >
        <Cart />

        <div className="p-4">
          <button
            onClick={handleContinue}
            className="w-full bg-black text-white py-3 rounded-xl"
          >
            Continue to Address →
          </button>
        </div>
        </div>
     ) :  (  ispresent != null ?   userStep[step] : ( <div className="h-full flex items-center justify-center">
          <div className="h-15 w-15 rounded-full border-5 border-gray-300 border-b-black  animate-spin "></div>
    </div>)) }
     
    </main>
  );
};

export default Page;