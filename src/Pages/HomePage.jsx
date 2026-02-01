import React, { useEffect, useState } from "react";
import portfolioImage from "../assets/TanushImage.png";
import MagneticLink from "../Components/uiAnimationHooks/MagneticLink";

export default function Hero() {

  return (
    <div className="min-h-screen bg-[#a7aaaa] relative overflow-hidden">

      {/* Top Nav */}
      <header className="absolute top-0 left-0 w-full flex items-center justify-between px-10 py-6 text-white z-20">
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

            {/* Tanush Patel */}
            <span
              className="absolute inset-0 text-xl opacity-80
                 transition-transform duration-300
                 translate-x-full
                 group-hover:translate-x-0"
            >
              Tanush Patel
            </span>
          </div>
        </div></MagneticLink>

        <nav className="flex gap-8 text-xl">
          <MagneticLink href="#work">Work</MagneticLink>
          <MagneticLink href="#about">About</MagneticLink>
          <MagneticLink href="#contact">Contact</MagneticLink>
        </nav>
      </header>

      {/* Location pill */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 z-20">
        <div className="flex items-center gap-4 bg-black/80 text-white px-6 py-4 rounded-full">
          <span className="text-sm leading-tight">
            Located<br />in India
          </span>
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            🌍
          </div>
        </div>
      </div>

      {/* Right text */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 text-white z-20">
        <p className="text-xl leading-snug">
          Freelance<br />Designer & Developer
        </p>
      </div>

      {/* Infinite Name Marquee */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-10">
        <div className={`w-[200%] flex animate-marquee marquee-animation`}>
          <h1 className="text-white text-[18vw] font-light whitespace-nowrap">
            Tanush Patel&nbsp;&nbsp;Tanush Patel&nbsp;&nbsp;
          </h1>
          <h1 className="text-white text-[18vw] font-light whitespace-nowrap">
            Tanush Patel&nbsp;&nbsp;Tanush Patel&nbsp;&nbsp;
          </h1>
        </div>
      </div>

      {/* Image */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
        <img
          className="h-screen object-cover"
          src={portfolioImage}
          alt="portfolio"
        />
      </div>
    </div>
  );
}
