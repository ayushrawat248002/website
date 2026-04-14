'use client'

import { useRouter } from "next/navigation"
import { CgProfile } from "react-icons/cg";
import { LuShoppingCart } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";


const LoginButtons = () => {
  const router = useRouter()

  const cartCount = 2;
  const wishlistCount = 3;

  return (
    <div className="flex w-[200px] flex-row-reverse absolute top-0 right-0 border-none mt-3 gap-6 items-center px-2 py-1">

      {/* Profile */}
      <div className="flex flex-col items-center cursor-pointer">
        <CgProfile className="text-black lg:text-2xl" />
        
      </div>

      {/* Cart */}
      <div className="relative flex flex-col items-center cursor-pointer">
        <LuShoppingCart onClick={() => router.push('/cart')} className="text-black lg:text-2xl" />
       

        {cartCount > 0 && (
          <span className="absolute -top-2 -right-4 bg-black text-white lg:text-[10px] text-[8px] px-1.5 py-0.5 rounded-full">
            {cartCount}
          </span>
        )}
      </div>

      {/* Wishlist */}
      <div className="relative flex flex-col items-center cursor-pointer">
        <FaHeart className="text-red-500 lg:text-2xl " />
       

        {wishlistCount > 0 && (
          <span className="absolute -top-2 -right-3 bg-black text-white lg:text-[10px] text-[8px] px-1.5 py-0.5 rounded-full">
            {wishlistCount}
          </span>
        )}
      </div>

    </div>
  )
}

export default LoginButtons;