'use client'
import CarouselSize from "@/components/slides"
import model2 from '@/assets/model5.png'
import model3 from '@/assets/model6.png'
import model4 from '@/assets/model4.png'
import badge from '@/assets/boyicon2.png';
import badge2 from '@/assets/girlicon3.png';
import icon from '@/assets/jwellery1.png'
import bg from '@/assets/bg.png'
import girl from '@/assets/boyband.jpeg'
import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
const data = [
  { 
    image: model2,
    text: "Elegant casual wear model featuring a modern fit and comfortable fabric, perfect for everyday style."
  },
  { 
    image: model3,
    text: "Trendy outfit with a sleek design, ideal for both casual outings and semi-formal occasions."
  },
  { 
    image: model4,
    text: "Premium fashion piece with a bold look, crafted for style and confidence."
  }
];
const page = () => {
   const router = useRouter()
   const[index, setindex] = useState<undefined|number>(0)

             return(
              <main className="p-0 m-0 h-[200vh] w-full">
            <section
  style={{ backgroundImage: `url(${girl.src})` }}
  className=" h-[480px] w-full scale-105 aspect-[14/9] bg-cover bg-no-repeat bg-position-[80%_95%]"
/> 
 <section className="w-full h-auto sticky top-0 z-50  bg-gradient-to-b from-white via-gray-50 to-white">

  {/* Sticky Header */}
  <div
     
    className="
    
    bg-white/40 backdrop-blur-md
    border-b border-gray-200/40
    flex flex-col items-center py-5
    shadow-sm"
  >

    {/* Title */}
    <h1 className="text-gray-900 font-semibold text-sm md:text-xl tracking-widest uppercase">
      Authentic Assamese Collection
    </h1>

    {/* Category Navigation */}
    <div className="w-full flex justify-center gap-8 md:gap-14 mt-5 px-4">

      {/* MEN */}
      <div className="flex flex-col items-center group cursor-pointer">
        <Image
          onClick={() => { setindex(0); router.push('/mensection') }}
          alt="men"
          src={badge}
          className="h-[75px] w-[75px] 
          transition-all duration-500 ease-out
          group-hover:scale-105 group-hover:-translate-y-1"
        />

        <button
          onClick={() => setindex(0)}
          className={`mt-2 text-xs md:text-sm font-medium tracking-wider transition-all
          ${index === 0 
            ? 'text-black' 
            : 'text-gray-400 group-hover:text-black'}`}
        >
          MEN
          {index === 0 && (
            <div className="h-[2px] w-5 bg-black mx-auto mt-1 rounded-full"></div>
          )}
        </button>
      </div>

      {/* WOMEN */}
      <div className="flex flex-col items-center -translate-y-2 group cursor-pointer">
        <Image
          onClick={() => { setindex(1); router.push('/womensection') }}
          alt="women"
          src={badge2}
          className="h-[95px] w-[95px] 
          transition-all duration-500 ease-out
          group-hover:scale-105 group-hover:-translate-y-1"
        />

        <button
          onClick={() => setindex(1)}
          className={`-translate-y-[6px] text-xs md:text-sm font-medium tracking-wider transition-all
          ${index === 1 
            ? 'text-black' 
            : 'text-gray-400 group-hover:text-black'}`}
        >
          WOMEN
          {index === 1 && (
            <div className="h-[2px] w-5 bg-black mx-auto mt-1 rounded-full"></div>
          )}
        </button>
      </div>

      {/* ACCESSORIES */}
      <div className="flex flex-col items-center group cursor-pointer">
        <Image
          alt="jewellery"
          src={icon}
          className="h-[60px] w-[60px] mt-2
          transition-all duration-500 ease-out
          group-hover:scale-105 group-hover:-translate-y-2"
        />

        <button
          onClick={() => setindex(2)}
          className={`mt-[15px] text-xs md:text-sm font-medium tracking-wider transition-all 
          ${index === 2 
            ? 'text-black' 
            : 'text-gray-400 group-hover:text-black'}`}
        >
          ACCESSORIES
          {index === 2 && (
            <div className="h-[2px] w-6 bg-black mx-auto mt-1 rounded-full"></div>
          )}
        </button>
      </div>

    </div>
  </div>

  

  {/* Carousel Section */}
  

</section>
 <div>
     <CarouselSize data = {data}/>
   </div>
   
              </main>
             )       


}

export default page