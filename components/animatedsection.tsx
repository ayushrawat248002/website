
import dynamic from "next/dynamic";
import Page from '@/components/footersection'
import Image from "next/image";
import {bebas,caveat} from "@/lib/font"
import Section1 from "./section1";
const Section2 = dynamic(() => import("./section2"));
const Section3 = dynamic(() => import("./section3"));


const Animatedsection = () => {

  
return(
    <div className={`${caveat.className} h-full`}>    
      
          <Section1/>

          <Section2/>
             
          <Section3/>
            

      <section  
             className={ `bg-blend-color-burn bg-white ${bebas.className}
  backdrop-blur-lg   text-white px-6 py-24 `}>
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* 🖼 Image */}
    <div className="relative group overflow-hidden rounded-2xl">
      <Image
          
          alt = 'black guy'
    priority
         width={800}
  height={600}
        src="https://res.cloudinary.com/dfehgukz3/image/upload/f_auto,q_auto,w_auto/v1777183462/photo-1523398002811-999ca8dec234_qisb0t.jpg"
        className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
    </div>

    {/* ✍️ Story */}
    <div>
      <p className="text-xl tracking-[0.3em] text-black mb-4">
        OUR STORY
      </p>

      <h2 className="text-4xl  tracking-wider text-black md:text-5xl font-semibold leading-tight mb-6">
        Built from the Streets.
        <br />
        Designed for the Culture.
      </h2>

      <p className="text-gray-400 text-[20px] leading-relaxed mb-6">
        What started as a small idea between creators turned into a movement.
        We weren’t trying to follow trends — we were creating pieces that
        reflected identity, attitude, and individuality.
      </p>

      <p className="text-gray-400 text-[20px] leading-relaxed mb-6">
        Every drop is intentional. Every design tells a story. From oversized
        silhouettes to minimal palettes, we craft clothing that blends
        comfort with statement.
      </p>

      <p className="text-gray-500 text-[30px] leading-relaxed mb-8">
        This isn’t just fashion. It’s expression. It’s culture.
      </p>

      <button className="px-6 py-3 border text-white bg-black rounded-4xl border-white/40 hover:border-white text-sm tracking-wide transition">
        Explore Collection
      </button>
    </div>

  </div>
</section>

   <>
    <Page/>
   </>
    
  


    </div>
   
)
}
export default Animatedsection;