import { motion, useAnimation } from 'framer-motion'
import MagneticLink from "../uiAnimationHooks/MagneticLink";
import { WordAnimationHook } from "../uiAnimationHooks/WordAnimationHook";
import { useRef, useState } from 'react';
import K72 from "../../assets/k72.png";
import OrderMate from "../../assets/order-mate.png";
import JobPortal from "../../assets/job-portal.png";

export default function HomeWork() {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const overviewRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(null);
  const prevIndex = useRef(null);
  const [direction, setDirection] = useState("down");
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const raf = useRef(null);
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

  const textContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.04, // word delay
      },
    },
  };

  const wordAnimation = {
    hidden: {
      y: 30,
      opacity: 0,
      filter: "blur(6px)",
    },
    show: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.34, 1.0, 0.64, 1.0],
      },
      once: false,
    },
  };

  const animate = () => {
    // PREVIEW (fast)
    current.current.x += (target.current.x - current.current.x) * 0.08;
    current.current.y += (target.current.y - current.current.y) * 0.08;

    overviewRef.current.style.transform =
      `translate(${current.current.x}px, ${current.current.y}px)`;

    raf.current = requestAnimationFrame(animate);
  };



  const handleMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    target.current.x = e.clientX - rect.left - 200;
    target.current.y = e.clientY - rect.top - 200;
  };

  const handleMouseEnter = () => {
    overviewRef.current.classList.remove("scale-0");
    overviewRef.current.classList.add("scale-100");
    raf.current = requestAnimationFrame(animate);
  };

  const handleMouseLeave = () => {
    cancelAnimationFrame(raf.current);
    overviewRef.current.classList.remove("scale-100");
    overviewRef.current.classList.add("scale-0");
  };

  const handleProjectEnter = (index) => {
    if (prevIndex.current !== null) {
      setDirection(index > prevIndex.current ? "down" : "up");
    }
    prevIndex.current = index;
    setActiveIndex(index);
  };

  const projects = [
    { title: "ORDER MATE", image: OrderMate },
    { title: "K72", image: K72 },
    { title: "JOB PORTAL", image: JobPortal },
  ];



  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-25 pt-32 pb-24 flex justify-center gap-16">

        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl xl:text-3xl font-light leading-tight max-w-2xl">
            <WordAnimationHook text="Helping brands to stand out in the digital era." />
            <WordAnimationHook text="Together we will set the new status quo." />
            <WordAnimationHook text="No nonsense, always on the cutting edge." />
          </h1>
        </div>



        {/* Right Content */}
        <div data-lenis-speed="1.5" className="flex flex-col items-start lg:items-end gap-12">
          <motion.div
            data-lenis-speed="1.5"
            className="flex flex-col items-start lg:items-end gap-12"
            variants={textContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-120px" }}
          >
            <motion.p
              variants={wordAnimation}
              className="max-w-sm text-neutral-600 leading-relaxed"
            >
              The combination of my passion for design, code & interaction positions
              me in a unique place in the web design world.
            </motion.p>

            <motion.div variants={wordAnimation}>
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
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* RECENT WORK */}
      <section className="max-w-7xl mx-auto px-6 cursor-pointer">
        <div>
          <span className="text-xs tracking-widest text-neutral-400">
            RECENT WORK
          </span>

          {/* Project Row */}
          <section
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            {/* PROJECT OVERVIEW SECTION (THIS FOLLOWS CURSOR) */}
            <div
              ref={overviewRef}
              className="absolute top-0 left-0 w-100 h-100 pointer-events-none
  transition-transform duration-300 ease-out scale-0"
            >

              {/* PREVIEW BOX */}
              <div className="relative w-full h-full bg-gray-800 rounded-sm overflow-hidden flex justify-center items-center">

                {/* VIEW CIRCLE */}
                <div
                  className="absolute top-40 left-1/2 -translate-x-1/2
  w-30 h-30 rounded-full z-3 bg-blue-600 text-white
  flex items-center justify-center pointer-events-none"
                >
                  VIEW
                </div>


                {/* IMAGE */}
                <div className="absolute w-[90%] h-[70%]">
                  {activeIndex !== null && (
                    <img
                      key={activeIndex}
                      src={projects[activeIndex].image}
                      alt=""
                      className={`absolute w-full h-full object-cover object-center
          transition-all duration-300 ease-out
          ${direction === "down"
                          ? "animate-slide-up"
                          : "animate-slide-down"
                        }`}
                    />
                  )}
                </div>

              </div>
            </div>




            {/* CONTENT */}
            {projects.map((project, index) => (
              <div
                key={project.title}
                onMouseEnter={() => handleProjectEnter(index)}
                className="mt-20 border-t pt-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8"
              >
                <h2 className="text-6xl font-semibold tracking-tight">
                  {project.title}
                </h2>
                <p className="text-neutral-500 md:text-right">
                  Interaction & Development
                </p>
              </div>
            ))}

          </section>

        </div>
      </section>
    </div>
  );
}