
import CarouselSize from "@/components/slides"
import Hero from "@/components/Hero"
import Animatedsection from "@/components/animatedsection";
    import Image from "next/image";
;



  // 🔥 Animation mappings

const data = [
  { 
    image: "https://res.cloudinary.com/dfehgukz3/image/upload/w_600,q_auto,f_auto/v1776795696/ayush2_sm04lo.png",
    text: "Elegant casual wear model featuring a modern fit and comfortable fabric, perfect for everyday style."
  },
  { 
    image: "https://res.cloudinary.com/dfehgukz3/image/upload/w_600,q_auto,f_auto/v1776796428/model4_fpvmwt.png",
    text: "Trendy outfit with a sleek design, ideal for both casual outings and semi-formal occasions."
  },
  { 
    image: "https://res.cloudinary.com/dfehgukz3/image/upload/w_600,q_auto,f_auto/v1776796431/model7_cnaslx.png",
    text: "Premium fashion piece with a bold look, crafted for style and confidence."
  }
];

const Page = () => {
  
 
  return (
    <main className="p-0 m-0 h-[200vh] w-full">

      {/* ================= MOBILE (UNCHANGED) ================= */}
      <div className="block md:hidden">

        {/* HERO IMAGE SECTION */}
   <section className="relative h-[580px] w-full overflow-hidden">
  <Image
    src="https://res.cloudinary.com/dfehgukz3/image/upload/w_700,q_auto,f_auto/v1776795695/boyband2_kgfuol.png"
    alt="hero"
    fill
    priority
    fetchPriority="high"
    className="object-cover object-[30%_120%]"
  />
</section>

        {/* STICKY SECTION */}
        <section className="w-full h-auto sticky shadow-xl  -top-30 z-50 bg-gradient-to-b from-white via-gray-50 to-white pb-2">

          <div className="bg-white/40 backdrop-blur-md  border-b-0 flex flex-col items-center py-3  ">
           
            <h1 className="text-gray-900  text-[16px]   text-sm tracking-widest uppercase text-center">
              Authentic Assamese Collection
            </h1>

            <div className="mt-3 w-full   flex justify-center">
              <Hero />
            </div>

          </div>

        </section>

        {/* CAROUSEL */}
        <div className="h-auto  scale-100  mt-1 ">
          <CarouselSize data={data} />
        </div>
            <>
             <Animatedsection/>
            </>
           

        

      </div>

      {/* ================= DESKTOP / MD+ (NEW LAYOUT) ================= */}
      <div className="hidden md:block">

        <div className="grid grid-cols-12 gap-6 lg:gap-10 px-10 lg:px-20 py-10">

          {/* LEFT HERO IMAGE */}
          <div className="col-span-7 relative">

        

<section className="relative h-[480px] w-full overflow-hidden">
  <Image
    src="https://res.cloudinary.com/dfehgukz3/image/upload/w_600,q_auto,f_auto/v1776795695/boyband2_kgfuol.png"
    alt="hero"
    fill
    priority
    fetchPriority="high"
    className="object-cover object-[80%_100%]"
  />
</section>
            {/* OVERLAY TEXT */}
            <div className="absolute bottom-6 left-6 bg-white/70 backdrop-blur-md px-5 py-3 rounded-xl">
              <h1 className="text-xl lg:text-2xl font-semibold tracking-widest uppercase text-gray-900">
                Authentic Assamese Collection
              </h1>
              <p className="text-xs text-gray-600 mt-1">
                Explore premium handcrafted fashion
              </p>
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="col-span-5 flex flex-col justify-start">

            {/* HERO NAV */}
            <div className="bg-white/60 backdrop-blur-md rounded-xl shadow-md p-4 lg:p-6">
              <Hero />
            </div>

            {/* CAROUSEL */}
            <div className="mt-6 lg:mt-10">
              <CarouselSize data={data} />
            </div>

          </div>

        </div>

      </div>

    </main>
  )
}

export default Page