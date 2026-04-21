'use client'
export const dynamic = "force-dynamic";
import { data } from '@/lib/data.js'
import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useCartStore } from '@/components/Cartstore'
import { Heart } from "lucide-react";


type Product = {
  id: string
  name: string
  category: string
  price: number
}

type ProductCardProps = {
  doc: Product;
  addItem: (p: Product) => void;
};
export const ProductCard = React.memo(({ doc, addItem, addWishlist }: any) => {
  return (
    <div className="group min-w-[260px] h-[350px] rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300">

      {/* 🖼️ Image Section */}
      <div className="relative h-[280px] w-full overflow-hidden bg-gray-100">

        <img
          src={doc.image}
          alt={doc.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* 🌑 Gradient Overlay (premium feel) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

        {/* ❤️ Wishlist */}
        <button
          onClick={() => addWishlist(doc)}
          className="absolute top-3 right-3 bg-white/70 backdrop-blur-md p-2 rounded-full shadow-md hover:scale-110 transition"
        >
          <Heart size={18} className="text-red-500" />
        </button>

        {/* 🛒 Floating CTA (appears on hover) */}
        <button
  onClick={() => addItem(doc)}
  className="
    absolute bottom-4 left-1/2 -translate-x-1/2 
    bg-black text-white text-sm px-5 py-2 rounded-full

    /* 📱 Mobile: always visible */
    opacity-100 translate-y-0

    /* 💻 Desktop: hover behavior */
    md:opacity-0 md:translate-y-4 
    md:group-hover:opacity-100 md:group-hover:translate-y-0

    transition-all duration-300
  "
>
  Add to Bag
</button>
      </div>

      {/* 📄 Info */}
      <div className="p-4 space-y-1">
        <p className="text-sm font-medium text-gray-900 truncate">
          {doc.name}
        </p>

        <div className="flex items-center justify-between">
          <p className="text-base font-semibold text-black">
            ₹{doc.price}
          </p>

          {/* subtle tag */}
          <span className="text-xs text-gray-400">In stock</span>
        </div>
      </div>
    </div>
  );
});

const ProductPage = () => {
  const addItem = useCartStore((state) => state.addItem);
useEffect(() => {
  window.scrollTo(0, 0)
}, []);


const theme = useCartStore((state)=>state.obj.theme)

  // 👇 Ref type: array of divs (or null initially)
  const scrollRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleMouseDown = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    const slider = scrollRefs.current[index]
    if (!slider) return

    ;(slider as any).isDown = true
    ;(slider as any).startX = e.pageX - slider.offsetLeft
    console.log(slider.offsetLeft)
    console.log((slider as any).startX)
    ;(slider as any).scrollLeftStart = slider.scrollLeft
  }

  const handleMouseLeave = (index: number) => {
    const slider = scrollRefs.current[index]
    if (!slider) return
    ;(slider as any).isDown = false
  }

  const handleMouseUp = (index: number) => {
    const slider = scrollRefs.current[index]
    if (!slider) return
    ;(slider as any).isDown = false
  }

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    const slider = scrollRefs.current[index]
    if (!slider || !(slider as any).isDown) return

    e.preventDefault()

    const x = e.pageX - slider.offsetLeft
    const walk = (x - (slider as any).startX) * 1.5
    slider.scrollLeft = (slider as any).scrollLeftStart - walk
  }

 

  const categories = [...new Set(data.map((item: Product) => item.category))]

  return (
    <section
  className={`pl-2 pr-8 h-full w-full   overflow-x-hidden flex flex-col gap-12 bg-white`}
>

      {categories.map((category, index) => {

        const filtered = data.filter(
          (item: Product) => item.category === category
        )

        return (
          <section key={category}>
            
            <h2 className="text-3xl font-bold mb-4 text-black">
              {category}
            </h2>

            <div
              ref={(el) => {
                scrollRefs.current[index] = el;
              }}
              onMouseDown={(e) => handleMouseDown(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onMouseUp={() => handleMouseUp(index)}
              onMouseMove={(e) => handleMouseMove(e, index)}
              className="flex gap-4 w-[100vw] overflow-x-scroll scrollbar-hide  cursor-grab active:cursor-grabbing"
            >
             {filtered.map((doc: Product) => (
                 <ProductCard  key={doc.id} doc={doc} addItem={addItem} />
                ))}
            </div>

          </section>
        )
      })}

    </section>
  )
}

export default ProductPage


