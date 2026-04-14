"use client";
import Image from "next/image";
import model4 from '@/assets/model5.png'
import model2 from '@/assets/model7.png'
import model3 from '@/assets/model6.png'
import bg from '@/assets/bg.png'
import Link from "next/link";
export default function Page() {
  return (
    <main  style={{ backgroundImage: `url(${bg.src})` }}  className=" bg-blend-multiply bg-red-400 bg-center bg-cover bg-no-repeat  flex flex-col mt-0 p-0  min-h-full justify-center box-border    min-w-full text-white">
    
           
                         
       <section className="flex flex-col items-center justify-center rounded-3xl mt-0 px-4 bg-yellow-200

scale-80

max-[400px]:scale-89 max-[400px]:w-[94vw]

min-[400px]:bg-no-repeat min-[400px]:scale-90 min-[400px]:w-[94vw]

min-[500px]:translate-x-11 min-[500px]:-translate-y-10

[@media(min-height:500px)]:translate-x-11 
[@media(min-height:500px)]:-translate-y-10 
[@media(min-height:500px)]:h-[90svh] ">

  {/* Top Text */}
       <p className="text-black tracking-widest text-5xl mt-13  leading-10 ">What emerged is not just a storefront, but a </p>

  {/* Heading */}
  <h2 className="text-5xl md:text-8xl text-red-500 tracking-tight">
    JourNey
  </h2>

  {/* Image + Floating Text */}
  <div className="relative flex justify-center items-center mt-10 w-full max-w-5xl">

    {/* Image */}
    <div className="
      border bg-stone-50 
      relative 
      w-[720px] overflow-visible [@media(min-height:500px)]:-translate-y-6 [@media(min-height:500px)]:h-[240px] 
      md:w-[300px] md:h-[260px]
      md:-translate-x-20
    ">
      <Image 
        alt="model1" 
        height={300} 
        width={300} 
        className="scale-150
        0 "
        src={model4}
      />
    </div>

    {/* Text Block */}
    <div className="
      flex flex-col gap-3 ml-6 mt-0 text-center max-w-xs
      md:absolute md:right-0 md:top-10 md:text-left
      md:w-[130px] md:h-[360px]
      md:translate-x-27 md:-translate-y-40
      leading-4
    ">
             <p className="text-black tracking-widest"> A place where tradition meets modernity without losing its soul.</p>
           <p className="text-black tracking-widest mb-2">Where craftsmanship is not rushed, and neither is the experience of discovering it.</p>
    </div>

  </div>

</section>

<section id="model1" className="relative w-full bg-[#f4e8b9]">

  {/* TOPOGRAPHY TEXTURE */}

  {/* STACK WRAPPER */}
  <div className="relative">

    {/* CARD 1 */}
 <div
  style={{ backgroundImage: `url(${bg.src})` }}
  className="sticky top-20 min-h-screen flex items-center z-10 px-6 md:px-16
             bg-[#f4e8b9] bg-cover bg-center  bg-blend-multiply"
>

      <div className="grid md:grid-cols-2 gap-16 items-center w-full">

        {/* TEXT */}
        <div>
          <h2 className="text-5xl md:text-6xl leading-7 font-light text-purple-900">
            Meet the <br />
            <span className="font-medium font-sans">founder</span>
          </h2>

          <p className="mt-6 text-gray-700 max-w-md font-serif tracking-widest text-xl md:text-base">
            Intentional materials that serve impact. Every detail reflects a
            balance between aesthetics and purpose.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <Image
            src={model4}
            alt="founder"
            className="w-full h-[420px] object-contain"
          />

          <div className="absolute -bottom-12 -left-12 w-[160px] h-[160px]">
            <Image
              src={model2}
              alt="secondary"
              className="object-contain w-full h-full shadow-2xl"
            />
          </div>
        </div>

      </div>
    </div>

    {/* CARD 2 */}
<div className="sticky z-40 top-10 min-h-screen flex flex-col justify-center bg-[#f4e8b9] px-6 md:px-16 overflow-y-hidden-hidden">

  {/* HEADING */}
     <div className="flex relative flex-col">
    <h2 className="text-4xl  mb-10 [@media(max-height:700px)]:scale-90 max-[300px]:scale-90 md:text-6xl font-mono text-black  -tracking-[2px]">
    Mekhla <span className="font-medium">Chador</span>
    </h2>
      <span className=" absolute top-10 h-0 w-[300px] border border-black"></span>
  </div>

  <p className="mb-10 text-black leading-4 text-xl">The Mekhla Chador is a traditional attire worn by women of Assam, known for its elegance, grace, and cultural significance</p>

  {/* HORIZONTAL SCROLL */}
  <div className="flex scrollbar-hide gap-6 overflow-x-auto no-scrollbar pb-4">

    {[1,2,3,4,5,6,7].map((item) => (
      <div
        key={item}
        className="min-w-[220px] md:min-w-[280px] h-[300px] bg-white/60 backdrop-blur-md border border-black/10 rounded-2xl flex items-center justify-center hover:scale-105 transition duration-300"
      >
        <span className="text-gray-400 text-sm tracking-widest">
          PRODUCT
        </span>
      </div>
    ))}

  </div>

</div>
  </div>

</section>

    </main>
  );
}