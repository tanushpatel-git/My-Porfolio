import { useEffect, useRef, useState } from "react";
import MagneticLink from "../uiAnimationHooks/MagneticLink";
import {motion} from 'framer-motion'

export default function MenuBtn() {
    const [open, setOpen] = useState(false);
    const [showBtn, setShowBtn] = useState(false);
    const btnRef = useRef(null);

    /* ---------------- SHOW BUTTON AT 70% SCROLL ---------------- */
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            if (scrollY > viewportHeight * 0.5) {
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
                onMouseLeave={handleMouseLeave}
                className={`group fixed top-[8vh] right-[4vw] z-50
                lg:h-[80.85px] lg:w-[80.85px] h-16 w-16
                rounded-full bg-[#171717]
                flex items-center justify-center
                cursor-pointer overflow-hidden
                transition-all duration-700
                ease-[cubic-bezier(.22,1,.36,1)]
                ${showBtn ? "scale-100 opacity-100" : "scale-0 opacity-0"}
            `}
            >
                <span
                    className={`absolute rounded-full bg-(--hoverColor)
                    transition-all duration-700
                    ease-[cubic-bezier(.22,1,.36,1)]
                    ${open ? "w-[200%] h-[200%]" : "w-10 h-10 -bottom-10 group-hover:bottom-5"}
                `}
                />
                <div className="relative w-6 h-6 z-10 flex justify-center items-center">
                    <span
                        className={`absolute w-6 h-0.5 rounded-full transition-all duration-500
                        ${open ? "rotate-45 bg-white" : "-translate-y-2 bg-white"}
                    `}
                    />
                    <span
                        className={`absolute w-6 h-0.5 rounded-full transition-all duration-500
                        ${open ? "-rotate-45 bg-white" : "translate-y-2 bg-white"}
                    `}
                    />
                </div>
            </button>

            {/* SIDE MENU */}
            <div
                className={`fixed top-0 right-0 h-screen w-full lg:w-1/3
                bg-[#171717] z-40
                transition-transform duration-700
                ease-[cubic-bezier(.22,1,.36,1)]
                ${open ? "translate-x-0" : "translate-x-full"}
            `}
            >
                <motion.div
                    className="h-full flex flex-col justify-center px-12 gap-8 text-white"
                    variants={menuContainer}
                    initial="hidden"
                    animate={open ? "visible" : "hidden"}
                >
                    {["Home", "Work", "About", "Contact"].map((item) => (
                        <MagneticLink key={item}>
                            <motion.a
                                variants={menuItem}
                                className="text-4xl font-light hover:translate-x-2 transition"
                            >
                                {item}
                            </motion.a>
                        </MagneticLink>
                    ))}
                </motion.div>

            </div>
        </>
    );
}
