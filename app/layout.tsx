'use client'
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import { useState } from "react";
import LoginButtons from "@/components/LoginButtons";
import icon1 from '@/assets/icon1.png'
import tag from '@/assets/tag.png'
import bag from '@/assets/bag.png'
import star from '@/assets/star.png'
import {Switch} from "@/components/ui/switch"
import { BiCategory } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
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
  const [index, setIndex] = useState<number | null>(null);
  const [enabled, setEnabled] = useState<boolean>(false);
   const[obj,setobj] = useState<boolean>(false);
   const [toogledindex, setIndextoogle] = useState<number|null>(null)
   const icons = [IoHomeOutline,BiCategory,CgProfile]
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} w-full scroll-smooth`}
    >
      <body className="m-0 p-0 max-[370px]:w-[375px]  realtive  min-h-full   w-full bg-white text-black font-[var(--font-poppins)]">

        {/* 🔝 HEADER */}
      
        


    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        
        {/* Left: Menu + Logo */}
        <div className="flex items-center gap-3">
          <Menu className="md:hidden" size={24} />
          <h1 className="text-xl font-bold text-pink-600">M</h1>
        </div>

        {/* Center: Search (mobile icon, desktop input) */}
        <div className="flex items-center">
          <div className="md:flex hidden items-center bg-gray-100 px-3 py-2 rounded-md w-35 h-9">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none px-2 w-full text-sm"
            />
          </div>

          {/* Mobile Search Icon */}
          
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-4 text-gray-700">
          <User size={20} />
          <Heart size={20} />
          <ShoppingBag size={20} />
        </div>
      </div>
    </header>
  
        

        {/* 📦 MAIN CONTENT */}
        <main className="w-full  min-[400px]:h-full  -translate-y-1">
          {children}
        </main>


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