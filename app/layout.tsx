'use client'
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import Image from "next/image";
import "./globals.css";

import { useEffect, useState } from "react";

import { BiCategory } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { TiThMenuOutline } from "react-icons/ti";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import {MenuDrawer} from '@/components/drawercomponent' 
import { useCartStore } from "@/components/Cartstore";
 import { Menu, Search, Heart, ShoppingBag, User } from "lucide-react";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter()
  const [index, setIndex] = useState<number | null>(null);
  const [cartItemsNumber,setItemsnumber] = useState<null|number>(null)
  const cartiitems = useCartStore((state)=> state.obj.cart.length)
  const [enabled, setEnabled] = useState<boolean>(false);
   const[obj,setobj] = useState<boolean>(false);
   const [toogledindex, setIndextoogle] = useState<number|null>(null)
   const icons = [IoHomeOutline,BiCategory,CgProfile]

   useEffect(()=>{
           setItemsnumber(cartiitems)
   },[cartiitems])

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} w-full scroll-smooth`}
    >
      <body className="m-0 p-0 min-w-svw  max-h-svh   relative bg-yellow-200  text-black font-[var(--font-poppins)]">

        {/* 🔝 HEADER */}
      
        

                 
             <header className="w-full bg-white pb-6 ">

  {/* Top Bar */}
  <div className="relative flex items-center justify-center h-[85px] px-4">

    {/* Left - Menu */}
    <div className="absolute left-4">
      <MenuDrawer />
    </div>

    {/* Brand */}
    <h1 className=" text-3xl text-white  font-semibold text-shadow-md text-shadow-orange-700 font-mono tracking-tighter  text-white drop-shadow-sm">
      DRIP
    </h1>
    <h1 className="text-3xl text-white  font-semibold text-shadow-md text-shadow-orange-700 font-mono tracking-tighter ml-1  drop-shadow-sm">
      BOHAG
    </h1>

    {/* Right - Cart */}
    <div className="absolute right-4 cursor-pointer active:scale-90 transition">
      <FaShoppingCart className="text-orange-500" size={22} />

      {/* Cart Badge */}
      <span className="absolute -top-3 -right-3 bg-black text-white text-[10px] px-1.5 py-[1px] rounded-full">
        {cartItemsNumber ?? 0}
      </span>
    </div>
  </div>

  {/* Tagline */}
  <p className="text-center text-xs text-shadow-2xs tracking-widest text-gray-600 -mt-2">
    Whats Your Move Today ?
  </p>

  {/* Search Bar */}
  <div className="px-4 mt-4 mb-3">
    <div className="flex items-center bg-white/70 backdrop-blur-md  rounded-full px-4 py-2 shadow-lg shadow-black border border-white/40 focus-within:ring-2 focus-within:ring-black/70 transition-all duration-300">

      <IoIosSearch className="text-gray-500" size={20} />

      <input
        type="text"
        placeholder="Search kurtas, sarees..."
        className="w-full ml-3 bg-transparent outline-none text-sm text-black placeholder-gray-700"
      />

      {/* Optional mic icon */}
      <span className="text-gray-400 text-sm">🎤</span>
    </div>
  </div>

</header>
  
        

        {/* 📦 MAIN CONTENT */}
        <main className ="w-full bg-white ">
          {children}
        </main>

     <footer className="sticky bottom-0 z-50  w-full  bg-white  shadow-[0_-2px_10px_rgba(0,0,0,0.8)]">
  <section className="flex justify-around items-center py-3 ">

    {/* Menu */}
    <div className="flex flex-col  items-center justify-center  cursor-pointer group">
      <TiThMenuOutline size={22} className="text-black group-hover:scale-110 transition" />
      <h2 className="text-xs font-semibold text-black mt-1">Categories</h2>
    </div>

     <div className="flex flex-col items-center justify-center cursor-pointer group">
      <FaHeart size={22} className="text-red-500 group-hover:scale-110 transition" />
      <h2 className="text-xs font-semibold text-black mt-1">Wishlist</h2>
    </div>

    {/* Cart */}
    <div
      onClick={() => router.push('/cart')}
      className="flex flex-col items-center justify-center cursor-pointer group"
    >
      <FaShoppingCart size={22} className="text-orange-400 group-hover:scale-110 transition" />
      <h2 className="text-xs font-semibold text-black mt-1">Cart</h2>
    </div>

    {/* Wishlist */}
   

  </section>

  {/* Bottom Indicator */}
  <div className="flex justify-center pb-2">
    <span className="w-24 h-1 bg-black/70 rounded-full"></span>
  </div>
</footer>

     {/* <footer className="sticky min-[400px]:h-28 bottom-0 z-70 pl-2 pr-2 bg-stone-200 flex justify-between items-center  [@media(min-height:200px)]:h-[72px] lg:h-[72px]   m-0 border-none w-full bg-black">
                   {['Home', 'Category', 'Profile'].map((tag,i)=> {

                    const Current = icons[i];
                          return ( <div onClick={() => setIndextoogle(i)} className="flex flex-col relative mt-[7px]  h-full" key ={i}>
                                    <div className="w-full flex justify-center" >
                                        <div className="relative mt-1">
                                          <Current className={`${toogledindex === i ? 'text-yellow-200':''} text-black`} size={33} />
                                        </div>
                                       
                                    </div>
                                   
                                 <h2 className="  border-0 text-black mt-0  text-xl">{tag}</h2>
                          </div>)
                   })}
     </footer> */}
        

      </body>
    </html>
  );
}