'use client'

import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { MenuDrawer } from '@/components/drawercomponent'
import { useCartStore } from "@/components/Cartstore";

const Header = () => {

  const router = useRouter()
  const [cartItemsNumber, setItemsnumber] = useState<null | number>(null)
  const cartiitems = useCartStore((state) => state.obj.cart.length)

  useEffect(() => {
    setItemsnumber(cartiitems)
  }, [cartiitems])

  return (
    <>
      <header className="w-full bg-white pb-6">

        {/* Top Bar */}
        <div className="relative flex items-center justify-center h-[85px] px-4 md:px-10 lg:px-16">

          {/* Left - Menu */}
          <div className="absolute left-4 md:left-8 lg:left-12">
            <MenuDrawer />
          </div>

          {/* Brand */}
          <div className="flex items-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold text-shadow-md text-shadow-orange-700 font-mono tracking-tighter drop-shadow-sm">
              DRIP
            </h1>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold text-shadow-md text-shadow-orange-700 font-mono tracking-tighter ml-1 drop-shadow-sm">
              BOHAG
            </h1>
          </div>

          {/* Right - Cart */}
          <div
            onClick={() => router.push('/cart')}
            className="absolute right-4 md:right-8 lg:right-12 cursor-pointer active:scale-90 transition"
          >
            <FaShoppingCart className="text-orange-500" size={22} />

            {/* Cart Badge */}
            <span className="absolute -top-3 -right-3 bg-black text-white text-[10px] px-1.5 py-[1px] rounded-full">
              {cartItemsNumber ?? 0}
            </span>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-center text-xs md:text-sm text-shadow-2xs tracking-widest text-gray-600 -mt-2">
          Whats Your Move Today ?
        </p>

        {/* Search Bar */}
        <div className="px-4 md:px-10 lg:px-40 mt-4 mb-3">
          <div className="flex items-center bg-white/70 backdrop-blur-md rounded-full px-4 py-2 shadow-lg shadow-black border border-white/40 focus-within:ring-2 focus-within:ring-black/70 transition-all duration-300">

            <IoIosSearch className="text-gray-500" size={20} />

            <input
              type="text"
              placeholder="Search kurtas, sarees..."
              className="w-full ml-3 bg-transparent outline-none text-sm md:text-base text-black placeholder-gray-700"
            />

            <span className="text-gray-400 text-sm">🎤</span>
          </div>
        </div>

      </header>
    </>
  )
}

export default Header;