'use client'
import ProductPage from "@/components/Productpage";
import { useEffect } from "react";
import { useState } from "react";
import { IoMdFemale } from "react-icons/io";
const page = () => {
   const [toogle, setToogle] = useState(false)

   const pauseMechanism = async() => {
      await new Promise<void>((res)=>setTimeout(()=> {res()},2500));
      setToogle(true);
   }
         useEffect(()=>{
               pauseMechanism()
         },[])

         useEffect(()=>{
              console.log(toogle)
         },[toogle])

         return(
                    <section className="h-auto  relative w-[100vw] bg-white">
                         {!toogle && <div className="h-screen flex items-center justify-center"><div className="absolute   animate-bounce top-48 left-36"><IoMdFemale size ={100}  fill="pink"/></div></div>}
                         {toogle && <ProductPage/> }
                    </section>
               
                   
            
         )
}
export default page;