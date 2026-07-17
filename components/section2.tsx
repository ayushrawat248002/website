 'use client'
 import { motion, useScroll, useTransform } from "framer-motion";
 import Image from "next/image";
import { useRef } from "react";
import {caveat} from "@/lib/font";




const Section2 = () => {
     const secondRef = useRef(null);

const { scrollYProgress: scrollZProgress } = useScroll({
  target: secondRef,
  offset: ["start end", "end start"],
});

  const scaleBg2 = useTransform(scrollZProgress, [0.1, 0.7], [1, 0.5]); // shrink
    return(
        <>
          <section ref={secondRef} className="h-auto mt-0 font-bold border-none ">
                          <div    className="relative flex flex-col items-start">
          
                            
                    
                  {/* First image (fade out + shrink) */}
             
          <div className=" h-[600px]  sticky top-0 bg-transparent w-full   bg-gradient-to-b from-blue-200 to-white     ">
          <motion.div
             style={{scale : scaleBg2}}
            className="w-full h-full relative     "
          >
            <Image
              src="https://res.cloudinary.com/dfehgukz3/image/upload/w_900,q_auto,f_auto/e_background_removal/assam3_uqd9ye.jpg"
              alt="assam background"
              fill
              preload
              className="  rounded-2xl   object-center opacity-100  "
            />
          
            {/* Glass Blur Layer */}
            
          </motion.div>
          </div>
                  {/* Second image (fade in + zoom in slightly) */}
                 
          <motion.div
             
            className={`min-h-[400px] shadow-[0_-20px_40px_rgba(0,0,0,0.3)] w-full
          bg-black/10 backdrop-blur-2xl
            relative overflow-hidden 
            ${caveat.className}
            p-9 flex flex-col  `}
           
          >
            {/* Glow Overlay */}
            
            {/* Header */}
            <div className={`text-xs  max-w-2xl  relative z-10 `}>
              <p className={`tracking-[0.3em]   font-extrabold text-2xl leading-10  text-orange-600 uppercase  mb-5`}>
               artisanal collection
              </p>
          
              <h2 className="text-[20px] tracking-widest font-extralight  text-neutral-900 leading-tight">
                Modern Summer Staples
              </h2>
            </div>
          
            {/* Product Scroll */}
            <div className="mt-5 w-[300px] overflow-x-auto scrollbar-hide snap-x snap-mandatory flex gap-2 pr-5 pb-8 relative z-10">
          
              {/* Card 1 */}
               <div className="min-w-[250px] h-[50vh] snap-center relative   bg-white backdrop-blur-md 
              rounded-3xl  shadow-md hover:shadow-2xl  
              transition-all duration-300 border border-white/30">
                
                 <Image
              src="https://res.cloudinary.com/dfehgukz3/image/upload/v1784255127/_BBB9686_lvrtqj.jpg"
              alt="assam background"
              fill
              className="  object-fill rounded-2xl  object-center opacity-100  "
            />
                <p className="text-white  block absolute left-0 bottom-0 mb-5 p-2 z-60 handwriting font-medium text-2xl">Tailored Trousers</p>
                <p className="text-white block absolute z-60 mt-10 bottom-0 text-lg ">₹3,199</p>
              </div>
          
              {/* Card 2 */}
                <div className="min-w-[250px] h-[50vh] snap-center   bg-white backdrop-blur-md 
              rounded-3xl p-5 shadow-md hover:shadow-2xl 
              transition-all duration-300 border border-white/30">
                
                 <Image
              src="https://res.cloudinary.com/dfehgukz3/image/upload/v1784255127/_BBB9686_lvrtqj.jpg"
              alt="assam background"
              fill
              className="  rounded-2xl object-fill  object-center opacity-100  "
            />
                <p className="text-white  block absolute left-0 bottom-0 mb-5 p-2 z-60 handwriting font-medium text-2xl">Tailored Trousers</p>
                <p className="text-white block absolute z-60 mt-10 bottom-0 text-lg ">₹3,199</p>
              </div>
          
              {/* Card 3 */}
             
          
              {/* Card 4 */}
          
          
            </div>
          
            {/* CTA */}
            <div className="mt-0 flex items-center justify-between relative z-10">
              <p className="handwriting text-[22px] leading-6 tracking-wider text-neutral-900">
                Discover refined  essentials crafted for modern lifestyles.
              </p>
          
              <button className="px-3 ml-3 py-1 rounded-xl 
              bg-white/80 backdrop-blur-md text-black text-xl handwriting 
              hover:bg-black hover:text-white 
              transition-all duration-300 ">
                EXPLORE →
              </button>
            </div>
          </motion.div>
          
          
                  
                  {/* Second image (fade in + zoom in slightly) */}
                 
                </div>
                
              </section>
        </>
    )
}
export default Section2