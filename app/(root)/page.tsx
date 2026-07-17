import dynamic from "next/dynamic";
import Image from "next/image";

import Header from "@/components/Header";

const Hero = dynamic(() => import("@/components/Hero"), {
  loading: () => <div>Loading...</div>,
});

const CarouselSize = dynamic(() => import("@/components/slides"), {
  loading: () => <div>Loading carousel...</div>,
});

const Animatedsection = dynamic(
  () => import("@/components/animatedsection"),
);

const data = [
  {
    image:
      "https://res.cloudinary.com/dfehgukz3/image/upload/w_600,q_auto,f_auto/v1776795696/ayush2_sm04lo.png",
    text:
      "Elegant casual wear model featuring a modern fit and comfortable fabric, perfect for everyday style.",
  },
  {
    image:
     "https://res.cloudinary.com/dfehgukz3/image/upload/v1784255250/_BBB9479_bcfgke.jpg",
    text:
      "Trendy outfit with a sleek design, ideal for both casual outings and semi-formal occasions.",
  },
  {
    image:
      "https://res.cloudinary.com/dfehgukz3/image/upload/v1784255294/_BBB9515_swpjvh.jpg",
    text:
      "Premium fashion piece with a bold look, crafted for style and confidence.",
  },
];

export default function Page() {
  return (
    <main className=" m-0 w-full">
      <Header prop="" />

      {/* HERO SECTION */}

      {/* IMAGE */}

      <div
        className="
          md:col-span-7
          relative px-2
        "
      >
        <div
          className="
            relative 
            h-[480px]
            w-full
            overflow-hidden
          "
        >
          <Image
            src="https://res.cloudinary.com/dfehgukz3/image/upload/w_900,q_auto,f_auto/v1776795695/boyband2_kgfuol.png"
            alt="Authentic Assamese Collection"
            fill
            priority
            fetchPriority="high"
            sizes="
              (max-width:768px) 100vw,
              60vw
            "
            className="
              object-cover
              md:object-[80%_100%]
            "
          />
        </div>

        {/* DESKTOP OVERLAY */}

        <div
          className="
            hidden
            md:block
            absolute
            bottom-6
            left-6
            bg-white/70
            backdrop-blur-md
            px-5
            py-3
            rounded-xl
          "
        >
          <h1
            className="
              text-xl
              lg:text-2xl
              font-semibold
              tracking-widest
              uppercase
              text-gray-900
            "
          >
            Authentic Assamese Collection
          </h1>

          <p
            className="
              text-xs
              text-gray-600
              mt-1
            "
          >
            Explore premium handcrafted fashion
          </p>
        </div>
      </div>

      <div
        className="
          bg-white
          backdrop-blur-md
          shadow-md
          sticky -top-25
          z-90
          p-4
          lg:p-6
        "
      >
        <h1
          className="
            md:hidden
            text-gray-900
            text-[17px]
            tracking-widest
            uppercase
            text-center
            mb-5
          "
        >
          Authentic Assamese Collection
        </h1>

        <Hero />
      </div>

      {/* CAROUSEL */}

      <div
        className="
          flex
          flex-col
          w-full
          justify-center
          px-2 
        "
      >
        <CarouselSize data={data} />
      </div>

      <Animatedsection />
    </main>
  );
}