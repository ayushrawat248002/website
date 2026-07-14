
const Page = () => {
  return (
    <>
    <footer
      className={`bg-gray-100/50 backdrop-blur-lg shadow-2xl  tracking-widest text-orange-500 px-6 py-16 text-3xl`}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="transition-all duration-700">
          <h3 className="text-2xl font-bold mb-4">
            Drip<span className="text-black">Bohag</span>
          </h3>

          <p className="text-black leading-relaxed tracking-widest text-xl">
            Crafting beautiful, modern web experiences with a focus on
            performance and design precision.
          </p>
        </div>

        {/* Navigation */}
        <div className="transition-all duration-700">
          <h4 className="font-semibold mb-4 text-orange-500">Navigation</h4>

          <ul className="space-y-2 text-black text-sm">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <li
                key={item}
                className="cursor-pointer relative w-fit transition-colors duration-300 hover:text-orange-500"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="transition-all duration-700">
          <h4 className="font-semibold mb-4 text-orange-500">
            Stay Updated
          </h4>

          <div className="relative">
            <div className="absolute -inset-1 bg-black/20 rounded-2xl"></div>

            <div className="relative flex bg-white rounded-2xl overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className={`bg-transparent  px-4 py-3 outline-none w-full text-sm text-black`}
              />

              <button className="px-5 py-3 bg-black text-white text-sm font-semibold transition-transform duration-300 hover:scale-105">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-12">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
    </>
  );
};

export default Page;