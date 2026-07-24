
import dynamic from "next/dynamic";
import Page from '@/components/footersection'
import Image from "next/image";
import {bebas,caveat} from "@/lib/font"


const Section3 = dynamic(() => import("./section3"), {
  loading: () => (
    <div className="h-100vh flex items-center justify-center">
          <div className="h-10 w-10 rounded-full border-5 border-gray-300 border-b-black  animate-spin "></div>
    </div>
  ),
});


const Animatedsection = () => {

  
return(
    <div className={`flex flex-col gap-3 bg-gradient-to-bl from-2% from-amber-100 to-white`}>    
      
          
             
          
          <Section3/>

     <section
  className={` bg-black
  backdrop-blur-lg text-white px-4 py-15`}
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
      <div className="absolute inset-0 bg-gradient-to-t from-black via-white/10 to-transparent"></div>
    </div>

    {/* ✍️ Story */}
    <div className="w-[40vw]">
      <p className="text-xl tracking-[0.3em] text-white mb-4">
        OUR STORY
      </p>

      <h2 className="text-3xl tracking-wider text-white md:text-5xl font-semibold leading-tight mb-6">
        Built from the Streets.
        <br />
        Designed for the Culture.
      </h2>
    </div>

  </div>

  <p className="text-white  text-[15px] tracking-wide leading-4  mt-5 mb-6">
    What started as a small idea between creators turned into a movement.
    We weren’t trying to follow trends — we were creating pieces that
    reflected identity, attitude, and individuality.
  </p>

  <p className="text-white text-[15px] tracking-wide leading-4 mb-6">
    Every drop is intentional. Every design tells a story. From oversized
    silhouettes to minimal palettes, we craft clothing that blends
    comfort with statement.
  </p>

  <p className="text-white text-[30px] tracking-widest leading-relaxed mb-8">
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