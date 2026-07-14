'use client'

import Image from "next/image";
import { useEffect, useState } from "react";


 function CarouselSize({ data }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!data?.length) return;

    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % data.length);
    }, 3500);

    return () => clearInterval(id);
  }, [data]);

  return (
    <div className="relative max-w-5xl mx-auto h-[480px] overflow-hidden rounded-xl">
      {data.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            active === index
              ? "opacity-100 z-10"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={item.image}
            alt={item.text}
            fill
            priority={index === 0}
            sizes="(max-width:768px)100vw,1280px"
            className={`${
              index === 0
                ? "object-cover object-top"
                : "object-contain object-[167%_0%]"
            }`}
          />

          {index !== 0 && (
            <div className="absolute inset-0 flex items-center px-8">
              <p className="text-2xl font-bebas tracking-widest text-black">
                {item.text}
              </p>
            </div>
          )}
        </div>
      ))}

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              active === index
                ? index === 0
                  ? "bg-white scale-x-150"
                  : "bg-black scale-x-150"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default CarouselSize