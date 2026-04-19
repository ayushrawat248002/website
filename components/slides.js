'use client'

import Image from "next/image"
import { useState, useEffect } from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

function CarouselSize({ data }) {

  const [api, setApi] = useState()
  const [activeIndex, setActiveIndex] = useState(0)
 const data2 = [
  { image: "/img1.jpg", text: "First Slide Text" },
  { image: "/img2.jpg", text: "Second Slide Text" },
  { image: "/img3.jpg", text: "Third Slide Text" },
]
  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap())
    }

    api.on("select", onSelect)

    return () => api.off("select", onSelect)
  }, [api])

  return (
    <div className="bg-linear-to-t from-white via-amber-50 to-orange-200 ">
       <Carousel
  setApi={setApi}
  opts={{ align: "center", loop: true }}
  plugins={[
    Autoplay({
      delay: 3500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  ]}
  className="w-full  max-w-5xl mx-auto"
>
  <CarouselContent className="-ml-4 w-auto">

    {data?.map((item, index) => {

      const isActive = index === activeIndex

      return (
        <CarouselItem
          key={index}
          className="basis-[105%] sm:basis-full lg:basis-[40%]  ml-2"
        >
           
         <Card
  className={`
    h-[480px] relative w-full overflow-hidden rounded-2xl
    transition-all duration-500 group
    ${isActive ? "scale-100" : "scale-94 opacity-70"}
    shadow-[0_30px_80px_rgba(0,0,0,0.6)]
  `}
>
    
  <CardContent className="relative h-full  w-full p-0">

    {/* Image */}
    <Image
      src={item.image}
      alt={`image${index}`}
      fill
      className={`
        object-contain object-[130%_0%] backdrop-blur-lg transition-all duration-700
        ${isActive ? "scale-90" : "scale-75"}
        group-hover:scale-110
      `}
    />

    {/* LEFT gradient only (for readability, not full black) */}
  

    {/* Side Text Content */}
    <div className="absolute left-0 top-0 h-full flex flex-col justify-center px-8 z-10 max-w-[60%]">

      <p className="text-black  relative text-2xl font-semibold leading-6 tracking-tighter">
    
        {item.text}
      </p>

      <p className="text-gray-800 text-sm mt-3 tracking-widest uppercase">
        Premium Collection
      </p>

    </div>

  </CardContent>
</Card>
        </CarouselItem>
      )
    })}

  </CarouselContent>
</Carousel>

      {/* ✅ Dynamic Text Based on Active Slide */}
            
     
    </div>
  )
}

export default CarouselSize