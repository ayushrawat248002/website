 'use client'
 import { motion, useScroll, useTransform } from "framer-motion";
 import Image from "next/image";
import { useRef } from "react";
import {caveat} from "@/lib/font"




  const Section1 = () => {

 const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

    const scaleBg = useTransform(scrollYProgress, [0.3, 0.5], [0.95, 0.5]); // shrink

    return(
        <>
         <section ref={ref} className="h-auto text-shadow-2xs  text-shadow-orange-500 bg-gray-200 font-bold  backdrop-blur-md">
               
               <div  className="relative flex flex-col bg-white items-start">
            
                 {/* First image (fade out + shrink) */}
                 <motion.div
           style={{
             
             scale : scaleBg,
             
            
           }}
           className="h-[550px] w-full sticky top-0 rounded-none shadow-xl z-[10] overflow-hidden relative"
         >
      <Image
  src="https://res.cloudinary.com/dfehgukz3/image/upload/f_auto,q_auto/v1776796425/assam1_ma7htp.jpg"
  alt="Assam landscape"
  fill
  priority
  sizes="(max-width: 768px) 100vw, 515px"
  className="object-cover object-center opacity-95"
/>
         </motion.div>
         
                 {/* Second image (fade in + zoom in slightly) */}
                 <motion.div
                   
           className="min-h-[600px] w-full   z-20 
                   bg-gradient-to-t  from-orange-200  to-white
                   text-shadow-none  text-black   
                              p-10 flex flex-col justify-between"
                 >
                
             
                  
                   {/* Header */}
                   <div className={`max-w-xl ${caveat.className}  mb-5 `}>
                    
             <h2 className={`text-5xl   handwriting text-orange-500   leading-10`}>
                       Minimal Summer Essentials
                     </h2>
                     <p className="text-black tracking-widest handwriting mt-10">
               Thoughtfully designed pieces for everyday comfort and effortless style.
                     </p>
                   </div>
         
           {/* Product Grid */}
           <div className="grid w-[300px]   overflow-x-scroll scrollbar-hide rounded-2xl   snap-mandatory snap-x grid-cols-[repeat(3,300px)] gap-6 mt-5">
         
             {/* Card */}
             <div className = " bg-white  h-80 shadow-sm text-shadow-none  snap-start rounded-2xl p-4  hover:shadow-md transition">
                         <div className="h-60 bg-gray-100 relative rounded-xl mb-4" >
                           <Image
                           alt="girl"
                           fill
                            sizes="100vw"
                            src={'https://res.cloudinary.com/dfehgukz3/image/upload/w_700,q_auto,f_auto/v1766582818/samples/bike.jpg'}
                            className="object-cover object-center"
                           />
                         </div>
               <p className="text-gray-800 font-medium">Linen Shirt</p>
               <p className="text-gray-500 text-sm">₹2,499</p>
                       </div>
         
             <div className="bg-white h-80 rounded-2xl text-shadow-none p-4 snap-center shadow-sm hover:shadow-md transition">
               <div className="h-60 g-gray-100 relative rounded-xl mb-4" >
                    <Image
                           alt="girl"
                           fill
                             sizes="100vw"
                            src={'https://res.cloudinary.com/dfehgukz3/image/upload/w_600,q_auto,f_auto/v1766582828/samples/look-up.jpg'}
                            className="object-cover object-center"
                           />
               </div>
               <p className="text-gray-800 font-medium">Relaxed Trousers</p>
               <p className="text-gray-500 text-sm">₹3,199</p>
             </div>
         
             <div className="bg-white h-80 rounded-2xl text-shadow-none snap-start p-4 shadow-sm hover:shadow-md transition">
               <div className="h-60 bg-gray-100 relative rounded-xl mb-4" >
                     <Image
                           alt="girl"
                           fill
                            sizes = "100vw"
                            src={'https://res.cloudinary.com/dfehgukz3/image/upload/w_900,q_auto,f_auto/v1766582831/samples/upscale-face-1.jpg'}
                            className="object-cover object-center"
                           />
                 </div>
               <p className="text-gray-800 font-medium">Classic Sneakers</p>
               <p className="text-gray-500 text-sm">₹4,999</p>
             </div>
         
                   </div>
         
                   {/* CTA */}
           <div className="mt-5 ml-20">
             <button className="px-5 py-3 rounded-xl shadow-2xl bg-white text-black text-sm font-medium hover:bg-gray-800 transition">
                     Explore Collection
                   </button>
           </div>
                 </motion.div>
         
                 
                 {/* Second image (fade in + zoom in slightly) */}
                 
               </div>
                   
             </section>
        </>
    )
  }
  export default Section1