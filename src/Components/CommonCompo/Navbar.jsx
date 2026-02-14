
import MagneticLink from "../uiAnimationHooks/MagneticLink";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";


export default function Navbar({colorInNavabar="white"}) {

  const location = useLocation();

  return (
    <motion.header
      className={`absolute top-0 left-0 w-full flex items-center justify-between px-10 py-6 text-${colorInNavabar} z-20`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
    >
      <MagneticLink href="#home">
        <Link to="/" className="flex items-center justify-center gap-2 group cursor-pointer">
          <span className="text-xl opacity-80">𝕿</span>

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
        </Link>
      </MagneticLink>

      <nav className="flex gap-8 text-xl">
        <MagneticLink>
          <Link to="/work">
            <h1 className="relative inline-block group text-xl cursor-pointer">
              Work
              {location.pathname === "/work" && (
                <span
                  className="absolute left-1/2 -bottom-3 w-2 h-2 bg-white rounded-full
           transform -translate-x-1/2
           opacity-0 group-hover:opacity-100
           transition-opacity duration-300"
                ></span>
              )}
              <span
                className={`absolute left-1/2 -bottom-3 w-2 h-2 bg-${colorInNavabar} rounded-full
           transform -translate-x-1/2
           opacity-0 group-hover:opacity-100
           transition-opacity duration-300`}
              ></span>
            </h1>
          </Link>

        </MagneticLink>
        <MagneticLink>
          <h1 className="relative inline-block group text-xl cursor-pointer">
            About
            {location.pathname === "/about" && (
              <span
                className="absolute left-1/2 -bottom-3 w-2 h-2 bg-white rounded-full
           transform -translate-x-1/2
           opacity-0 group-hover:opacity-100
           transition-opacity duration-300"
              ></span>
            )}
            <span
                className={`absolute left-1/2 -bottom-3 w-2 h-2 bg-${colorInNavabar} rounded-full
           transform -translate-x-1/2
           opacity-0 group-hover:opacity-100
           transition-opacity duration-300`}
              ></span>
          </h1>
        </MagneticLink>
        <MagneticLink>
          <h1 className="relative inline-block group text-xl  cursor-pointer">
            Contact
            {location.pathname === "/contact" && (
              <span
                className="absolute left-1/2 -bottom-3 w-2 h-2 bg-white rounded-full
           transform -translate-x-1/2
           opacity-0 group-hover:opacity-100
           transition-opacity duration-300"
              ></span>
            )}
            <span
                className={`absolute left-1/2 -bottom-3 w-2 h-2 bg-${colorInNavabar} rounded-full
           transform -translate-x-1/2
           opacity-0 group-hover:opacity-100
           transition-opacity duration-300`}
              ></span>
          </h1>
        </MagneticLink>
      </nav>
    </motion.header>
  );
}