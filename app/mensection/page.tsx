'use client'
import ProductPage from "@/components/Productpage";
import { useEffect } from "react";
import { useState } from "react";
import { IoMdFemale } from "react-icons/io";
const page = () => {
   const [toogle, setToogle] = useState(false)

   const pauseMechanism = async() => {
      await new Promise<void>((res)=>setTimeout(()=> {res()},3500));
      setToogle(true);
   }
         useEffect(()=>{
               pauseMechanism()
         },[])

         useEffect(()=>{
              console.log(toogle)
         },[toogle])

         return(
                    <section className="h-[100vh] z-50  relative w-[100vw] bg-white">
                         {!toogle && <div className="absolute animate-bounce top-48 left-36"><IoMdFemale size ={100}  fill="blue"/></div>}
                         {toogle && <ProductPage/> }
                    </section>
               
                   
            
         )
}
export default page;