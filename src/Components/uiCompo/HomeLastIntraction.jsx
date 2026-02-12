import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import MagneticLink from "../uiAnimationHooks/MagneticLink";
import { useRef } from "react";
import Scrollgallery from "../uiAnimationHooks/Scrollgallery";
import FullFotter from "../CommonCompo/FullFotter";



export default function HomeLastIntraction() {
  const controls = useAnimation();
  const btnHover = useRef(null);
  const sectionRef = useRef(null);

  const handleMouseEnterForHover = () => {
    if (btnHover.current) btnHover.current.style.color = "white";
    controls.start({
      y: "0%",
      transition: { duration: 0.5, ease: [0.34, 1.0, 0.64, 1.0] },
    });
  };
  const handleMouseLeaveForHover = async () => {
    if (btnHover.current) btnHover.current.style.color = "black";
    await controls.start({
      y: "-100%",
      transition: { duration: 0.4, ease: [0.34, 1.0, 0.64, 1.0] },
    });
    controls.set({ y: "100%" });
  };

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const radius = useTransform(scrollYProgress, [0, 1], [48, 0]);

  return (
    <>
      <div className="min-h-screen w-full mt-30 relative">
        <motion.section
          ref={sectionRef}
          style={{
            y,
            borderBottomLeftRadius: radius,
            borderBottomRightRadius: radius,
          }}
          className="relative z-20 min-h-[20vh] bg-white overflow-hidden flex flex-col items-center justify-center"
        >
          {/* Button */}
          <MagneticLink >
            <button
              className="w-48 h-20 rounded-[9999px] border-2 border-neutral-200 bg-transparent text-black tracking-wide hover:scale-105 transition-transform overflow-hidden"

            >
              <div
                onMouseEnter={handleMouseEnterForHover}
                onMouseLeave={handleMouseLeaveForHover}
                className="relative flex items-center justify-center w-full h-full cursor-pointer overflow-hidden"
              >
                {/* BLUE CIRCLE */}
                <motion.div
                  initial={{ y: "100%" }}
                  animate={controls}
                  className="absolute inset-0 z-1 bg-[#455ce9]"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "9999px"
                  }}
                />
                {/* ICON */}
                <div ref={btnHover} className="relative font-sans z-10 flex justify-center items-center">
                  <h1 className="text-xl">More Work</h1>
                  <h5 className="text-sm -mt-4">6</h5>
                </div>
              </div>
            </button>
          </MagneticLink>

          {/* Gallery */}
          <div className="mt-20 w-full">
            <Scrollgallery />
          </div>
        </motion.section>
      </div>
      <FullFotter />
    </>
  );
}
