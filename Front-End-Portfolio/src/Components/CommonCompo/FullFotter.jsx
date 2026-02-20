import TanushImage from "../../assets/TanushImage.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import MagneticLink from "../uiAnimationHooks/MagneticLink";
import Fotter from "./Fotter";
import { useAnimation, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { useEffect } from "react";


export default function Component() {
    const [offsetX, setOffsetX] = useState(0);
    const textHover = useRef(null);
    const navigate = useNavigate();

    const handleMouseEnterForHover = () => {
        controls.start({
            y: "0%",
            transition: { duration: 0.5, ease: [0.34, 1.0, 0.64, 1.0] }, // Custom bezier as requested
        });
    };
    const handleMouseEnterForHover2 = () => {
        controls2.start({
            y: "0%",
            transition: { duration: 0.5, ease: [0.34, 1.0, 0.64, 1.0] }, // Custom bezier as requested
        });
    };
    const handleMouseEnterForHover3 = () => {
        controls3.start({
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
    const handleMouseLeaveForHover2 = async () => {
        await controls2.start({
            y: "-100%",
            transition: { duration: 0.4, ease: [0.34, 1.0, 0.64, 1.0] },
        });
        controls2.set({ y: "100%" });
    };
    const handleMouseLeaveForHover3 = async () => {
        await controls3.start({
            y: "-100%",
            transition: { duration: 0.4, ease: [0.34, 1.0, 0.64, 1.0] },
        });
        controls3.set({ y: "100%" });
    };

    const controls = useAnimation();
    const controls2 = useAnimation();
    const controls3 = useAnimation();
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });
    const { scrollYProgress: scrollYProgress2 } = useScroll();
    const leftToRight = useTransform(scrollYProgress2, [0, 1], ["-200%", "-10%"]);

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    const radius = useTransform(scrollYProgress, [0, 1], [48, 0]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            // Control how far the button moves (max 200px)
            const maxMove = 200;
            const move = Math.min(scrollY * 0.3, maxMove);

            setOffsetX(move);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="min-h-screen -z-1 bg-linear-to-b from-[#0f1115] to-[#151821] text-white flex items-center">

            {/* Main Content */}
            <div className="container mx-auto w-[80%] px-6 flex flex-col justify-center min-h-screen">
                <div>
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-4 mb-6">
                            <img
                                src={TanushImage}
                                alt="avatar"
                                className="w-20 h-20 object-cover object-center rounded-full"
                            />
                            <h1 className="text-7xl font-sans">Let's Work</h1>
                        </div>
                        <h1 className="text-7xl">together.</h1>
                    </div>

                    {/* Divider */}
                    <div className="relative my-20">
                        <div className="h-px bg-white/20 w-full" />

                        {/* Animated Button (scroll-ready) */}
                        <motion.div
                            style={{ x: leftToRight }}
                            className="absolute right-20 -top-24">
                            <MagneticLink>
                                <button
                                    onClick={()=>{navigate("/contact")}}
                                    className="w-48 h-48 rounded-full bg-[#455ce9] text-white text-sm tracking-wide hover:scale-105 transition-transform overflow-hidden"

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
                                            className="absolute inset-0 z-0 bg-[#384abe]"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                borderRadius: "9999px"
                                            }}
                                        />
                                        {/* ICON */}
                                        <div className="relative z-10 text-xl font-sans flex justify-center items-center">
                                            Get in touch
                                        </div>
                                    </div>
                                </button>
                            </MagneticLink>
                        </motion.div>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-wrap gap-4">
                        <MagneticLink>
                            <button
                                className="w-48 h-20 rounded-[9999px] border border-white/20 bg-transparent text-black tracking-wide hover:scale-105 transition-transform overflow-hidden"

                            >
                                <div
                                    onMouseEnter={handleMouseEnterForHover2}
                                    onMouseLeave={handleMouseLeaveForHover2}
                                    className=
                                    "relative flex items-center justify-center w-full h-full cursor-pointer overflow-hidden"
                                >
                                    {/* BLUE CIRCLE */}
                                    <motion.div
                                        initial={{ y: "100%" }}
                                        animate={controls2}
                                        className="absolute inset-0 z-1 bg-[#455ce9]"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: "9999px"
                                        }}
                                    />
                                    {/* ICON */}
                                    <div className="relative font-sans text-white z-10 flex justify-center items-center">
                                        +91 9729348173
                                    </div>
                                </div>
                            </button>
                        </MagneticLink>
                        <MagneticLink>
                            <button
                                className="w-60 h-20 rounded-[9999px] border border-white/20 bg-transparent text-white tracking-wide hover:scale-105 transition-transform overflow-hidden"

                            >
                                <div
                                    onMouseEnter={handleMouseEnterForHover3}
                                    onMouseLeave={handleMouseLeaveForHover3}
                                    className=
                                    "relative flex items-center justify-center w-full h-full cursor-pointer overflow-hidden"
                                >
                                    {/* BLUE CIRCLE */}
                                    <motion.div
                                        initial={{ y: "100%" }}
                                        animate={controls3}
                                        className="absolute inset-0 z-1 bg-[#455ce9]"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: "9999px"
                                        }}
                                    />
                                    {/* ICON */}
                                    <div className="relative font-sans text-white z-10 flex justify-center items-center">
                                        tanush000patel@gmail.com
                                    </div>
                                </div>
                            </button>
                        </MagneticLink>

                    </div>
                </div>
                <div className="relative">
                    <Fotter />
                </div>
            </div>
        </section>
    );
}