'use client'
import CarouselSize from "@/components/slides"
import model2 from '@/assets/model5.png'
import model3 from '@/assets/model6.png'
import model4 from '@/assets/model4.png'
import badge from '@/assets/boyicon2.png';
import badge2 from '@/assets/girlicon3.png';
import icon from '@/assets/jwellery1.png'
import bg from '@/assets/bg.png'
import girl from '@/assets/girlmodel11.png'
import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
const data = [

  {image : model2},
  {image : model3},
  {image : model4}
]
const page = () => {
   const router = useRouter()
   const[index, setindex] = useState<undefined|number>(0)

             return(
              <main className="p-0 m-0 h-[200vh] w-full">
            <section
  style={{ backgroundImage: `url(${girl.src})` }}
  className=" h-[320px] w-full aspect-[16/9] bg-cover bg-no-repeat bg-[0%_20%]"
/>
                  <section   className="w-full bg-linear-to-b from-white via-gray-50 to-white m-0 p-0">

  {/* Sticky Header */}
  <div style={{ backgroundImage: `url(${bg.src})` }} className="sticky top-0 z-30 backdrop-blur-md bg-white/80 border-b  border-gray-100 flex flex-col items-center py-4 shadow-lg">

    <h1 className="text-black font-mono text-lg md:text-xl tracking-wide">
      Authentic Assamese Collection
    </h1>

    {/* Category Navigation */}
    <div className="w-full flex justify-center gap-6 md:gap-12 mt-5 px-4">

      {/* MEN */}
      <div className="flex flex-col items-center group cursor-pointer">
        <Image
          onClick={() => { setindex(0); router.push('/mensection') }}
          alt="men"
          src={badge}
          className="h-[75px] w-[75px] transition-transform duration-300 group-hover:scale-110"
        />
        <button
          onClick={() => setindex(0)}
          className={`mt-2 text-sm font-semibold tracking-wider transition-all
          ${index === 0 ? 'text-black underline underline-offset-8' : 'text-gray-500 group-hover:text-black'}`}
        >
          MEN
        </button>
      </div>

      {/* WOMEN */}
      <div className="flex flex-col items-center -translate-y-2   group cursor-pointer">
        <Image
          onClick={() => { setindex(1); router.push('/womensection') }}
          alt="women"
          src={badge2}
          className="h-[98px] w-[98px]  transition-transform duration-300 group-hover:scale-110"
        />
        <button
          onClick={() => setindex(1)}
          className={`-translate-y-[6px]   text-sm font-semibold tracking-wider transition-all
          ${index === 1 ? 'text-black underline underline-offset-8' : 'text-gray-500 group-hover:text-black'}`}
        >
          WOMEN
        </button>
      </div>

      {/* ACCESSORIES */}
      <div className="flex flex-col items-center group cursor-pointer">
        <Image
          alt="jewellery"
          src={icon}
          className="h-[60px] w-[60px] mt-2 transition-transform duration-300 group-hover:scale-110"
        />
        <button
          onClick={() => setindex(2)}
          className={`mt-[18px] text-sm font-semibold tracking-wider transition-all 
          ${index === 2 ? 'text-black underline underline-offset-8' : 'text-gray-500 group-hover:text-black'}`}
        >
          ACCESSORIES
        </button>
      </div>

    </div>
  </div>

  {/* Carousel Section */}
  <div className="px-2 md:px-6 py-4">
    <CarouselSize data={data} />
  </div>

</section>
              </main>
             )       


}

export default page