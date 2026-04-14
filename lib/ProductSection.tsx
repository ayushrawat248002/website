import { motion } from "framer-motion";
import { useCartStore } from "@/components/Cartstore";

export default function ProductSection() {
  const theme = useCartStore((state) => state.obj.theme);

  return (
    <section
      className={`relative  px-8  ${
        theme === "black" ? "bg-black" : "bg-[#F8F6F2]"
      } text-neutral-900`}
    >
      {/* 🔹 Background texture */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className=" relative min-h-full flex flex-col items-center min-w-full  mx-auto">

        {/* ✨ Header (Sticky like Hero) */}
        <section className="sticky top-30 h-[700px] scale-100    flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h2 className="text-[3.5rem] md:text-[4rem] font-light tracking-tight mb-6 leading-none">
              The Essence of Modern Luxury
            </h2>

            <p className="text-neutral-600 max-w-xl mx-auto text-lg leading-relaxed">
              Crafted with integrity, designed to endure. Explore our collections of timeless essentials made for those who appreciate quality and quiet confidence.
            </p>
          </motion.div>
        </section>

        {/* 🖤 Cards Sticky Scroll Section */}
      <section className="relative z-20 w-[100vw] overflow-y-clip p-0 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 lg:top-[100px]">
  <div className="flex items-center justify-center w-full py-20 bg-gradient-to-r from-amber-100 via-yellow-50 to-orange-100 border-b-4 border-amber-200">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      className="grid md:grid-cols-3 gap-8 w-full max-w-7xl px-8"
    >
      {[
        {
          title: "Authentic Assamese Heritage Collection",
          subtitle: "Preserving 500+ Years of Tradition",
          desc: "Discover our curated collection of genuine Assamese silk masterpieces, handwoven by master artisans from Sualkuchi. Each piece carries GI-tagged certification, ensuring authenticity and cultural provenance. From heirloom-quality Muga silk to intricate Pat designs, experience Assam's living textile legacy.",
          priceRange: "₹18,500 - ₹2,45,000",
          badge: "Limited Edition",
          cta: "Shop Heritage Collection",
          img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          features: ["GI Certified", "Handwoven", "Sustainable"],
          collectionSize: "47 Exclusive Pieces"
        },
        {
          title: "Mekhla Chador Couture Collection",
          subtitle: "Luxury Redefined in Silk",
          desc: "Elevate your wardrobe with our signature Mekhla Chador collection featuring premium Muga, Pat, and Eri silks. Each ensemble is crafted over 15-20 days by 3rd generation weavers, adorned with temple motifs, floral jaal, and geometric patterns inspired by Ahom architecture. Perfect for weddings, festivals, and cultural celebrations.",
          priceRange: "₹22,000 - ₹3,85,000",
          badge: "Bestseller",
          cta: "Explore Couture",
          img: "https://images.unsplash.com/photo-1610030469668-6ec1f6f3f9cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          features: ["Bridal Ready", "Custom Sizing", "Lifetime Care"],
          collectionSize: "89 Premium Designs"
        },
        {
          title: "Artisan Collaborative Series",
          subtitle: "Limited Edition Masterpieces",
          desc: "Our exclusive collaboration with 200+ Sualkuchi master weavers brings you numbered, limited-edition pieces. Each textile tells a unique story through rare techniques like dobby weaving, supplementary weft, and gold zari work. Collectible art that transcends fashion.",
          priceRange: "₹35,000 - ₹7,50,000",
          badge: "Only 127 Left",
          cta: "View Limited Series",
          img: "https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          features: ["Numbered Edition", "Art Certificate", "Investment Grade"],
          collectionSize: "127 Numbered Pieces"
        }
      ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              boxShadow: "0 35px 60px -20px rgba(245, 158, 11, 0.6)"
            }}
            className="group relative rounded-3xl overflow-hidden shadow-2xl bg-white/80 backdrop-blur-sm border border-amber-100 hover:border-amber-200 hover:bg-white/100 transition-all duration-500 cursor-pointer"
          >
          {/* Premium Badge */}
          <div className="absolute h-[400px] top-4 left-4 z-20">
              <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                {item.badge}
              </span>
            </div>

          {/* Background Image */}
            <div
            className="h-[380px] lg:h-[420px] bg-gradient-to-t from-black/20 via-transparent to-transparent bg-cover bg-center relative overflow-hidden"
              style={{ backgroundImage: `url(${item.img})` }}
            >
            {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            {/* Collection Stats */}
            <div className="absolute top-16 left-4 text-white/90 text-sm font-medium space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-400 rounded-full" />
                  <span>{item.collectionSize}</span>
                </div>
              </div>
            </div>

            {/* Content */}
          <div className="relative p-8 pb-10">
            {/* Category Tag */}
              <p className="text-xs uppercase tracking-widest text-amber-600 font-bold mb-2">
                Authentic Assam Silk
              </p>

            {/* Title & Subtitle */}
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-amber-700 transition-colors">
                {item.title}
              </h3>
            <p className="text-sm font-medium text-gray-600 mb-1">{item.subtitle}</p>

            {/* Description */}
            <p className="text-gray-700 text-sm leading-relaxed mb-6 line-clamp-3">
                {item.desc}
              </p>

            {/* Price & Features */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-amber-700 tracking-tight">
                  {item.priceRange}
                </span>
              </div>
                <div className="flex flex-wrap gap-2">
                  {item.features.map((feature, i) => (
                    <span
                      key={i}
                    className="px-2 py-1 bg-amber-50 text-amber-800 text-xs rounded-lg font-medium border border-amber-200"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="absolute bottom-4 left-8 right-8"
            >
              <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-sm uppercase tracking-wide">
                  {item.cta} →
                </button>
            </motion.div>
            </div>

          {/* Hover Effect Ring */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10 animate-pulse" />
          </motion.div>

        ))}
    </motion.div>

  </div>
    </section>
 

      {/* 🪞 Lifestyle Sticky Section */}
        <section className=" flex flex-col   h-screen  items-center w-screen p-10 sticky top-40 bg-red-400 z-40  ">
          <div className=" grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-8">
              <span className="uppercase tracking-[0.25em] text-neutral-500 text-xs">
                Signature Line
              </span>

              <h3 className="text-5xl font-light leading-tight">
                “Made to move with you — every piece tells a story of craftsmanship.”
              </h3>

              <p className="text-neutral-600 leading-relaxed max-w-md">
                Experience our premium linen and suede edits, refined through meticulous tailoring.
              </p>

              <button className="bg-black text-white px-12 py-4 text-sm rounded-full hover:bg-neutral-800 transition">
                Explore Collection
              </button>
            </div>

         
          </div>
        </section>

        {/* 🖤 Membership Sticky Section */}
        <section className=" sticky top-50 pb-3   flex w-screen h-screen  z-50">
          <div className=" flex w-full  items-center">
            <div className="top-10 h-full overflow-hidden sticky  bg-[#70e39a] text-white w-full">
              <div className="grid md:grid-cols-2">
                <div className="p-16">
                  <h3 className="text-5xl mb-6">Join The Inner Circle</h3>

                  <p className="text-neutral-400 mb-8">
                    Be first to access limited drops and private events.
                  </p>

                  <button className="bg-white text-neutral-900 px-10 py-4 rounded-full">
                    Join Now
                  </button>
                </div>

               
              </div>
            </div>
          </div>
        </section>

        {/* Footer badges */}
        
      <footer className="bg-white  border-4 border-black    z-70 w-screen  pt-20 text-neutral-900 px-6  pb-10">
  <div className="h-full sticky top-20 mt-69 w-full  mx-auto">

    {/* Top Minimal Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-12  mb-30">

      {/* Brand */}
      <div>
        <h2 className="text-lg tracking-wide mb-4">
          MEKHLA HERITAGE
        </h2>
        <p className="text-sm text-neutral-500 leading-relaxed">
          A quiet celebration of Assamese craftsmanship — where tradition,
          silk, and storytelling come together in timeless form.
        </p>
      </div>

      {/* Explore */}
      <div>
        <h4 className="text-[11px] tracking-[0.3em] mb-6 text-neutral-400 uppercase">
          Explore
        </h4>
        <ul className="space-y-3 text-sm">
          {["Collections", "Mekhla Chador", "New Arrivals", "Journal"].map((item) => (
            <li key={item} className="group cursor-pointer w-fit">
              <span className="relative transition-colors duration-300 hover:text-black">
                {item}
                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Info */}
      <div>
        <h4 className="text-[11px] tracking-[0.3em] mb-6 text-neutral-400 uppercase">
          Information
        </h4>
        <ul className="space-y-3 text-sm">
          {["About Us", "Craftsmanship", "Sustainability", "Contact"].map((item) => (
            <li key={item} className="group cursor-pointer w-fit">
              <span className="relative transition-colors duration-300 hover:text-black">
                {item}
                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter */}
      <div>
        <h4 className="text-[11px] tracking-[0.3em] mb-6 text-neutral-400 uppercase">
          Newsletter
        </h4>
        <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
          Receive early access, private releases, and stories from our atelier.
        </p>

        <div className="border-b border-neutral-300 flex items-center pb-2">
          <input
            type="email"
            placeholder="Your email"
            className="w-full bg-transparent outline-none text-sm placeholder:text-neutral-400"
          />
          <button className="text-sm tracking-wide hover:translate-x-1 transition-transform duration-300">
            →
          </button>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="flex flex-col md:flex-row justify-between items-center border-t border-neutral-200 pt-8 text-[11px] tracking-wide text-neutral-400">

      <p className="tracking-wider">
        © {new Date().getFullYear()} Mekhla Heritage
      </p>

      <div className="flex gap-8 mt-4 md:mt-0">
        {["Privacy", "Terms", "Cookies"].map((item) => (
          <span key={item} className="group cursor-pointer relative hover:text-black transition-colors duration-300">
            {item}
            <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
          </span>
        ))}
      </div>

      <div className="mt-4 md:mt-0 tracking-wider">
        India / INR ₹
      </div>
    </div>
  </div>
</footer>



 


       

     
        
      </div>
    </section>
  );
}


