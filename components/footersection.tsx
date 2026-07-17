import { bebas } from "@/lib/font";

const Page = () => {
  return (
    <footer
      className={`
        relative overflow-hidden
        bg-[#f7f5f2]
        border-t border-neutral-200
        ${bebas.className}
        text-black
        px-6 md:px-12
        py-24
      `}
    >

      {/* Background Logo */}
      <div
        className="
          absolute 
          bottom-0 
          left-1/2 
          -translate-x-1/2
          text-[70px]
          tracking-widest
          text-black/[0.03]
          pointer-events-none
          select-none
          whitespace-nowrap
        "
      >
        DRIPBOHAG
      </div>


      <div className="relative max-w-7xl mx-auto grid md:grid-cols-[1.4fr_0.8fr_1.2fr] gap-16">


        {/* Brand */}
        <div>

          <h2
            className="
            text-6xl
            tracking-[0.15em]
            mb-8
            "
          >
            DRIP
            <span className="text-neutral-400">
              BOHAG
            </span>
          </h2>


          <p
            className="
            font-sans
            text-neutral-600
            text-lg
            leading-8
            max-w-md
            "
          >
            Redefining modern streetwear through culture,
            creativity, and timeless silhouettes.
            Designed for those who create their own identity.
          </p>


          <div className="flex gap-6 mt-10">

            {["IG", "FB", "X"].map((social)=>(
              <div
                key={social}
                className="
                h-11
                w-11
                rounded-full
                border
                border-neutral-300
                flex
                items-center
                justify-center
                text-sm
                cursor-pointer
                hover:bg-black
                hover:text-white
                transition-all
                duration-300
                "
              >
                {social}
              </div>
            ))}

          </div>

        </div>



        {/* Navigation */}
        <div>

          <h4
            className="
            text-sm
            tracking-[0.4em]
            text-neutral-400
            mb-8
            "
          >
            EXPLORE
          </h4>


          <ul className="space-y-5">

            {[
              "HOME",
              "COLLECTION",
              "ABOUT",
              "CONTACT"
            ].map((item)=>(

              <li
                key={item}
                className="
                group
                cursor-pointer
                text-xl
                w-fit
                "
              >

                <span>
                  {item}
                </span>

                <div
                  className="
                  h-[1px]
                  bg-black
                  w-0
                  group-hover:w-full
                  transition-all
                  duration-500
                  "
                />

              </li>

            ))}

          </ul>

        </div>




        {/* Newsletter */}
        <div>


          <h4
            className="
            text-sm
            tracking-[0.4em]
            text-neutral-400
            mb-8
            "
          >
            STAY CONNECTED
          </h4>


          <p
            className="
            font-sans
            text-neutral-600
            leading-7
            mb-8
            "
          >
            Subscribe for exclusive drops,
            limited collections and early access.
          </p>



          <div
            className="
            flex
            bg-white
            border
            border-neutral-300
            rounded-full
            p-1
            shadow-sm
            "
          >

            <input
              type="email"
              placeholder="Email address"
              className="
              flex-1
              px-6
              bg-transparent
              outline-none
              font-sans
              text-sm
              "
            />


            <button
              className="
              bg-black
              text-white
              px-8
              py-3
              rounded-full
              text-sm
              tracking-widest
              hover:bg-neutral-800
              transition
              "
            >
              JOIN
            </button>


          </div>


        </div>

      </div>




      {/* Bottom */}
      <div
        className="
        relative
        max-w-7xl
        mx-auto
        mt-24
        pt-8
        border-t
        border-neutral-300
        flex
        flex-col
        md:flex-row
        justify-between
        gap-5
        text-neutral-500
        font-sans
        text-sm
        "
      >

        <p>
          © {new Date().getFullYear()} DRIPBOHAG. All Rights Reserved.
        </p>


        <p className="tracking-[0.3em]">
          BUILT WITH PASSION
        </p>

      </div>


    </footer>
  );
};

export default Page;