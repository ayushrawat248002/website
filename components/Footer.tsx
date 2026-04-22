'use client'
import { TiThMenuOutline } from "react-icons/ti";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { CgProfile } from "react-icons/cg";

const Footer = () => {
  const router = useRouter()
  
return(
    <>
<footer className="sticky -bottom-5 pb-2 z-90 px-10 w-full  bg-white  shadow-[0_-2px_10px_rgba(0,0,0,0.8)]">
  <section className="flex  justify-between items-center py-3 ">

    {/* Menu */}
    <div className="flex flex-col s  items-center justify-center  cursor-pointer group">
      <TiThMenuOutline size={22} className="text-black group-hover:scale-110 transition" />
      
    </div>

     <div className="flex flex-col  items-center justify-center cursor-pointer group">
      <FaHeart size={22} className="text-red-500 group-hover:scale-110 transition" />
    
    </div>

    {/* Cart */}
    <div
      onClick={() => router.push('/cart')}
      className="flex  flex-col items-center justify-center cursor-pointer group"
    >
      <CgProfile size={25} className="text-orange-400 group-hover:scale-110 transition" />

    </div>

    {/* Wishlist */}
   

  </section>

  {/* Bottom Indicator */}
  <div className="flex justify-center pb-2">
    <span className="w-24 h-1 bg-black/70 rounded-full"></span>
  </div>
</footer>
</>
)
}

export default Footer;