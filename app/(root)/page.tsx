"use client";
import Image from "next/image";
import assam from '@/assets/assam.png'
import model2 from '@/assets/model7.png'
import model3 from '@/assets/model6.png'
import bg from '@/assets/bg.png'
import Link from "next/link";
export default function Page() {
  return (
    <main  style={{ backgroundImage: `url(${bg.src})` }}  className=" bg-blend-multiply bg-stone-200 bg-center bg-cover bg-no-repeat  flex flex-col mt-0 p-0  min-h-full justify-center box-border    min-w-full text-white">
    
           
                         
     <section className="
flex flex-col items-center justify-center
rounded-l-3xl bg-[#FFC000] 
 max-w-sm  md:max-w-sm lg:max-w-md
ml-auto px-4 border border-black

min-h-full sm:min-h-[80vh] md:min-h-[90vh] mt-3 mb-3
">

  {/* Top Text */}<div className="border  overflow-visible  border-transparent ">
        <p className="text-black tracking-widest text-5xl  mt-13 font-serif  leading-9 ">What emerged is not just a storefront, but a </p>
  </div>
       

  {/* Heading */}
  <h2 className="text-5xl md:text-8xl translate-x-13 text-red-500 tracking-tight">
    JourNey
  </h2>

  {/* Image + Floating Text */}
  <div className="relative flex justify-center items-center mt-10 w-full max-w-5xl">

    {/* Image */}
  <div className="relative w-full flex justify-center mt-6">

 <div className="relative w-[200px] h-[400px] mr-4 overflow-hidden">

  <Image 
    src={assam}
    alt="model1"
    fill
    className="object-cover scale-103 md:scale-125"
  />

</div>

</div>

    {/* Text Block */}
    <div className="
      flex flex-col gap-3 ml-0 mt-0 text-center max-w-xs
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

    {/* CARD 2 */}
       <div className="sticky z-20 top-30 min-h-screen flex flex-col justify-center bg-[#f4e8b9] px-6 md:px-16 overflow-y-hidden-hidden">

  {/* HEADING */}
     <div className="flex relative flex-col">
    <h2 className="text-4xl  mb-5 md:text-6xl font-mono text-black  -tracking-[2px]">
    Mekhla <span className="font-medium">Chador</span>
    </h2>
      <span className=" absolute top-10 h-0 w-[300px] border border-black"></span>
  </div>

  <p className="mb-10 text-black leading-4 text-xl">The Mekhla Chador is a traditional attire worn by women of Assam, known for its elegance, grace, and cultural significance</p>

  {/* HORIZONTAL SCROLL */}
  <div className="flex scrollbar-hide mb-40 gap-6 overflow-x-auto no-scrollbar pb-4">

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
      
                <div className="sticky z-30 top-10 min-h-screen flex flex-col justify-center bg-[#f4e8b9] px-6 md:px-16 overflow-hidden">

  {/* HEADING */}
  <div className="relative flex flex-col">
    <h2 className="text-4xl mb-5 md:text-6xl font-mono text-black -tracking-[2px]">
      Apparels
    </h2>
    <span className="absolute top-10 w-[300px] border border-black"></span>
  </div>

  <p className="mb-10 text-black text-xl">
    Explore a wide range of traditional and modern apparels crafted with elegance and culture.
  </p>

  {/* HORIZONTAL SCROLL */}
  <div className="flex gap-6 overflow-x-auto pb-4">
    {[1,2,3,4,5,6].map((item) => (
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
      
      
      <div
  style={{ backgroundImage: `url(${bg.src})` }}
  className="sticky top-25 min-h-[110vh] flex items-center z-30 px-6 md:px-16
            stroke-stone-200 bg-cover bg-center "
>

      <div className="grid md:grid-cols-2 gap-16 items-center w-full">

        {/* TEXT */}
        <div>
          <h2 className="text-5xl mt-6 md:text-6xl leading-7 font-light text-purple-900">
            Meet the <br />
            <span className="font-medium font-sans">founder</span>
          </h2>

          <p className="mt-6 text-gray-700 max-w-md font-serif tracking-widest text-xl md:text-base">
            Intentional materials that serve impact. Every detail reflects a
            balance between aesthetics and purpose.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative border w-[300px]  -translate-y-14 bg-stone-100 border-black mb-40">
          <Image
            src={assam}
            alt="founder"
            className="w-full h-[420px] object-contain scale-75"
          />

          <div className="absolute hidden -bottom-12 -left-12 w-[160px] h-[160px]">
            <Image
              src={model2}
              alt="secondary"
              className="object-contain w-full h-full shadow-2xl"
            />
          </div>
        </div>

      </div>
      </div>

   </div>

 </section>

    </main>
  );
}