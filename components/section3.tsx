 'use client'
 import { motion, useScroll, useTransform } from "framer-motion";
 import Image from "next/image";
import { useRef,useEffect,useState} from "react";
import {bebas} from "@/lib/font";

const Section3 = () => {

      const [visible, setVisible] = useState<boolean>(true)
     const[blr, setblur] = useState<boolean>(false);
      const boolref = useRef(true)
const ref2 = useRef(null);
  const { scrollYProgress:scrollMProgress } = useScroll({
    target: ref2,
    offset: ["start end", "end start"],
  });

  
     const opacityFg3 = useTransform(
  scrollMProgress,
  [0 , 0.6],
  [1, 0]
);
        const scaleBg3 = useTransform(scrollMProgress, [0.6,0.75], [0.35,0.35]); // shrink

  const  x = useTransform(scrollMProgress, [0.35, 0.9], ["-75%", "-15%"]);

  
    


    return(
     

        <section className="flex relative mt-5 pt-3  flex-col">
         <div className={`      `}>
      <div className="    h-full w-full">
    <section
  className={`min-h-full
 
  backdrop-blur-xs  transform  transition-opacity duration-500 ease-linear 
  text-black px-2  py-10`}
>
  <div className="max-w-7xl mx-auto md:mx-0 space-y-16 md:px-2">

    {/* 🔥 Minimal Heading */}
  <div className="md:flex md:justify-between md:items-end">
      <h2 className="text-4xl md:text-7xl leading-none font-semibold tracking-tight">
        New Drop
      </h2>
      <span className="text-sm md:text-5xl uppercase tracking-[0.35em] text-neutral-500">
        SS / 24 Collection
      </span>
    </div>

    {/* 🧥 Editorial Grid */}
 <div className=" ">
<div className="flex md:h-[80vh]  flex-col md:flex-ro  md:w-[100vw]  gap-6 md:py-10 md:overflow-auto md:bg-amber-100 md:gap-18">
  {/* Large Editorial Card */}

  <div className=" md:flex rounded-4xl md:flex-row-reverse    ">
   
  <div className="relative group overflow-hidden md:h-[80vh] rounded-2xl   md:w-full">
    <Image
      alt="black guy"
      src="https://res.cloudinary.com/dfehgukz3/image/upload/v1784255138/_BBB9715_vjhzry.jpg"
      priority
      height={800}
      width={800}
      sizes="(max-width:768px) 100vw, 80vw"
      className="
       w-full
        h-[500px]
        md:h-[80vh]
        object-cover
        rounded-2xl
        group-hover:scale-105
        transition-transform
        duration-700
      "
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

    <div className="absolute bottom-8 left-8">
      <p className="text-xs tracking-widest text-white mb-2">
        LIMITED EDITION
      </p>

      <h3 className="text-3xl text-white font-semibold">
        Urban Shadow Fit
      </h3>

      <button className="mt-4 px-6 py-2 border border-white/40 hover:border-white text-white text-sm tracking-wide">
        EXPLORE
      </button>
    </div>
  </div>

  </div>

  {/* Featured Pieces */}
  <div className=" flex flex-col gap-6">
    <div className="flex justify-between items-center">
      <h3 className="md:text-2xl font-medium">
        Featured Pieces
      </h3>

      <span className="text-sm md:text-4xl underline underline-offset-2">
        View All
      </span>
    </div>

    <div className="grid grid-cols-2 gap-6  md:gap-30">
      {[1,2,3,4,5,6,7,8].map((item,index)=>(
        <div
          key={item}
          className={`
            group cursor-pointer
            md:mt-2
            md:h-[450px]
            md:w-[500px]
            ${index>3 ? "[@media(max-height:800px)]:hidden" : ""}
          `}
        >
          <div className="relative overflow-hidden rounded-xl bg-neutral-900">
            <Image
              alt="Oversized Hoodie"
              src="https://res.cloudinary.com/dfehgukz3/image/upload/v1784255132/_BBB9674_ygg0rm.jpg"
              width={600}
              height={600}
              loading="lazy"
              sizes="(max-width:768px) 50vw, 20vw"
              className="
                w-full
                h-60
                md:h-[450px]
                object-cover
                group-hover:scale-105
                transition-transform
                duration-500
              "
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <button className="px-4 py-2 border border-white text-white text-6xl">
                Quick View
              </button>
            </div>
          </div>

          <div className="mt-3  md:mt-2">
            <p className="text-xl md:text-6xl">
              Oversized Hoodie
            </p>

            <p className="font-medium md:text-5xl md:mb-3">
              ₹4,999
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

</div>


    {/* 🛍 Product Grid */}
  

  </div>
</section>
</div>
         </div>
           <section ref={ref2} className={` [@media(max-height:800px)]:h-[300vh] h-screen bg-black ' }
  backdrop-blur-lg    w-full relative`}>
         
      
    <motion.div   
           
         className={`h-screen  w-full [@media(max-height:800px)]:sticky  top-0  z-10 flex flex-row  overflow-hidden `}>
                      
                       <motion.div className="absolute  inset-0">
                                   <Image
           src="https://res.cloudinary.com/dfehgukz3/image/upload/v1784255120/_BBB9679_t6copk.jpg"
            fill
            alt="back"       
            sizes="100vh"     
           className={`object-cover  absolute -z-10   object-center`}
         />
 <div className="absolute  inset-0 bg-gradient-to-br from-black/10 via-white/20 to-amber-200/20"></div>
                       </motion.div>
               
                   <h2 className=" h-10 w-full text-center block absolute z-80  shrink-0 mt-20 text-shadow-2xs text-shadow-black text-amber-300 text-5xl">Collection</h2>
                   
               
                 <motion.div style={{ x : x,scale:scaleBg3}}  className={`  opacity-100 [@media(max-height:800px)]:flex hidden  mt-170   rounded-5xl rotate-25 h-[150vh]  gap-2 p-2  bg-white shadow-2xs `}>
      
      {/* Card 1 */}
    
     <div className=" w-[800px] shadow-2xl rounded-3xl mr-1 relative text-black text-center  shrink-0"> <Image src="https://res.cloudinary.com/dfehgukz3/image/upload/q_auto,f_auto,w_600/v1766582830/samples/woman-on-a-football-field.jpg" alt="background" fill  className="object-cover object-center  p-5" /> </div>

      {/* Card 2 */}
      <div className="relative w-[800px] h-full shadow-2xl   text-black shrink-0">
        <Image
            src="https://res.cloudinary.com/dfehgukz3/image/upload/v1784255250/_BBB9498_lwwc4v.jpg"
            alt="background"
          fill   
           className="object-cover p-5 object-[50%_50%]"
          />
      </div>
        <div className="relative  w-[800px] shadow-2xl text-black text-center shrink-0">
       <Image
          alt=""
           src="https://res.cloudinary.com/dfehgukz3/image/upload/v1784255283/_BBB9558_y1b52n.jpg"
            fill
           className="object-cover  p-5 object-center"
         />
      </div>
        <div className=" w-[800px] shadow-2xl sticky left-0 text-black text-center  shrink-0">
       <Image 
           src="https://res.cloudinary.com/dfehgukz3/image/upload/v1784255272/_BBB9511_dafx14.jpg"
           alt="background"
            fill
           className="object-cover  p-5  object-center"
           
         />
      </div>
       <div className=" w-[800px] shadow-2xl relative text-black  text-center  shrink-0">
       <Image
           src="https://res.cloudinary.com/dfehgukz3/image/upload/q_auto,f_auto,w_600/v1766582823/samples/two-ladies.jpg"
           alt="background"
          fill
           className="object-cover  p-5  object-center"
         />
      </div>

   
    </motion.div>
    
    </motion.div>


  
   </section>
        </section>
    )
}

export default Section3;