import { useEffect, useRef, useState } from "react";
import MagneticLink from "../uiAnimationHooks/MagneticLink";
import { motion, useAnimation } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'


export default function MenuBtn() {
    const [open, setOpen] = useState(false);
    const controls = useAnimation();
    const [showBtn, setShowBtn] = useState(false);
    const btnRef = useRef(null);
    const [hovered, setHovered] = useState(false);
    const location = useLocation();

    /* ---------------- SHOW BUTTON AT 70% SCROLL ---------------- */
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            if (scrollY > viewportHeight * 0.18) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
                setOpen(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    /* ---------------- DISABLE SCROLL WHEN MENU OPEN ---------------- */
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
        return () => (document.body.style.overflow = "auto");
    }, [open]);

    /* ---------------- MAGNETIC EFFECT ---------------- */
    const handleMouseMove = (e) => {
        const btn = btnRef.current;
        const rect = btn.getBoundingClientRect();

        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);

        btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px) scale(1.05)`;
    };

    const handleMouseLeave = () => {
        btnRef.current.style.transform = "translate(0,0) scale(1)";
    };

    const menuContainer = {
        hidden: {
            transition: {
                staggerChildren: 0.08,
                staggerDirection: -1,
            },
        },
        visible: {
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2,
            },
        },
    };

    const menuItem = {
        hidden: {
            x: 40,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 18,
                mass: 0.6,
            },
        },
    };

    const handleMouseEnterForHover = () => {
        if (open) return;
        controls.start({
            y: "0%",
            transition: { duration: 0.5, ease: [0.34, 1.0, 0.64, 1.0] }, // Custom bezier as requested
        });
    };

    const handleMouseLeaveForHover = async () => {
        if (open) return;
        await controls.start({
            y: "-100%",
            transition: { duration: 0.4, ease: [0.34, 1.0, 0.64, 1.0] },
        });
        controls.set({ y: "100%" });
    };

    const [hoveredItem, setHoveredItem] = useState(null);


    const isActiveRoute = (item) => {
        if (item === "Home") return location.pathname === "/";
        return location.pathname === `/${item.toLowerCase()}`;
    };


    return (
        <>
            {/* DULL OVERLAY */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
                />
            )}

            {/* MENU BUTTON */}
            <button
                ref={btnRef}
                onClick={() => setOpen(!open)}
                onMouseMove={handleMouseMove}
                onMouseLeave={(e) => {
                    handleMouseLeave(e);
                    setTimeout(() => setHovered(false), 100);
                }}
                onMouseEnter={() => setHovered(true)}
                className={`group fixed top-[6vh] right-[2vw] z-50
                lg:h-[80.85px] lg:w-[80.85px] h-16 w-16
                rounded-full bg-[#171717]
                flex items-center justify-center
                cursor-pointer overflow-hidden
                transition-all duration-700
                ease-[cubic-bezier(.22,1.61,.36,1)]
                ${showBtn ? "scale-100 opacity-100" : "scale-0 opacity-0"}
            `}
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
                    <div className="relative w-6 h-6 z-10 flex justify-center items-center">
                        <span
                            className={`absolute w-8 font-sans font-extralight h-0.5 mt-1 rounded-full transition-all duration-500 ${open ? "rotate-45 -mt-1 bg-white" : "-translate-y-2 bg-white"}`}
                        />
                        <span
                            className={`absolute w-8 font-sans font-extralight h-0.5 -mt-1  rounded-full transition-all duration-500 ${open ? "-rotate-45 mt-1 bg-white" : "translate-y-2 bg-white"}`}
                        />
                    </div>
                </div>


            </button>
            {/* SIDE MENU */}
            <motion.div
                className={`fixed top-0 right-0 h-screen w-full lg:w-1/3
        bg-[#1C1D20] z-40
        transition-transform duration-700
        ease-[cubic-bezier(.22,1,.36,1)]
        ${open ? "translate-x-0" : "translate-x-full"}
    `}
                animate={{
                    borderRadius: open ? "0px" : "100px",
                }}
                transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >

                <motion.div
                    className="h-full w-full flex flex-col justify-center px-16 text-white"
                    variants={menuContainer}
                    initial="hidden"
                    animate={open ? "visible" : "hidden"}
                >
                    {/* NAV LABEL */}
                    <p className="absolute top-32 left-22 text-[10px] font-sans tracking-widest text-gray-400">
                        NAVIGATION
                    </p>
                    <div className="absolute top-40 mt-4 left-22 h-[0.3px] w-76 bg-gray-400" />

                    {/* MENU ITEMS */}
                    <div className="flex flex-col gap-10">
                        {["Home", "Work", "About", "Contact"].map((item) => (
                            <Link
                             to={item === "Home" ? "/" : item === "Work" ? "/work" : item === "About" ? "/about" : "/contact"} key={item}>
                                <motion.div
                                    variants={menuItem}
                                    className="group flex items-center gap-4 text-6xl font-light leading-none cursor-pointer"
                                    onMouseEnter={() => setHoveredItem(item)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                >
                                    {/* DOT */}
                                    <motion.span
                                        className="text-3xl"
                                        animate={{
                                            opacity:
                                                hoveredItem === item ||
                                                    (!hoveredItem && isActiveRoute(item))
                                                    ? 1
                                                    : 0,
                                            x:
                                                hoveredItem === item ||
                                                    (!hoveredItem && isActiveRoute(item))
                                                    ? 0
                                                    : -10,
                                        }}
                                        transition={{ duration: 0.25, ease: "easeOut" }}
                                    >
                                        •
                                    </motion.span>


                                    {/* TEXT */}
                                    <MagneticLink >
                                        <motion.span
                                            variants={{
                                                rest: { x: 0 },
                                                hover: { x: 6 },
                                            }}
                                            transition={{ duration: 0.25, ease: "easeOut" }}
                                        >
                                            {item}
                                        </motion.span>
                                    </MagneticLink>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                    {/* SOCIALS */}
                    <div className="absolute bottom-20 left-16">
                        <p className="text-[10px] tracking-widest text-gray-400 mb-4">SOCIALS</p>
                        <div className="flex gap-10 text-sm">
                            <MagneticLink><p className="relative inline-block after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full">Instagram</p></MagneticLink>
                            <MagneticLink><p className="relative inline-block after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full">Twitter</p></MagneticLink>
                            <MagneticLink><p className="relative inline-block after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full">LinkedIn</p></MagneticLink>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}

