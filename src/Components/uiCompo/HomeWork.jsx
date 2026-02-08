import { motion, useAnimation } from 'framer-motion'
import MagneticLink from "../uiAnimationHooks/MagneticLink";

export default function HomeWork() {
    const controls = useAnimation();
     const handleMouseEnterForHover = () => {
        controls.start({
            y: "0%",
            transition: { duration: 0.5, ease: [0.34, 1.0, 0.64, 1.0] }, // Custom bezier as requested
        });
    };

    const handleMouseLeaveForHover = async () => {
        await controls.start({
            y: "-100%",
            transition: { duration: 0.4, ease: [0.34, 1.0, 0.64, 1.0] },
        });
        controls.set({ y: "100%" });
    };
  return (
    <div  className="min-h-screen bg-white text-neutral-900">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-25 pt-32 pb-24 flex justify-center gap-16">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl xl:text-3xl font-light leading-tight max-w-xl">
            Helping brands to stand out in the digital era.
            Together we will set the new status quo. No nonsense,
            always on the cutting edge.
          </h1>
        </div>

        {/* Right Content */}
        <div data-lenis-speed="1.5" className="flex flex-col items-start lg:items-end gap-12">
          <p className="max-w-sm text-neutral-600 leading-relaxed">
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world.
          </p>

          {/* About Me Button */}
            <MagneticLink>
                <button
            className="w-48 h-48 rounded-full bg-neutral-900 text-white text-sm tracking-wide hover:scale-105 transition-transform overflow-hidden"

            >
                <div
                    onMouseEnter={handleMouseEnterForHover}
                    onMouseLeave={handleMouseLeaveForHover}
                    className=
                    "relative flex items-center justify-center w-full h-full cursor-pointer overflow-hidden"
                >
                    {/* BLUE CIRCLE */}
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={controls}
                        className="absolute inset-0 z-0 bg-[#455ce9]"
                        style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "9999px"
                        }}
                    />



                    {/* ICON */}
                    <div className="relative z-10 flex justify-center items-center">
                        About Me
                    </div>
                </div>


            </button>
            </MagneticLink>
        </div>
      </section>

      {/* RECENT WORK */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="border-t border-neutral-200 pt-16">
          <span className="text-xs tracking-widest text-neutral-400">
            RECENT WORK
          </span>

          {/* Project Row */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <h2 className="text-6xl font-semibold tracking-tight">
              ORDER MATE
            </h2>

            <p className="text-neutral-500 md:text-right">
              Interaction & Development
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
