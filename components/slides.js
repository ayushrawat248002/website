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


 function CarouselSize({data,name}) {

  const [api, setApi] = useState()
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap())
    }

    api.on("select", onSelect)

    return () => api.off("select", onSelect)
  }, [api])

  return (
    <Carousel
      setApi={setApi}
      opts={{ align: "center", loop: true }}
      plugins={[
        Autoplay({
          delay: 3500,
          stopOnInteraction: false,
          stopOnMouseEnter:true,
        }),
      ]}
      className="w-full  max-w-5xl mx-auto"
    >
      <CarouselContent className="-ml-4">

        {data?.map((item, index) => {

          const isActive = index === activeIndex
//basis100
          return (
            <CarouselItem
              key={index}
              className={`basis-[100%]  sm:basis-full lg:basis-[40%] pl-4`}
            >
              
              <Card
                className={` ${ name ==='img2' ? "h-[400px]" : "h-[400px]"} border-transparent   relative w-full  rounded-2xl transition-all duration-500 overflow-hidden 
                  lg:border-t-[30px] z-20
                 lg:opacity-100 `}
              >
                
                <CardContent className="relative flex border-transparent justify-center top-0 h-full w-full p-0 ">

                 <Image
  src={item.image}
  alt={`image${index}`}
  {...(name === "img2"
    ? { width: 290, height: 300 }
    : { fill: true })}
  className={`${
    isActive ? "scale-115" : "scale-95"
  } delay-200 duration-400 
  } border-none  p-6 `}
/>

                                
                </CardContent>
                   

              </Card>
              

            </CarouselItem>
          )
        })}

      </CarouselContent>
    </Carousel>
  )
}
export default CarouselSize