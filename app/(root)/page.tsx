
import CarouselSize from "@/components/slides"
import model2 from '@/assets/ayush.jpeg'
import model3 from '@/assets/model6.png'
import model4 from '@/assets/model4.png'
import girl from '@/assets/boyband.jpeg'
import Hero from "@/components/Hero"

const data = [
  { 
    image: model2,
    text: "Elegant casual wear model featuring a modern fit and comfortable fabric, perfect for everyday style."
  },
  { 
    image: model3,
    text: "Trendy outfit with a sleek design, ideal for both casual outings and semi-formal occasions."
  },
  { 
    image: model4,
    text: "Premium fashion piece with a bold look, crafted for style and confidence."
  }
];

const page = () => {


             return(
              <main className="p-0 m-0 h-[200vh] w-full">
            <section
  style={{ backgroundImage: `url(${girl.src})` }}
  className=" h-[480px] w-full bg-gray-800 bg-blend-hard-light aspect-[14/9] bg-cover bg-no-repeat bg-position-[80%_100%]"
/> 
 <section className="w-full h-auto sticky top-0 border border-black z-50  bg-gradient-to-b from-white via-gray-50 to-white">

  {/* Sticky Header */}
  <div
     
    className="
    
    bg-white/40 backdrop-blur-md
    border-b border-gray-200/40
    flex flex-col items-center py-5
    shadow-sm"
  >

    {/* Title */}
    <h1 className="text-gray-900 font-semibold text-sm md:text-xl tracking-widest uppercase">
      Authentic Assamese Collection
    </h1>

    {/* Category Navigation */}
      <Hero/>
  </div>

  

  {/* Carousel Section */}
  

</section>
 <div>
     <CarouselSize data = {data}/>
   </div>
   
              </main>
             )       


}

export default page