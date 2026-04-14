"use client";

import { useCartStore } from "@/components/Cartstore";

export default function ThemeHeader() {
  
const theme = useCartStore((state) => state.obj.theme);
const setTheme = useCartStore((state) => state.setTheme);
  const handleClick = () => {
    setTheme(theme === "black" ? "white" : "black");
  };

  return (
    <section className={`sticky top-0`}>
    <button
  aria-label="Toggle theme"
  title="Toggle theme"
  className={`${theme === 'white' ? 'bg-black text-white' : 'bg-amber-100 text-black'} font-bold px-4 py-2 rounded-xl hover:scale-105 transition`}
  onClick={handleClick}
>
  
        {theme === "white" ? "dark" : "light"}
      </button>
    </section>
  );
}