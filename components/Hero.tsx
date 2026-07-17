'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Shirt, Sparkle, Gem } from "lucide-react";


const items = [
  {
    id: 0,
    label: "MEN",
    href: "/mensection",
    icon: Shirt,
    color: "text-gray-500",
  },
  {
    id: 1,
    label: "WOMEN",
    href: "/womensection",
    icon: Sparkle,
    color: "text-yellow-500",
  },
  {
    id: 2,
    label: "ACCESSORIES",
    href: "/accessories",
    icon: Gem,
    color: "text-red-500",
  },
];

export default function Hero() {
  const router = useRouter();
  const [index, setIndex] = useState(9);

  return (
    <div className="w-full md:flex md:justify-center  ">
      <div className="flex justify-evenly gap-11   items-center w-full md:gap-[200px] md:justify-center">
        {items.map((item) => {
          const Icon = item.icon;
          const active = index === item.id;

          return (
            <button
              key={item.id}
              onClick={() => {
                setIndex(item.id);
                router.push(item.href);
              }}
              className="flex flex-col items-center gap-2 group cursor-pointer"
            >
            <Icon
  size={26}
  strokeWidth={2.5}
  className={`transition-colors duration-300 ${
    active
      ? "text-black"
      : `${item.color} group-hover:text-black`
  }`}
/>

              <span
                className={`relative mt-5 text-xs md:text-3xl font-mono tracking-[0.2em] transition-colors duration-300 whitespace-nowrap ${
                  active
                    ? "text-black"
                    : "text-gray-500 group-hover:text-black"
                }`}
              >
                {item.label}

                <span
                  className={`absolute left-1/2 -bottom-2 h-[2px] bg-black rounded-full transition-all duration-300 ${
                    active
                      ? "w-6 -translate-x-1/2 opacity-100"
                      : "w-0 -translate-x-1/2 opacity-0"
                  }`}
                />
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}