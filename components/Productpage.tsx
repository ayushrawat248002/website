'use client'
export const dynamic = "force-dynamic";
import { data } from '@/lib/data.js'
import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useCartStore } from '@/components/Cartstore'



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

const Productcard = React.memo(({ doc, addItem }: ProductCardProps) => {
  return (
    <div className="min-w-[250px] h-[400px] overflow-hidden relative p-4 bg-gray-200 rounded-xl shadow border select-none transform duration-100 ease-linear hover:bg-gray-300">
      <p className="text-sm font-medium text-black">{doc.name}</p>
      <p className="text-gray-500 text-sm">₹{doc.price}</p>

      <div
        onClick={() => addItem(doc)}
        className="bg-gray-500 hover:bg-black text-center text-white w-[200px] rounded-3xl h-11 absolute bottom-2"
      >
        Add to Bag
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
  className={`p-10 h-full w-full  overflow-y-auto overflow-x-hidden flex flex-col gap-12 bg-white`}
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
                 <Productcard  key={doc.id} doc={doc} addItem={addItem} />
                ))}
            </div>

          </section>
        )
      })}

    </section>
  )
}

export default ProductPage


