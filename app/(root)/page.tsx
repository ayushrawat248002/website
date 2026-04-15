'use client'
import CarouselSize from "@/components/slides"
import model1 from '@/assets/model.png'
import model2 from '@/assets/model2.png'
import model3 from '@/assets/model3.png'
import model4 from '@/assets/model4.png'

const data = [
  {image : model1},
  {image : model2},
  {image : model3},
  {image : model4}
]
const page = () => {

             return(
              <main className="p-0 m-0 bg-white h-[200vh] w-full">
                  <section className="h-[200vh]  m-0 p-0 border border-transparent  bg-white w-full">

                    <div className="sticky top-0 z-30 bg-white  flex flex-col items-center">
                          <h1 className="text-black font-bold ">Authentic Assamese Collection</h1>     
                          <div className="w-full sticky gap-2  top-5 z-20 flex shrink justify-center items-center  lg:gap-10 mt-6 px-4">
                          
                             <button className="text-black font-bold h-[50px] px-6  rounded-full border-2 border-black hover:bg-black hover:text-white transition">
                                Men
                            </button>

                           <button className="text-black font-bold h-[50px] ml-2 mr-1 px-2 rounded-full border-2 border-black hover:bg-black hover:text-white transition">
                             Women
                           </button>

                          <button className="text-black font-bold h-[50px] px-6 rounded-full border-2 border-black hover:bg-black hover:text-white transition">
                             Accessories
                          </button>

                        </div>
                    </div>

                    <div >
                        
                      <CarouselSize  data={data}/>

                    </div>
                    
                  </section>
              </main>
             )       


}

export default page