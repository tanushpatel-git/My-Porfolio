
import MagneticLink from "../uiAnimationHooks/MagneticLink";
import { motion } from "framer-motion";


export default function Component() {
  return (
    <motion.header
      className="absolute top-0 left-0 w-full flex items-center justify-between px-10 py-6 text-white z-20"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
      <MagneticLink href="#home">
        <div className="flex items-center justify-center gap-2 group cursor-pointer">
          <span className="text-xl opacity-80">©</span>

          <div className="relative w-[20vw] overflow-hidden h-[1.8em]">
            <span
              className="absolute inset-0 text-xl opacity-80
                transition-transform duration-300
                translate-x-0
                group-hover:-translate-x-full"
            >
              Code by Tanush
            </span>

            <span
              className="absolute inset-0 text-xl opacity-80
                transition-transform duration-300
                translate-x-full
                group-hover:translate-x-0"
            >
              Tanush Patel
            </span>
          </div>
        </div>
      </MagneticLink>

      <nav className="flex gap-8 text-xl">
        <MagneticLink href="#work">
          <h1 class="relative inline-block group text-xl cursor-pointer">
            Work
            <span
              class="absolute left-1/2 -bottom-3 w-2 h-2 bg-white rounded-full 
           transform -translate-x-1/2 
           opacity-0 group-hover:opacity-100 
           transition-opacity duration-300"
            ></span>
          </h1>

        </MagneticLink>
        <MagneticLink href="#about">
          <h1 class="relative inline-block group text-xl cursor-pointer">
            About
            <span
              class="absolute left-1/2 -bottom-3 w-2 h-2 bg-white rounded-full 
           transform -translate-x-1/2 
           opacity-0 group-hover:opacity-100 
           transition-opacity duration-300"
            ></span>
          </h1>
        </MagneticLink>
        <MagneticLink href="#contact">
          <h1 class="relative inline-block group text-xl  cursor-pointer">
            Contact
            <span
              class="absolute left-1/2 -bottom-3 w-2 h-2 bg-white rounded-full 
           transform -translate-x-1/2 
           opacity-0 group-hover:opacity-100 
           transition-opacity duration-300"
            ></span>
          </h1>
        </MagneticLink>
      </nav>
    </motion.header>
  );
}