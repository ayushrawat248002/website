"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/components/Cartstore";

import men from '@/assets/men.jpg'
import women from '@/assets/women.jpg'
import kids from '@/assets/kids.jpg'
import shoes from '@/assets/shoes.jpg'
import model from '@/assets/model.png'



import model4 from '@/assets/model4.png'
import model5 from '@/assets/model5.png'
import model6 from '@/assets/model6.png'
import model7 from '@/assets/model7.png'

const CarouselSize = dynamic(() => import("@/components/slides.js"), {
  ssr: false,
});

const categories = [
  { name: "Men", image: men },
  { name: "Women", image: women },
  { name: "Kids", image: kids },
  { name: "Shoes", image: shoes },
]
const products = [

 {image:model4},
 {image:model5},
 {image:model6},
 {image:model7},
]
export default function Hero() {
  const router = useRouter();
  const heroRef = useRef(null);
  const theme = useCartStore((state) => state.obj.theme);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["0%", "0%"] : ["0%", "15%"]
  );

  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["0%", "0%"] : ["0%", "-20%"]
  );

  return (
    <section
      ref={heroRef}
      className={`relative min-w-screen flex bg-stone-50  [@media(max-height:950px)]:h-[990px]   flex-col justify-center overflow-hidden
      min-h-screen sm:px-6 lg:px-10`}
    > 
 
       <div className=" [@media(max-height:400px)]:h-[700px]]mt-20 z-100  absolute top-2 w-full  ">
                
                 <CarouselSize  data={products} />
                  
       </div>

      
   
     

      {/* 💥 Deals strip */}
      <div className="absolute w-full mt-10 flex justify-center z-20">
        <div className="bg-black text-white px-6 py-2 rounded-full text-sm sm:text-base">
          ⚡ Flat 50% OFF | Free Shipping | Limited Time
        </div>
      </div>

    </section>
  );
}