import React from "react";
import {motion}  from "framer-motion";
import portfolioImage from "../assets/TanushImage.png";
import ScrollVelocity from "../Components/uiAnimationHooks/ScrollVelocity";
import Navbar from "../Components/CommonCompo/Navbar";

export default function Hero() {
  return (
    <div className="min-h-screen bg-[#a7aaaa] relative overflow-hidden">

      {/* ================= TOP NAV ================= */}
      <Navbar />
      

      {/* ================= LOCATION PILL ================= */}
      <motion.div
        className="absolute left-10 top-1/2 -translate-y-1/2 z-20"
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      >
        <div className="relative -left-10 flex items-center gap-4 bg-black/80 text-white px-10 py-7 rounded-r-full">
          <span className="text-xl leading-tight font-montserrat">
            Located<br />in the India
          </span>
          <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
            <img className="motion-safe:animate-spin w-10" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACOElEQVR4AbTUW3biMBAEUGk2FlgZZGUhK2PqNm4HB8PhY8ZHhdSP6pLawn/Gf37eErher4cFX5nPCw7v7O2lQAopeE2hrwWZxik/ULHknGM/HbsCIdmxwr3Lz3l7jrdpzlS8BMYp+cau0INAMiXasQKfKjxBx46JWxPCjfkzNgJLcce3Y8TOJNbrh3nOqXCL9KkrbyMQTxdHiHkbKVAC2YDWVYH2JQNnxMaR5/Rx38YqELIE3kvWCkkscuwaCfL1y/WO4hpy62bFcIqRZHkxx1gFYp0CQxBqp3HYFSJoG1iDWFIGLuCxm3sTiGI7EBQ45shTZvCd9XnBJTOULRZoj1w8ouAUVbNPUEbICitACPdthIvXwiuvBVZHL36dqt2/59rIXW7H+bXs1qJ4PwLOTP9k6Mi3Sn0CfePkKzhyLcbY+Mf2qdhd7jYaqwWyHF5MXbedI1f81Q/Ogr5J1ZESuNvBKUWg7nrWxkeIq3DW9/dea23Mf0Jh2JyqBFQJSjGzdjViDgSioABYg9jIg+uaQsyBb15f8sgpOviRdV83RLG4Zt91V3l6qsIY9d2KLffAl3V/FX4EBAIi1YKsjdqJtjBCdNcV0pYqxg/JUdSpisMH9y0aCsQp4bQQYj4dLeDb1W1zGkIraSPAGxEJJRIbMdOwM/Me5BDTOtxNzoOAKJFAzwlxaVsOVaNvWItqm/RqneR77Ap0QlheNiHvhhgIs+04KdOabxcvBZox57RLYqAwe3fHzen5LwAAAP//n9aONgAAAAZJREFUAwCg2ChAUxL52QAAAABJRU5ErkJggg==" alt="icon" />
          </div>
        </div>
      </motion.div>

      {/* ================= RIGHT TEXT ================= */}
      <motion.div
        className="absolute right-16 top-1/2 -translate-y-1/2 text-white z-20"
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      >
        <p className="text-4xl leading-snug font-playfair">
          Freelance<br />Designer & Web Developer
        </p>
      </motion.div>

      {/* ================= MARQUEE ================= */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 overflow-hidden z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <ScrollVelocity
          texts={["Tanush Patel "]}
          velocity={-150}
          className="custom-scroll-text text-white text-[17vw] font-normal font-bebas"
        />
      </motion.div>

      {/* ================= IMAGE ================= */}
      <motion.div
        className="absolute inset-0 flex items-end justify-center pointer-events-none"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.8, 0.25, 1],
          delay: 0.4,
        }}
      >
        <img
          className="h-screen w-full object-cover"
          src={portfolioImage}
          alt="portfolio"
        />
      </motion.div>
    </div>
  );
}
