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
        <header className="sticky z-90 pr-2   top-0 w-full   h-[95px] bg-white">
          
          <div className=" relative boc-border h-full w-full items-center justify-between px-10">

            {/* Logo */}
          

            {/* Right Section */}
            <div className="flex items-center gap-5">
              <LoginButtons />
            </div>

            {/* Tabs */}
            <div className="absolute bottom-0 left-10 h-[55px] grid grid-cols-4 ">
              {[{img : icon1, text : enabled ? "women" : "men"},{ img : tag , text : "deals"},{img : bag, text : 'All'},{ img : star , text : "For You"}].map((val,i) => (
                <div
                  key={i}
                  onClick={() => {setIndex(i);setobj(!obj) }}
                  className=" flex justify-center w-[60px] h-full cursor-pointer"
                >
                  <div
                    style={{
                      transitionDelay: `${257 * (i+1)}ms`,
                      transitionProperty: "border",
                    }}
                    className={`
                      relative flex justify-center h-full w-full rounded-t-xl
                   
                      ${index === i ? "bg-stone-50 border-2 border-black transition-[border]   border-b-0 ease-out z-40 " : "border-none"}
                    `}
                  >
                     <Link href={"#model1"} className="absolute bottom-0 text-[15px] text-black">
 
                        <Image  src={val.img} height={50} width={30} alt='icon' className=" p-1 object-contain"   />
                            {val.text}
</Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute w-15 h-[50px] flex  items-center   flex-row-reverse   right-0  bottom-0 mb-3">
              <Switch
                className="transform rotate-90 "
                checked={enabled}
                onCheckedChange={setEnabled}
              />
              <span className="h-[40px] w-[0.76px] bg-gradient-to-b from-white/0 via-black to-white/0 rounded-2xl mr-2 mt-2"></span>
            </div>

          </div> 

           

          {/* Bottom border line */}
            <span className={`absolute bottom-0 left-0 w-full ${obj ? "animate-grow-width z-10" : "-z-10 opacity-0" }  border mb-[1px]  border-black`}></span>
              <span className={`absolute bottom-0 left-0 w-full ${!obj ? "animate-grow-width z-10" : "-z-10 opacity-0" }  border mb-[1px]  border-black`}></span>
           


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