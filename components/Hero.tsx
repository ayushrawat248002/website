'use client'


import badge from '@/assets/boyicon2.png';
import badge2 from '@/assets/girlicon3.png';
import icon from '@/assets/jwellery1.png'
import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
const Hero = () => {

      const router = useRouter()
      const[index, setindex] = useState<undefined|number>(0)

  return(
     <div className="w-full flex justify-center gap-8 md:gap-14 mt-5 px-4">

      {/* MEN */}
      <div className="flex flex-col items-center group cursor-pointer">
        <Image
          onClick={() => { setindex(0); router.push('/mensection') }}
          alt="men"
          src={badge}
          className="h-[75px] w-[75px] 
          transition-all duration-500 ease-out
          group-hover:scale-105 group-hover:-translate-y-1"
        />

        <button
          onClick={() => setindex(0)}
          className={`mt-2 text-xs md:text-sm font-medium tracking-wider transition-all
          ${index === 0 
            ? 'text-black' 
            : 'text-gray-400 group-hover:text-black'}`}
        >
          MEN
          {index === 0 && (
            <div className="h-[2px] w-5 bg-black mx-auto mt-1 rounded-full"></div>
          )}
        </button>
      </div>

      {/* WOMEN */}
      <div className="flex flex-col items-center -translate-y-2 group cursor-pointer">
        <Image
          onClick={() => { setindex(1); router.push('/womensection') }}
          alt="women"
          src={badge2}
          className="h-[95px] w-[95px] 
          transition-all duration-500 ease-out
          group-hover:scale-105 group-hover:-translate-y-1"
        />

        <button
          onClick={() => setindex(1)}
          className={`-translate-y-[6px] text-xs md:text-sm font-medium tracking-wider transition-all
          ${index === 1 
            ? 'text-black' 
            : 'text-gray-400 group-hover:text-black'}`}
        >
          WOMEN
          {index === 1 && (
            <div className="h-[2px] w-5 bg-black mx-auto mt-1 rounded-full"></div>
          )}
        </button>
      </div>

      {/* ACCESSORIES */}
      <div className="flex flex-col items-center group cursor-pointer">
        <Image
          alt="jewellery"
          src={icon}
          className="h-[60px] w-[60px] mt-2
          transition-all duration-500 ease-out
          group-hover:scale-105 group-hover:-translate-y-2"
        />

        <button
          onClick={() => setindex(2)}
          className={`mt-[15px] text-xs md:text-sm font-medium tracking-wider transition-all 
          ${index === 2 
            ? 'text-black' 
            : 'text-gray-400 group-hover:text-black'}`}
        >
          ACCESSORIES
          {index === 2 && (
            <div className="h-[2px] w-6 bg-black mx-auto mt-1 rounded-full"></div>
          )}
        </button>
      </div>

    </div>
  )
}

export default Hero;