'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {rockSalt} from "@/lib/font"
const Animatedsection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const secondRef = useRef(null);

const { scrollYProgress: scrollZProgress } = useScroll({
  target: secondRef,
  offset: ["start end", "end start"],
});


  // Background image (slower movement)
  

  // Crossfade
  const opacityBg = useTransform(scrollYProgress, [0.4, 1], [1, 0]);
  const opacityFg = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);

  // 🔥 Scale effect
  const scaleBg = useTransform(scrollYProgress, [0.3, 0.5], [1, 0.2]); // shrink
  const scaleFg = useTransform(scrollYProgress, [0.3, 0.4], [0.5, 1]); // settle in
      
  

  // Crossfade
  const opacityBg2 = useTransform(scrollZProgress, [1, 1], [1, 1]);
  const opacityFg2 = useTransform(scrollZProgress, [1, 1], [1, 1]);

  // 🔥 Scale effect
  const scaleBg2 = useTransform(scrollZProgress, [0.2, 0.5], [1, 0.2]); // shrink
  const scaleFg2 = useTransform(scrollZProgress, [0.2, 0.35 ], [0.5, 1]); // settle in

return(
    <div className={rockSalt.className}>    
      
          <section ref={ref} className="h-auto bg-gray-200  backdrop-blur-md">
      
      <div  className="relative flex flex-col items-start">
   
        {/* First image (fade out + shrink) */}
        <motion.div
  style={{
    
    opacity: opacityBg,
    scale: scaleBg,
  }}
  className="h-[550px] w-full sticky top-0 rounded-none shadow-xl z-[10] overflow-hidden relative"
>
  <Image
    src="https://res.cloudinary.com/dfehgukz3/image/upload/w_500,q_auto,f_auto/v1776796425/assam1_ma7htp.jpg"
    alt="background"
    fill
    priority
    fetchPriority="high"
    className="object-cover object-center"
  />
</motion.div>

        {/* Second image (fade in + zoom in slightly) */}
        <motion.div
          style={{
  
            opacity: opacityFg,
            scale: scaleFg,
          }}
  className="min-h-[600px] w-full  shadow-xl z-[20] 
          bg-blue-200  rounded-3xl  border border-gray-200 
                     p-10 flex flex-col justify-between"
        >
         
          {/* Header */}
          <div className="max-w-xl">
            
            <p className="text-2xl  handwriting text-gray-700 mb-2">New Arrival</p>
    <h2 className="text-5xl  handwriting text-white  leading-tight">
              Minimal Summer Essentials
            </h2>
            <p className="text-gray-600 tracking-widest handwriting    text-xl mt-3">
      Thoughtfully designed pieces for everyday comfort and effortless style.
            </p>
          </div>

  {/* Product Grid */}
  <div className="grid overflow-x-scroll scrollbar-hide rounded-2xl shadow-2xl  bg-blue-200 snap-mandatory snap-x grid-cols-[repeat(3,300px)] gap-6 mt-10">

    {/* Card */}
    <div className="bg-white shadow-sm  snap-start p-4  hover:shadow-md transition">
                <div className="h-60 bg-gray-100 rounded-xl mb-4" />
      <p className="text-gray-800 font-medium">Linen Shirt</p>
      <p className="text-gray-500 text-sm">₹2,499</p>
              </div>

    <div className="bg-white p-4 snap-center shadow-sm hover:shadow-md transition">
      <div className="h-60 bg-gray-100 rounded-xl mb-4" />
      <p className="text-gray-800 font-medium">Relaxed Trousers</p>
      <p className="text-gray-500 text-sm">₹3,199</p>
    </div>

    <div className="bg-white  snap-start p-4 shadow-sm hover:shadow-md transition">
      <div className="h-60 bg-gray-100 rounded-xl mb-4" />
      <p className="text-gray-800 font-medium">Classic Sneakers</p>
      <p className="text-gray-500 text-sm">₹4,999</p>
    </div>

          </div>

          {/* CTA */}
  <div className="mt-12 ml-20">
    <button className="px-5 py-3 rounded-xl bg-white text-black text-sm font-medium hover:bg-gray-800 transition">
            Explore Collection
          </button>
  </div>
        </motion.div>

        
        {/* Second image (fade in + zoom in slightly) */}
        
      </div>
          
    </section>

      <section ref={secondRef} className="h-auto mt-6 bg-black/10 backdrop-blur-lg">
                <div  className="relative flex flex-col items-start">
          
        {/* First image (fade out + shrink) */}
   

<motion.div
  style={{
  
    opacity: opacityBg2,
    scale: scaleBg2,
  }}
  className="h-[500px] w-full sticky top-10 rounded-none shadow-xl z-[30] overflow-hidden relative"
>
  <Image
    src="https://res.cloudinary.com/dfehgukz3/image/upload/w_600,q_auto,f_auto/v1776796425/assam3_uqd9ye.jpg"
    alt="assam background"
    fill
    priority
    fetchPriority="high"
    className="object-cover object-center"
  />
</motion.div>

        {/* Second image (fade in + zoom in slightly) */}
        <motion.div
  style={{
  
    opacity: opacityFg2,
    scale: scaleFg2,
  }}
  className="min-h-[820px] w-full  sticky rounded-2xl  shadow-xl z-[40] 
              bg-orange-300
             p-12 flex flex-col justify-between"
>
  {/* Header */}
  <div className="max-w-2xl">
    <p className="text-2xl tracking-[0.3em] uppercase text-white mb-3">
      Men's Collection
    </p>

    <h2 className="text-5xl handwriting font-semibold text-white leading-tight">
      Modern Summer Staples
    </h2>

    <p className="text-white  handwriting mt-4 tracking-wider  text-xl">
      Elevated essentials designed for everyday wear — clean silhouettes,
      breathable fabrics, and timeless appeal.
    </p>
  </div>

  {/* Product Scroll */}
  <div className="mt-12 overflow-x-auto scrollbar-hide snap-x snap-mandatory flex gap-8 pb-8">

    {/* Card 1 */}
    <div className="min-w-[270px] snap-start bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="h-64 bg-neutral-200 rounded-xl mb-5" />
      <p className="text-neutral-900 font-medium handwriting text-lg">Linen Shirt</p>
      <p className="text-neutral-500 text-sm mt-1">₹2,499</p>
    </div>

    {/* Card 2 */}
    <div className="min-w-[270px] snap-center bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="h-64 bg-neutral-200 rounded-xl mb-5" />
      <p className="text-neutral-900 handwriting font-medium text-lg">Tailored Trousers</p>
      <p className="text-neutral-500 text-sm mt-1">₹3,199</p>
    </div>

    {/* Card 3 */}
    <div className="min-w-[270px] snap-start bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="h-64 bg-neutral-200 rounded-xl mb-5" />
      <p className="text-neutral-900 handwriting font-medium text-lg">Leather Sneakers</p>
      <p className="text-neutral-500 text-sm mt-1">₹4,999</p>
    </div>

    {/* Card 4 */}
    <div className="min-w-[280px] snap-start bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="h-64 bg-neutral-200 rounded-xl mb-5" />
      <p className="text-neutral-900 font-medium handwriting text-lg">Overshirt Jacket</p>
      <p className="text-neutral-500 text-sm mt-1">₹3,999</p>
    </div>

  </div>

  {/* CTA */}
  <div className="mt-7 flex items-center justify-between">
    <p className=" handwriting text-2xl text-white">
      Discover refined menswear essentials crafted for modern lifestyles.
    </p>

    <button className="px-6 py-2 rounded-xl bg-white text-black text-lg handwriting   hover:bg-neutral-800 transition-all duration-300">
      Shop Men's Collection →
    </button>
  </div>
</motion.div>
        
        {/* Second image (fade in + zoom in slightly) */}
       
      </div>
      
    </section>

      

    </div>
)
}
export default Animatedsection;