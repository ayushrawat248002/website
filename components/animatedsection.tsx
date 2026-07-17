
import dynamic from "next/dynamic";
import Page from '@/components/footersection'
import Image from "next/image";
import {bebas,caveat} from "@/lib/font"


const Section3 = dynamic(() => import("./section3"));


const Animatedsection = () => {

  
return(
    <div className={`${caveat.className}`}>    
      
          
             
          <Section3/>
            

     <section
  className={` bg-gray-50 ${bebas.className}
  backdrop-blur-lg text-white px-2 py-10`}
>
  <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-2 gap-16 items-start">

    {/* 🖼 Image */}
    <div className="relative group w-[50vw] rounded-2xl">
      <Image
        alt="black guy"
        priority
        width={900}
        height={600}
        src="https://res.cloudinary.com/dfehgukz3/image/upload/v1784255295/_BBB9571_caisye.jpg"
        className="h-[350px] w-[300px]  object-cover object-bottom group-hover:scale-105 transition duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
    </div>

    {/* ✍️ Story */}
    <div className="w-[40vw]">
      <p className="text-xl tracking-[0.3em] text-black mb-4">
        OUR STORY
      </p>

      <h2 className="text-4xl tracking-wider text-black md:text-5xl font-semibold leading-tight mb-6">
        Built from the Streets.
        <br />
        Designed for the Culture.
      </h2>
    </div>

  </div>

  <p className="text-gray-400  text-[15px] leading-4  mt-5 mb-6">
    What started as a small idea between creators turned into a movement.
    We weren’t trying to follow trends — we were creating pieces that
    reflected identity, attitude, and individuality.
  </p>

  <p className="text-gray-400 text-[15px] leading-4 mb-6">
    Every drop is intentional. Every design tells a story. From oversized
    silhouettes to minimal palettes, we craft clothing that blends
    comfort with statement.
  </p>

  <p className="text-gray-500 text-[30px] tracking-widest leading-relaxed mb-8">
    This isn’t just fashion. It’s expression. It’s culture.
  </p>

  <button className="px-3 py-3 border text-white bg-black rounded-4xl border-white/40 hover:border-white text-sm tracking-wide transition">
    Explore Collection
  </button>
</section>
   <>
    <Page/>
   </>
    
  


    </div>
   
)
}
export default Animatedsection;