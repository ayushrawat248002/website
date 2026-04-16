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
    <>
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
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent className="-ml-4">

          {data?.map((item, index) => {

            const isActive = index === activeIndex

            return (
              <CarouselItem
                key={index}
                className={`basis-[90%] sm:basis-full lg:basis-[40%] pl-4`}
              >
                <Card
                  className={`h-[450px] border-transparent relative w-full rounded-2xl transition-all duration-500 overflow-hidden 
                  lg:border-t-[30px] z-10 lg:opacity-100`}
                >

                  <CardContent className="relative flex border-transparent justify-center top-0 h-full w-full p-0">

                    <Image
                      src={item.image}
                      alt={`image${index}`}
                      width={350}
                      height={150}
                      className={`${isActive ? "scale-95" : "scale-95"} delay-200 duration-400 border-none p-6`}
                    />

                  </CardContent>
              
                </Card>
              </CarouselItem>
            )
          })}

        </CarouselContent>
      </Carousel>

      {/* ✅ Dynamic Text Based on Active Slide */}
                <div className="w-full   text-center mt-0">
        <p className="text-black text-lg font-semibold transition-all duration-300">
          {data2?.[activeIndex]?.text}
        </p>
      </div>
     
    </>
  )
}

export default CarouselSize