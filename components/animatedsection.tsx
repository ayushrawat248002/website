'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {rockSalt,bebas,caveat} from "@/lib/font"
const Animatedsection = () => {

  const [visible, setVisible] = useState<boolean>(true)
    const [visiblesec, setVisibleSec] = useState<boolean>(true)
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
  const y = useTransform(scrollMProgress,[0 ,0.1],[0 , 0])
  // 🔥 Scale effect
  const scaleBg = useTransform(scrollYProgress, [0.3, 0.5], [0.95, 0.5]); // shrink
  const scaleFg = useTransform(scrollYProgress, [0.3, 0.4], [0.5, 1]); // settle in

     const opacityFg3 = useTransform(scrollMProgress, [0.65, 0.75], [1, 0]);//adsa
        const scaleBg3 = useTransform(scrollMProgress, [0.6,0.7], [0.5,0.65]); // shrink
  // Crossfade
  const opacityBg2 = useTransform(scrollZProgress, [0.35, 0.5], [1, 0]);
  const opacityFg2 = useTransform(scrollZProgress, [1, 1], [1, 1]);
  const  x = useTransform(scrollMProgress, [0.3, 0.7], ["-20%", "-82.5%"]);
  // 🔥 Scale effect
  const scaleBg2 = useTransform(scrollZProgress, [0.2, 0.5], [1, 0.5]); // shrink
  const scaleFg2 = useTransform(scrollZProgress, [0, 0.3 ], [1, 1]); // settle in
  
  useEffect(()=>{
        const unsubscribe = scrollMProgress.on("change", (v) => {
    if(v >= 0.3){
     setVisibleSec(false)
    }
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
     setVisibleSec(true)
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
    src="https://res.cloudinary.com/dfehgukz3/image/upload/w_900,q_auto,f_auto/v1776796425/assam1_ma7htp.jpg"
    alt="background"
    fill
    priority
    fetchPriority="high"
    className="object-cover opacity-95 object-center"
  />
</motion.div>

        {/* Second image (fade in + zoom in slightly) */}
        <motion.div

  className="min-h-[600px] w-full   z-20 
  backdrop-blur-lg bg-orange-700/40
          text-shadow-none  text-black   
                     p-10 flex flex-col justify-between"
        >
         
          {/* Header */}
          <div className={`max-w-xl ${bebas.className} mb-5 `}>
           
    <h2 className={`text-5xl   handwriting text-white   leading-10`}>
              Minimal Summer Essentials
            </h2>
            <p className="text-white tracking-widest handwriting mt-10">
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
                  sizes="100vw"
                   src={'https://res.cloudinary.com/dfehgukz3/image/upload/w_600,q_auto,f_auto/v1766582818/samples/bike.jpg'}
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
                   priority
                  fetchPriority="high"
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

      <section ref={secondRef} className="h-auto mt-6 font-bold  bg-white">
                <div    className="relative flex flex-col items-start">
          
        {/* First image (fade out + shrink) */}
   
<div className=" h-[600px]  sticky top-10 w-full">
<motion.div
  style={{ scale: scaleBg2 }}
  className="w-full h-full relative overflow-hidden  "
>
  <Image
    src="https://res.cloudinary.com/dfehgukz3/image/upload/w_900,q_auto,f_auto/v1776796425/assam3_uqd9ye.jpg"
    alt="assam background"
    fill
    className="object-scale-down object-center "
  />

  {/* Glass Blur Layer */}
  
</motion.div>
</div>
        {/* Second image (fade in + zoom in slightly) */}
         ```jsx
<motion.div
  style={{
    y: y,
    opacity: opacityFg2,
    scale: scaleFg2,
  }}
  className={`min-h-[400px] w-full sticky rounded-2xl shadow-sm z-40
  relative overflow-hidden
  bg-gray-100/80 ${bebas.className}
  backdrop-blur-lg border border-white/20
  p-10 flex flex-col`}
>
  {/* Glow Overlay */}
  <div className="absolute inset-0 rounded-2xl 
  bg-gradient-to-br from-yellow-300/20 via-transparent to-white/10 
  pointer-events-none" />

  {/* Header */}
  <div className={`text-xs  max-w-2xl relative z-10`}>
    <p className={`tracking-[0.3em]   font-extrabold text-2xl leading-10  text-orange-600 uppercase  mb-5`}>
      Men's Collection
    </p>

    <h2 className="text-[20px] tracking-widest font-extralight  text-neutral-900 leading-tight">
      Modern Summer Staples
    </h2>
  </div>

  {/* Product Scroll */}
  <div className="mt-5 w-[300px] overflow-x-auto scrollbar-hide snap-x snap-mandatory flex gap-8 pr-5 pb-8 relative z-10">

    {/* Card 1 */}
    <div className="min-w-[280px] snap-start  bg-orange-300  backdrop-blur-md 
    rounded-3xl p-5 shadow-xl ml-2 hover:shadow-2xl 
    transition-all duration-300 border border-white/30">
      <div className="h-64 bg-neutral-200 rounded-xl mb-5" />
      <p className="text-neutral-900 font-medium handwriting text-lg">Linen Shirt</p>
      <p className="text-neutral-500 text-sm mt-1">₹2,499</p>
    </div>

    {/* Card 2 */}
    <div className="min-w-[280px] snap-center bg-orange-300 backdrop-blur-md 
    rounded-3xl p-5 shadow-md hover:shadow-2xl 
    transition-all duration-300 border border-white/30">
      <div className="h-64 bg-neutral-200 rounded-xl mb-5" />
      <p className="text-neutral-900 handwriting font-medium text-lg">Tailored Trousers</p>
      <p className="text-neutral-500 text-sm mt-1">₹3,199</p>
    </div>

    {/* Card 3 */}
    <div className="min-w-[280px] snap-center  bg-orange-300  backdrop-blur-md 
    rounded-3xl p-5 shadow-md hover:shadow-2xl 
    transition-all duration-300 border border-white/30">
      <div className="h-64 bg-neutral-200 rounded-xl mb-5" />
      <p className="text-neutral-900 handwriting font-medium text-lg">Leather Sneakers</p>
      <p className="text-neutral-500 text-sm mt-1">₹4,999</p>
    </div>

    {/* Card 4 */}
    <div className="min-w-[280px] snap-center  bg-orange-300  backdrop-blur-md 
    rounded-3xl p-5 shadow-md hover:shadow-2xl 
    transition-all duration-300 border border-white/30">
      <div className="h-64 bg-neutral-200 rounded-xl mb-5" />
      <p className="text-neutral-900 font-medium handwriting text-lg">Overshirt Jacket</p>
      <p className="text-neutral-500 text-sm mt-1">₹3,999</p>
    </div>

  </div>

  {/* CTA */}
  <div className="mt-0 flex items-center justify-between relative z-10">
    <p className="handwriting text-[22px] leading-6 tracking-wider text-neutral-900">
      Discover refined menswear essentials crafted for modern lifestyles.
    </p>

    <button className="px-3 ml-3 py-1 rounded-xl 
    bg-white/80 backdrop-blur-md text-black text-xs handwriting 
    hover:bg-black hover:text-white 
    transition-all duration-300 border border-white/30">
      EXPLORE →
    </button>
  </div>
</motion.div>
```

        
        {/* Second image (fade in + zoom in slightly) */}
       
      </div>
      
    </section>
             
             <section ref={ref2} className="h-[300vh]  bg-gray-100/80
  backdrop-blur-lg   w-full relative">
            <div className="absolute  inset-0">
           <div className={`h-[100vh]  w-full ${visible ? ' sticky top-0 ' : ' sticky top-0  opacity-0'}  z-10 flex flex-row overflow-hidden `}>
                   <h2 className="text-black h-10 w-full text-center  shrink-0 mt-15 text-5xl">Collection</h2>
                    <section className={`bg-gray-50 tracking-widest h-screen ${!visiblesec ? 'opacity-0 -z-30' :'opacity-100 z-30'} transform transition-opacity duration-600 ${bebas.className} ease-linear absolute py-16 px-6 md:px-20`}>
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
          Summer Collection 2026
        </h2>

        {/* Subheading */}
        <p className="text-lg text-gray-600 mb-8">
          Discover a blend of comfort, elegance, and modern fashion designed
          for everyday wear and special occasions.
        </p>

        {/* Description */}
        <div className="text-gray-700 space-y-4 text-base leading-relaxed">
          <p>
            Our latest collection features breathable fabrics, vibrant colors,
            and versatile designs that fit seamlessly into your lifestyle.
            Whether you're heading out for a casual day or dressing up for an
            evening event, we've got you covered.
          </p>

          <p>
            Each piece is crafted with attention to detail, ensuring durability
            while keeping up with the latest fashion trends. From relaxed fits
            to tailored silhouettes, explore styles that reflect your unique
            personality.
          </p>

          <p>
            Step into the season with confidence and redefine your wardrobe
            with our exclusive range.
          </p>
        </div>

        {/* Button */}
        <div className="mt-10">
          <button className="bg-black text-white px-6 py-3 rounded-2xl shadow-md hover:bg-gray-800 transition">
            Explore Collection
          </button>
        </div>

      </div>
    </section>
                 <motion.div style={{ x : x ,scale:scaleBg3,}}  className="flex opacity-100  rounded-3xl h-[100vh] gap-10 p-5  bg-white shadow-2xl    w-max">
      
      {/* Card 1 */}
    
     <div className=" w-[600px] shadow-2xl rounded-3xl mr-1 relative text-black text-center shrink-0"> <Image src="https://res.cloudinary.com/dfehgukz3/image/upload/q_auto,f_auto,w_600/v1766582830/samples/woman-on-a-football-field.jpg" alt="background" fill  className="object-cover object-center" /> </div>

      {/* Card 2 */}
      <div className="relative w-[600px] h-full shadow-2xl   text-black shrink-0">
        <Image
            src="https://res.cloudinary.com/dfehgukz3/image/upload/q_auto,f_auto,w_600/v1766582828/samples/outdoor-woman.jpg"
            alt="background"
          fill
            
            className="object-cover  object-center"
          />
      </div>
        <div className="relative  w-[600px] shadow-2xl text-black text-center shrink-0">
       <Image
           src="https://res.cloudinary.com/dfehgukz3/image/upload/w_500,q_auto,f_auto/v1776796425/assam1_ma7htp.jpg"
           alt="background"
            fill
           className="object-cover object-center"
         />
      </div>
        <div className=" w-[600px] shadow-2xl sticky left-0 text-black text-center  shrink-0">
       <Image 
           src="https://res.cloudinary.com/dfehgukz3/image/upload/q_auto,f_auto,w_600/v1766582825/samples/shoe.jpg"
           alt="background"
            fill
           className="object-cover  object-center"
           
         />
      </div>
       <div className=" w-[600px] shadow-2xl relative text-black  text-center  shrink-0">
       <Image
           src="https://res.cloudinary.com/dfehgukz3/image/upload/q_auto,f_auto,w_600/v1766582823/samples/two-ladies.jpg"
           alt="background"
          fill
           className="object-cover  object-center"
         />
      </div>

   
    </motion.div>
    
    </div>
    </div>

     <div className={`absolute ${!visible ? 'opacity-100  z-10' : '  opacity-0 -z-10'} ${bebas.className}  inset-0   `}>
      <div className=" absolute overflow-y-auto top-10 h-full w-full">
    <section
  className={`min-h-full
  bg-gray-100/80
  backdrop-blur-lg  transform  transition-opacity duration-500 ease-linear 
  text-black px-6 py-20`}
>
  <div className="max-w-7xl mx-auto  space-y-20">

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
        <Image
        alt='black guy'
          
          priority
            width={800}
  height={600}
          src="https://res.cloudinary.com/dfehgukz3/image/upload/f_auto,q_auto,w_auto/v1777183462/photo-1523398002811-999ca8dec234_qisb0t.jpg"
             
  
          className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

        <div className="absolute bottom-8 left-8">
          <p className="text-xs tracking-widest text-white mb-2">
            LIMITED EDITION
          </p>
          <h3 className="text-3xl text-white font-semibold">Urban Shadow Fit</h3>
          <button className="mt-4 px-6 text-white py-2 border border-white/40 hover:border-white text-sm tracking-wide">
            EXPLORE
          </button>
        </div>
      </div>

      {/* Side Vertical Cards */}
      <div className="flex flex-col gap-6">
        {["Oversized Tees", "Minimal Sets"].map((text, i) => (
          <div key={i} className="relative group overflow-hidden rounded-2xl">
            <Image  
            alt="guy"
    priority
        
          width={800}
  height={600}
              src="https://res.cloudinary.com/dfehgukz3/image/upload/f_auto,q_auto,w_auto,c_fill,g_auto/v1777183530/photo-1516826957135-700dedea698c_yw21xp.jpg"
              className="w-full h-[240px] object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-5 left-5 text-lg text-white font-medium">
              {text}
            </div>
          </div>
        ))}
      </div>

    </div>

    {/* 🛍 Product Grid */}
    <div className="">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl font-medium">Featured Pieces</h3>
        <span className="text-black text-sm">View All</span>
      </div>

      <div className="grid grid-cols-2  md:grid-cols-2 gap-6">
        {[1,2,3,4,5,6,7,8].map((item) => (
          <div
            key={item}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-xl bg-neutral-900">
              <Image
                
                alt="tees"
              
                 width={600}
  height={600}
    priority
  
                src="https://res.cloudinary.com/dfehgukz3/image/upload/c_fill,g_auto,w_auto/f_auto/q_auto/v1777183566/photo-1523381210434-271e8be1f52b_yquzuo.jpg"
                className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <button className="px-4 py-2 border border-white text-black text-sm">
                  Quick View
                </button>
              </div>
            </div>

            <div className="mt-3">
              <p className="text-sm text-black text-[20px]">Oversized Hoodie</p>
              <p className="text-black font-medium">₹4,999</p>
            </div>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>
</div>
</div>

  
   </section>
            

      <section  ref={ref3}
             className={ `bg-gray-100/80 ${bebas.className}
  backdrop-blur-lg   text-white px-6 py-24 `}>
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* 🖼 Image */}
    <div className="relative group overflow-hidden rounded-2xl">
      <Image
          
          alt = 'black guy'
    priority
         width={800}
  height={600}
        src="https://res.cloudinary.com/dfehgukz3/image/upload/f_auto,q_auto,w_auto/v1777183462/photo-1523398002811-999ca8dec234_qisb0t.jpg"
        className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
    </div>

    {/* ✍️ Story */}
    <div>
      <p className="text-xl tracking-[0.3em] text-black mb-4">
        OUR STORY
      </p>

      <h2 className="text-4xl  tracking-wider text-black md:text-5xl font-semibold leading-tight mb-6">
        Built from the Streets.
        <br />
        Designed for the Culture.
      </h2>

      <p className="text-gray-400 text-[20px] leading-relaxed mb-6">
        What started as a small idea between creators turned into a movement.
        We weren’t trying to follow trends — we were creating pieces that
        reflected identity, attitude, and individuality.
      </p>

      <p className="text-gray-400 text-[20px] leading-relaxed mb-6">
        Every drop is intentional. Every design tells a story. From oversized
        silhouettes to minimal palettes, we craft clothing that blends
        comfort with statement.
      </p>

      <p className="text-gray-500 text-[30px] leading-relaxed mb-8">
        This isn’t just fashion. It’s expression. It’s culture.
      </p>

      <button className="px-6 py-3 border text-white bg-black rounded-4xl border-white/40 hover:border-white text-sm tracking-wide transition">
        Explore Collection
      </button>
    </div>

  </div>
</section>

     <footer className={` bg-gray-100/50
  backdrop-blur-lg shadow-2xl ${bebas.className} tracking-widest text-orange-500 px-6 py-16 text-3xl`}>
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