'use client'
import { FaSearch } from "react-icons/fa";
const Input = () => {
   return (
    <div className="relative lg:left-10 left-3"> 
                <div className=" absolute -z-30 inset-0 bg-yellow-50"></div>
                <div className="flex  gap-1.5">
                    <FaSearch  size={17} color="black"/> 
                    <input  type="text" placeholder="search product" className="text-black pl-3.5 text-left border border-black rounded-2xl" ></input>
                </div>
                
    </div>
   )
}

export default Input