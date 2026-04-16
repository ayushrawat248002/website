'use client'
import CarouselSize from "@/components/slides"
import model1 from '@/assets/model.png'
import model2 from '@/assets/model5.png'
import model3 from '@/assets/model6.png'
import model4 from '@/assets/model4.png'
import badge from '@/assets/badge.png';
import badge1 from '@/assets/badge1.png';
import jwellery from '@/assets/jwellery.png'

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
const data = [

  {image : model2},
  {image : model3},
  {image : model4}
]
const page = () => {
   const router = useRouter()
   const[index, setindex] = useState<undefined|number>(0)

             return(
              <main className="p-0 m-0 bg-white  h-[200vh] w-full">
                  <section className="h-[200vh]  m-0 p-0 border border-white bg-white w-full">

                    <div className="sticky top-0 z-30 bg-white  flex flex-col py-3 items-center">
                          <h1 className="text-black   font-mono  ">Authentic Assamese Collection</h1>     
                          <div className="w-full sticky gap-2   top-5 z-20 flex shrink justify-center items-center  lg:gap-10 mt-6 px-4">
                             <div>
                                <Image  onClick={() => {setindex(0); router.push('/mensection')}} alt="men" src={badge} />
                                <button onClick={() => setindex(0)} className = {`text-black  font-bold  px-6  rounded-full  ${index === 0 ? 'underline underline-offset-8' : ''} hover:text-white tracking-wide transition`}>
                                MEN
                            </button>
                             </div>
                           
                           <div>
                               <Image  onClick={() => { setindex(1);router.push('/womensection') }} alt="men" src={badge1} />
                             <button onClick={() => setindex(1)} className={`text-black font-bold  ml-2 mr-1 px-2 rounded-full  ${index === 1 ? 'underline underline-offset-8' : ''} hover:text-white transition`}>
                               WOMAN
                            </button>
                           </div>
                           
                        <div className=" mt-[8px]  ">
                          <Image alt='jwellery' className="h-[73px] w-[73px] mb-4  ml-4 mt-2" src={jwellery}/>
                          <button onClick={() => setindex(2)} className = {`text-black mt-[1px] font-bold  px-2 rounded-full  hover:text-white  ${index === 2 ? 'underline underline-offset-8' : ''} transition tracking-tighter`}>
                             ACCESSSORIES
                          </button>
                        </div>
                          

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