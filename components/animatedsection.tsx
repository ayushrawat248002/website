'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import assamgirl from '@/assets/assam1.jpeg'
import assam1 from '@/assets/assam2.jpeg'
const Animatedsection = () => {
       const ref = useRef(null);
    const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Background image (slower movement)
  const yBg = useTransform(scrollYProgress, [0, 0.4], [0, -10]);
  const yFg = useTransform(scrollYProgress, [0, 0.4], [80, -100]);

  // Crossfade
  const opacityBg = useTransform(scrollYProgress, [0.2, 0.3], [1, 0]);
  const opacityFg = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);

  // 🔥 Scale effect
  const scaleBg = useTransform(scrollYProgress, [0.2, 0.4], [1, 0.6]); // shrink
  const scaleFg = useTransform(scrollYProgress, [0.2, 0.3], [0.5, 1]); // settle in

return(
    <>
          <section ref={ref} className="h-[300vh] bg-gray/30 backdrop-blur-md">
      <div  className="relative flex flex-col items-start">

        {/* First image (fade out + shrink) */}
        <motion.div
          style={{
            backgroundImage: `url(${assamgirl.src})`,
            y: yBg,
            opacity: opacityBg,
            scale: scaleBg,
          }}
          className="h-[400px] w-full sticky top-40 bg-cover scale-100 bg-center rounded-none shadow-xl z-[10]"
        />

        {/* Second image (fade in + zoom in slightly) */}
        <motion.div
          style={{
            backgroundImage: `url(${assam1.src})`,
            y: yFg,
            opacity: opacityFg,
            scale: scaleFg,
          }}
          className="h-[400px] w-full  sticky top-40 mt-20 bg-cover bg-center shadow-xl z-[20]"
        />

      </div>
    </section>
    </>
)
}
export default Animatedsection;