'use client'
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import { useState } from "react";

import { BiCategory } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { TiThMenuOutline } from "react-icons/ti";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useRouter } from "next/navigation";
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
  const [enabled, setEnabled] = useState<boolean>(false);
   const[obj,setobj] = useState<boolean>(false);
   const [toogledindex, setIndextoogle] = useState<number|null>(null)
   const icons = [IoHomeOutline,BiCategory,CgProfile]
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} w-full scroll-smooth`}
    >
      <body className="m-0 p-0 min-w-svw  max-h-svh   relative bg-yellow-200  text-black font-[var(--font-poppins)]">

        {/* 🔝 HEADER */}
      
        

                 
                    <header className="w-full border border-white  bg-white h-auto ">

  {/* Top Brand Bar */}
  <div className="w-full h-[50px] border   flex items-center justify-center bg-black">
    <h1 className="text-2xl font-bold text-white">Brand Name</h1>
  </div>

  {/* Heading */}
  <h1 className="text-black  lg:text-2xl mt-8 text-center tracking-widest lg:text-left lg:ml-10 ml-5   font-serif">
    What Are You Looking for ?
  </h1>

  {/* Search Bar */}
  <div className="w-full border border-white flex justify-center mt-5 px-4">
    <input
      type="text"
      placeholder="Enter text here"
      className="w-full max-w-md h-[45px] text-black rounded-full px-4 border-3 border-black outline-none focus:ring-3 focus:ring-black"
    />
  </div>

  {/* Category Buttons */}


                    </header>
  
        

        {/* 📦 MAIN CONTENT */}
        <main className ="w-full bg-white ">
          {children}
        </main>
       
       <footer className="sticky z-90 flex items-center  justify-center bg-white bottom-0 w-full   h-19">
          <section className="  gap-14 h-[70%] flex items-center  justify-center bg-white w-[80%] mx-auto rounded-full border border-black ">
             <div >
              <TiThMenuOutline size={22} className="ml-2"  fill="black"/>     
               <h2 className="text-black font-bold">Menu</h2>
             </div>

             <div onClick={() => router.push('/cart')}>
                <FaShoppingCart  size={22} fill="black"/>
                 <h2 className="text-black font-bold">Cart</h2>
             </div>

             <div>
               <FaHeart size={22} className="ml-3" fill="red"/>
               <h2 className="text-black font-bold">Wishlist</h2>
             </div>
                     
       </section>
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