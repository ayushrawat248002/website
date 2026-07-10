'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const Hero = () => {

  const router = useRouter();

  const [index, setIndex] = useState(9);


  return (
    <div className="w-full h-24 flex justify-center">
      <div className="flex justify-center gap-10 h-full pb-2 md:gap-14 lg:gap-20 px-4 w-full max-w-5xl">

        {/* MEN */}
        <div      
          className="flex flex-col items-center group cursor-pointer"
        >
          <Image
           onClick={() => {
            setIndex(0);
            router.push("/mensection");
          }}
            alt="men"
            width={80}
            height={80}
            src="https://res.cloudinary.com/dfehgukz3/image/upload/w_160,q_auto,f_auto/v1776796427/boyicon2_tfwzwe.png"
            className="h-[80px] w-[80px] transition-all duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-1"
          />

          <span
            className={`mt-2 text-xs md:text-sm font-medium font-mono tracking-wider transition-all ${
              index === 0
                ? "text-black"
                : "text-gray-400 group-hover:text-black"
            }`}
          >
            MEN
            {index === 0 && (
              <div className="h-[2px] w-5 bg-black mx-auto mt-1 rounded-full" />
            )}
          </span>
        </div>

        {/* WOMEN */}
        <div
          onClick={() => {
            setIndex(1);
            router.push("/womensection");
          }}
          className="flex flex-col items-center -translate-y-2 group cursor-pointer"
        >
          <Image
            alt="women"
            width={80}
            height={80}
            src="https://res.cloudinary.com/dfehgukz3/image/upload/w_160,q_auto,f_auto/v1776797077/girlicon3_jkt8bh.png"
            className="h-[100px] w-[100px] md:h-[110px] md:w-[110px] lg:h-[120px] lg:w-[120px] transition-all duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-1"
          />

          <span
            className={`-mt-1 text-xs md:text-sm font-medium font-mono tracking-widest transition-all ${
              index === 1
                ? "text-black"
                : "text-gray-400 group-hover:text-black"
            }`}
          >
            WOMEN
            {index === 1 && (
              <div className="h-[2px] w-5 bg-black mx-auto mt-1 rounded-full" />
            )}
          </span>
        </div>

        {/* ACCESSORIES */}
        <div
          onClick={() => {
            setIndex(2);
            router.push("/accessories");
          }}
          className="flex flex-col items-center group cursor-pointer"
        >
          <Image
            alt="jewellery"
            width={80}
            height={80}
            src="https://res.cloudinary.com/dfehgukz3/image/upload/w_160,q_auto,f_auto/v1776796428/jwellery1_jvsadj.png"
            className="h-[60px] w-[60px] md:h-[65px] md:w-[65px] lg:h-[70px] lg:w-[70px] mt-2 transition-all duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-2"
          />

          <span
            className={`mt-[20px] ml-2 text-xs md:text-sm font-medium font-mono tracking-wider transition-all ${
              index === 2
                ? "text-black"
                : "text-gray-400 group-hover:text-black"
            }`}
          >
            ACCESSORIES
            {index === 2 && (
              <div className="h-[2px] w-6 bg-black mx-auto mt-1 rounded-full" />
            )}
          </span>
        </div>

      </div>
    </div>
  );
};

export default Hero;