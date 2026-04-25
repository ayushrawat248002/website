'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {rockSalt,bebas,caveat} from "@/lib/font"
const Animatedsection = () => {

  const [visible, setVisible] = useState<boolean>(true)
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

const ref2 = useRef(null);
  const { scrollYProgress:scrollMProgress } = useScroll({
    target: ref2,
    offset: ["start end", "end start"],
  });

  const ref3 = useRef(null);
  const { scrollYProgress:scrollLProgress } = useScroll({
    target: ref3,
    offset: ["start end", "end start"],
  });



 
  // Crossfade
  const opacityBg = useTransform(scrollYProgress, [0.35, 0.5], [1, 0]);
  const opacityFg = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);

  // 🔥 Scale effect
  const scaleBg = useTransform(scrollYProgress, [0.3, 1], [0.95, 0.7]); // shrink
  const scaleFg = useTransform(scrollYProgress, [0.3, 0.4], [0.5, 1]); // settle in

     const opacityFg3 = useTransform(scrollMProgress, [0.65, 0.75], [1, 0]);//adsa
        const scaleBg3 = useTransform(scrollMProgress, [0.6,0.7], [0.5,0.65]); // shrink
  // Crossfade
  const opacityBg2 = useTransform(scrollZProgress, [0.35, 0.5], [1, 0]);
  const opacityFg2 = useTransform(scrollZProgress, [1, 1], [1, 1]);
  const  x = useTransform(scrollMProgress, [0.2, 0.7], ["-20%", "-82.5%"]);
  // 🔥 Scale effect
  const scaleBg2 = useTransform(scrollZProgress, [0.2, 1], [1, 0.7]); // shrink
  const scaleFg2 = useTransform(scrollZProgress, [0, 0.3 ], [1, 1]); // settle in
  
  useEffect(()=>{
        const unsubscribe = scrollMProgress.on("change", (v) => {
   
    if (v >= 1) {
      setVisible(false)
    }
  });

  return () => unsubscribe();
   },[scrollMProgress])

   useEffect(()=>{
     const unsubscribe = scrollMProgress.on("change", (v) => {
    if (v <= 0) {
     setVisible(true)
    }
    
  });

  return () => unsubscribe();
   },[scrollMProgress])

   useEffect(()=>{
      console.log(visible)
   },[visible])
return(
    <div className={`${caveat.className} h-full`}>    
      
          <section ref={ref} className="h-auto text-shadow-2xs  text-shadow-orange-500 bg-gray-200 font-bold  backdrop-blur-md">
      
      <div  className="relative flex flex-col bg-white items-start">
   
        {/* First image (fade out + shrink) */}
        <motion.div
  style={{
    
    scale: scaleBg,
  }}
  className="h-[550px] w-full sticky top-0 rounded-none shadow-xl z-[10] overflow-hidden relative"
>
  <Image
    src="https://res.cloudinary.com/dfehgukz3/image/upload/v1776796425/assam1_ma7htp.jpg"
    alt="background"
    fill
    priority
    fetchPriority="high"
    className="object-cover opacity-95 object-center"
  />
</motion.div>

        {/* Second image (fade in + zoom in slightly) */}
        <motion.div
          style={{
  
            opacity: opacityFg,
            scale: scaleFg,
          }}
  className="min-h-[600px] w-full   z-[20] 
        bg-white text-shadow-none  text-black  rounded-3xl 
                     p-10 flex flex-col justify-between"
        >
         
          {/* Header */}
          <div className="max-w-xl">
            
            <p className="text-2xl  handwriting text-gray-700 mb-2">New Arrival</p>
    <h2 className="text-5xl  handwriting text-orange-500  leading-10">
              Minimal Summer Essentials
            </h2>
            <p className="text-gray-600 tracking-widest handwriting mt-3">
      Thoughtfully designed pieces for everyday comfort and effortless style.
            </p>
          </div>

  {/* Product Grid */}
  <div className="grid w-[300px] shadow-2xl  overflow-x-scroll scrollbar-hide rounded-2xl   snap-mandatory snap-x grid-cols-[repeat(3,300px)] gap-6 mt-5">

    {/* Card */}
    <div className="bg-white h-80 shadow-sm text-shadow-none  snap-start rounded-2xl p-4  hover:shadow-md transition">
                <div className="h-60 bg-gray-100 relative rounded-xl mb-4" >
                  <Image
                  alt="girl"
                  fill
                   priority
                  fetchPriority="high"
                   src={'https://res.cloudinary.com/dfehgukz3/image/upload/v1766582818/samples/bike.jpg'}
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
                   priority
                  fetchPriority="high"
                   src={'https://res.cloudinary.com/dfehgukz3/image/upload/v1766582828/samples/look-up.jpg'}
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
                   priority
                  fetchPriority="high"
                   src={'https://res.cloudinary.com/dfehgukz3/image/upload/v1766582831/samples/upscale-face-1.jpg'}
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

      <section ref={secondRef} className="h-auto mt-6 font-bold  bg-white">
                <div  className="relative flex flex-col items-start">
          
        {/* First image (fade out + shrink) */}
   
<div className=" h-[500px]  sticky top-10 w-full">
<motion.div
  style={{
  

    scale: scaleBg2,
  }}
  className=" w-full h-full  relative rounded-none shadow-xl overflow-hidden "
>
     
  <Image
    src="https://res.cloudinary.com/dfehgukz3/image/upload/w_900,q_auto,f_auto/v1776796425/assam3_uqd9ye.jpg"
    alt="assam background"
    fill
    priority
    fetchPriority="high"
    className="object-cover opacity-90 object-center"
  />
</motion.div>
</div>
        {/* Second image (fade in + zoom in slightly) */}
        <motion.div
  style={{
  
    opacity: opacityFg2,
    scale: scaleFg2,
  }}
  className="min-h-[400px] w-full sticky rounded-2xl  shadow-xl z-[40] 
              bg-orange-100
             p-10 flex flex-col "
>
  {/* Header */}
  <div className=" text-xs  max-w-2xl">
    <p className=" tracking-[0.3em] uppercase text-2xl text-black mb-3">
      Men's Collection
    </p>

    <h2 className="text-[20px] tracking-widest handwriting font-semibold text-black leading-tight">
      Modern Summer Staples
    </h2>

   
  </div>

  {/* Product Scroll */}
  <div className="mt-5 w-[300px] overflow-x-auto scrollbar-hide snap-x snap-mandatory flex gap-8 pr-5 pb-8">

    {/* Card 1 */}
    <div className="min-w-[280px] snap-start bg-white rounded-3xl p-5 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="h-64 bg-neutral-200 rounded-xl mb-5" />
      <p className="text-neutral-900 font-medium handwriting text-lg">Linen Shirt</p>
      <p className="text-neutral-500 text-sm mt-1">₹2,499</p>
    </div>

    {/* Card 2 */}
    <div className="min-w-[280px] snap-center bg-white rounded-3xl p-5 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="h-64 bg-neutral-200 rounded-xl mb-5" />
      <p className="text-neutral-900 handwriting font-medium text-lg">Tailored Trousers</p>
      <p className="text-neutral-500 text-sm mt-1">₹3,199</p>
    </div>

    {/* Card 3 */}
    <div className="min-w-[280px] snap-center bg-white rounded-3xl p-5 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="h-64 bg-neutral-200 rounded-xl mb-5" />
      <p className="text-neutral-900 handwriting font-medium text-lg">Leather Sneakers</p>
      <p className="text-neutral-500 text-sm mt-1">₹4,999</p>
    </div>

    {/* Card 4 */}
    <div className="min-w-[280px] snap-center bg-white rounded-3xl p-5 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="h-64 bg-neutral-200 rounded-xl mb-5" />
      <p className="text-neutral-900 font-medium handwriting text-lg">Overshirt Jacket</p>
      <p className="text-neutral-500 text-sm mt-1">₹3,999</p>
    </div>

  </div>

  {/* CTA */}
  <div className="mt-0 flex items-center justify-between">
    <p className=" handwriting text-[22px] leading-6 text-black">
      Discover refined menswear essentials crafted for modern lifestyles.
    </p>

    <button className="px-2 ml-3 py-1 rounded-xl bg-white text-black text-xs handwriting   hover:bg-neutral-800 transition-all duration-300">
      Shop Men's Collection →
    </button>
  </div>
</motion.div>
        
        {/* Second image (fade in + zoom in slightly) */}
       
      </div>
      
    </section>
             
             <section ref={ref2} className="h-[300vh]  w-full relative">
            <div className="absolute inset-0">
           <div className={`h-[100vh]  w-full ${visible ? ' sticky top-0 ' : ' sticky top-0  opacity-0'}  z-10 flex flex-row overflow-hidden `}>
                   <h2 className="text-black h-10 w-full text-center  shrink-0 mt-10 text-3xl">Collection</h2>
                 <motion.div style={{ x : x ,scale:scaleBg3,}}  className="flex opacity-100  rounded-3xl h-[100vh] gap-10 p-5  bg-white shadow-2xl    w-max">
      
      {/* Card 1 */}
    
     <div className=" w-[600px] shadow-2xl rounded-3xl mr-1 relative text-black text-center shrink-0"> <Image src="https://res.cloudinary.com/dfehgukz3/image/upload/q_auto,f_auto,w_600/v1766582830/samples/woman-on-a-football-field.jpg" alt="background" fill priority fetchPriority="high" className="object-cover object-center" /> </div>

      {/* Card 2 */}
      <div className="relative w-[600px] h-full shadow-2xl   text-black shrink-0">
        <Image
            src="https://res.cloudinary.com/dfehgukz3/image/upload/q_auto,f_auto,w_600/v1766582828/samples/outdoor-woman.jpg"
            alt="background"
            fill
            priority
            fetchPriority="high"
            className="object-cover  object-center"
          />
      </div>
        <div className="relative  w-[600px] shadow-2xl text-black text-center shrink-0">
       <Image
           src="https://res.cloudinary.com/dfehgukz3/image/upload/w_500,q_auto,f_auto/v1776796425/assam1_ma7htp.jpg"
           alt="background"
           fill
           priority
           fetchPriority="high"
           className="object-cover object-center"
         />
      </div>
        <div className=" w-[600px] shadow-2xl sticky left-0 text-black text-center  shrink-0">
       <Image 
           src="https://res.cloudinary.com/dfehgukz3/image/upload/q_auto,f_auto,w_600/v1766582825/samples/shoe.jpg"
           alt="background"
           fill
           priority
           fetchPriority="high"
           className="object-cover  object-center"
           
         />
      </div>
       <div className=" w-[600px] shadow-2xl relative text-black  text-center  shrink-0">
       <Image
           src="https://res.cloudinary.com/dfehgukz3/image/upload/q_auto,f_auto,w_600/v1766582823/samples/two-ladies.jpg"
           alt="background"
           fill
           priority
           fetchPriority="high"
           className="object-cover  object-center"
         />
      </div>

   
    </motion.div>
     <h2 className="text-black w-full h-10 text-lg">heyyydyasdyasydaysdyady</h2>
    </div>
    </div>
     <div className="absolute inset-0 overflow-y-scroll">
     <section className={`min-h-[1200px] ${!visible ? 'absolute z-10 opacity-100' : 'opacity-0'} bg-white transition-opacity ease-in-out duration-200  text-black px-6 py-20`}>
  <div className="max-w-7xl mx-auto space-y-20">

    {/* 🔥 Minimal Heading */}
    <div className="flex justify-between items-end">
      <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
        New Drop
      </h2>
      <span className="text-black text-sm uppercase tracking-widest">
        SS / 24 Collection
      </span>
    </div>

    {/* 🧥 Editorial Grid */}
    <div className="grid md:grid-cols-3 gap-6">

      {/* Large Editorial Card */}
      <div className="md:col-span-2 relative group overflow-hidden rounded-2xl">
        <img
          src="https://images.unsplash.com/photo-1523398002811-999ca8dec234"
          className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

        <div className="absolute bottom-8 left-8">
          <p className="text-xs tracking-widest text-gray-400 mb-2">
            LIMITED EDITION
          </p>
          <h3 className="text-3xl font-semibold">Urban Shadow Fit</h3>
          <button className="mt-4 px-6 py-2 border border-white/40 hover:border-white text-sm tracking-wide">
            EXPLORE
          </button>
        </div>
      </div>

      {/* Side Vertical Cards */}
      <div className="flex flex-col gap-6">
        {["Oversized Tees", "Minimal Sets"].map((text, i) => (
          <div key={i} className="relative group overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1516826957135-700dedea698c"
              className="w-full h-[240px] object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-5 left-5 text-lg text-black font-medium">
              {text}
            </div>
          </div>
        ))}
      </div>

    </div>

    {/* 🛍 Product Grid */}
    <div>
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl font-medium">Featured Pieces</h3>
        <span className="text-black text-sm">View All</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[1,2,3,4,5,6,7,8].map((item) => (
          <div
            key={item}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-xl bg-neutral-900">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
                className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <button className="px-4 py-2 border border-white text-sm">
                  Quick View
                </button>
              </div>
            </div>

            <div className="mt-3">
              <p className="text-sm text-gray-300">Oversized Hoodie</p>
              <p className="text-white font-medium">₹4,999</p>
            </div>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>
  </div>
  
   </section>
            

      <section  ref={ref3}
             className="bg-white text-white px-6 py-24 ">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* 🖼 Image */}
    <div className="relative group overflow-hidden rounded-2xl">
      <img
        src="https://images.unsplash.com/photo-1523398002811-999ca8dec234"
        className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
    </div>

    {/* ✍️ Story */}
    <div>
      <p className="text-xs tracking-[0.3em] text-black mb-4">
        OUR STORY
      </p>

      <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
        Built from the Streets.
        <br />
        Designed for the Culture.
      </h2>

      <p className="text-gray-400 leading-relaxed mb-6">
        What started as a small idea between creators turned into a movement.
        We weren’t trying to follow trends — we were creating pieces that
        reflected identity, attitude, and individuality.
      </p>

      <p className="text-gray-400 leading-relaxed mb-6">
        Every drop is intentional. Every design tells a story. From oversized
        silhouettes to minimal palettes, we craft clothing that blends
        comfort with statement.
      </p>

      <p className="text-gray-500 leading-relaxed mb-8">
        This isn’t just fashion. It’s expression. It’s culture.
      </p>

      <button className="px-6 py-3 border border-white/40 hover:border-white text-sm tracking-wide transition">
        Explore Collection
      </button>
    </div>

  </div>
</section>

     <footer className={`bg-orange-100 ${bebas.className} tracking-widest text-orange-500 px-6 py-16 text-3xl border-t border-gray-800`}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Your<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Brand</span>
          </h3>
          <p className="text-black leading-relaxed tracking-widest text-xl">
            Crafting beautiful, modern web experiences with a focus on
            performance and design precision.
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h4 className="font-semibold mb-4 text-orange-500">Navigation</h4>
          <ul className="space-y-2 text-black text-sm">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <li
                key={item}
                className=" transition cursor-pointer relative w-fit group"
              >
                {item}
             
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="font-semibold mb-4 text-orange-500">Stay Updated</h4>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 blur-lg opacity-20 rounded-2xl"></div>
            <div className="relative flex bg-gray-900 rounded-2xl overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent px-4 py-3 outline-none w-full text-sm text-gray-300"
              />
              <button className="px-5 text-white py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-sm font-semibold hover:scale-105 transition">
                Join
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm mt-12">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
    
  


    </div>
   
)
}
export default Animatedsection;