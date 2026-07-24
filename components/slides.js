'use client'

import Image from "next/image";
import { useEffect, useState } from "react";


 function CarouselSize({ data }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!data?.length) return;

    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % data.length);
    }, 5500);

    return () => clearInterval(id);
  }, [data]);

  return (
    <div className="relative w-full rounded-2xl   h-[480px]  overflow-hidden">
      {data.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            active === index
              ? "opacity-95 z-10"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={item.image}
            alt={item.text}
            fill
            priority={index === 0}
            sizes="(max-width:768px)100vw"
            className={` ${
              index === 0
                ? "object-cover object-top"
                : "object-cover object-center"
            } `}
          />

          {index !== 0 && (
            <div className="absolute inset-0 flex items-end px-8">
              <p className="text-2xl block backdrop-blur-[2px]  font-bebas tracking-widest mb-10 text-white shadow-2xl text-shadow-black">
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
                  : "bg-white scale-x-150"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default CarouselSize