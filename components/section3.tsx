 'use client'
 import { motion, useScroll, useTransform } from "framer-motion";
 import Image from "next/image";
import { useRef,useEffect,useState} from "react";
import {bebas} from "@/lib/font";

const Section3 = () => {

      const [visible, setVisible] = useState<boolean>(true)
     
const ref2 = useRef(null);
  const { scrollYProgress:scrollMProgress } = useScroll({
    target: ref2,
    offset: ["start end", "end start"],
  });

  
     const opacityFg3 = useTransform(
  scrollMProgress,
  [0.2 , 0.4],
  [1, 1]
);
        const scaleBg3 = useTransform(scrollMProgress, [0.6,0.75], [0.5,0.5]); // shrink

  const  x = useTransform(scrollMProgress, [0.35, 0.75], ["-10%", "-82.5%"]);

      useEffect(()=>{
        const unsubscribe = scrollMProgress.on("change", (v) => {
    if(v >= 0.3){
    
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
   
    }
    
  });

  return () => unsubscribe();
   },[scrollMProgress])


    return(
        <>
           <section ref={ref2} className="h-[300vh]  
  backdrop-blur-lg   w-full relative">
            <div className="absolute  inset-0">
                
           <motion.div   
           
         className={`h-[100vh]  w-full ${!visible ? ' sticky top-0 ' : ' sticky top-0  opacity-0'} transform transition-opacity duration-600 ease-in  z-10 flex flex-row overflow-hidden `}>
                      
                       <motion.div style={{opacity : opacityFg3}} className="absolute inset-0">
                                   <Image
           src="https://res.cloudinary.com/dfehgukz3/image/upload/w_500,q_auto,f_auto/v1776796425/assam1_ma7htp.jpg"
           alt="background"
            fill
                               
           className="object-cover transition-opacity duration-500 ease-linear  absolute -z-10   object-center"
         />
                       </motion.div>
               
                   <h2 className="text-black h-10 w-full text-center block absolute z-80  shrink-0 mt-15 text-5xl">Collection</h2>
                    
               
                 <motion.div style={{ x : x, scale : scaleBg3}}  className="flex opacity-100   rounded-3xl h-[100vh] gap-10 p-5  bg-white shadow-2xl    w-max">
      
      {/* Card 1 */}
    
     <div className=" w-[600px] shadow-2xl rounded-3xl mr-1 relative text-black text-center  shrink-0"> <Image src="https://res.cloudinary.com/dfehgukz3/image/upload/q_auto,f_auto,w_600/v1766582830/samples/woman-on-a-football-field.jpg" alt="background" fill  className="object-cover object-center" /> </div>

      {/* Card 2 */}
      <div className="relative w-[600px] h-full shadow-2xl   text-black shrink-0">
        <Image
            src="https://res.cloudinary.com/dfehgukz3/image/upload/q_auto,f_auto,w_600/v1766582828/samples/outdoor-woman.jpg"
            alt="background"
          fill   
           className="object-cover object-[50%_50%]"
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
    
    </motion.div>
    </div>

     <div className={`absolute ${visible ? 'opacity-100 z-20 ' : '  opacity-0 -z-10'} ${bebas.className} bg-white  inset-0   `}>
      <div className=" absolute overflow-y-auto top-10 h-full w-full">
    <section
  className={`min-h-full
  bg-gray-100/80
  backdrop-blur-lg  transform  transition-opacity duration-500 ease-linear 
  text-black px-6 py-20`}
>
  <div className="max-w-7xl mx-auto  space-y-10">

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
  alt="black guy"
  src="https://res.cloudinary.com/dfehgukz3/image/upload/f_auto,q_auto/v1777183462/photo-1523398002811-999ca8dec234_qisb0t.jpg"
  width={800}
  height={600}
  priority
  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 66vw, 800px"
  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
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
      alt={text}
      src="https://res.cloudinary.com/dfehgukz3/image/upload/f_auto,q_auto,c_fill,g_auto/v1777183530/photo-1516826957135-700dedea698c_yw21xp.jpg"
      width={800}
      height={600}
      loading="lazy"
      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 420px"
      className="w-full h-[240px] object-cover group-hover:scale-105 transition-transform duration-700"
    />

    <div className="absolute inset-0 bg-black/40" />

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
        {[1, 2, 3, 4].map((item) => (
  <div key={item} className="group cursor-pointer">
    <div className="relative overflow-hidden rounded-xl bg-neutral-900">
      <Image
        alt="Oversized Hoodie"
        src="https://res.cloudinary.com/dfehgukz3/image/upload/c_fill,g_auto,f_auto,q_auto/v1777183566/photo-1523381210434-271e8be1f52b_yquzuo.jpg"
        width={600}
        height={600}
        loading="lazy"
        sizes="(max-width:768px) 50vw, 50vw"
        className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
      />

      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
        <button className="px-4 py-2 border border-white text-black text-sm">
          Quick View
        </button>
      </div>
    </div>

    <div className="mt-3">
      <p className="text-[20px] text-black">Oversized Hoodie</p>
      <p className="font-medium text-black">₹4,999</p>
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
        </>
    )
}

export default Section3;