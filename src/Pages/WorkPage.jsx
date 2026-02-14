import Navbar from '../Components/CommonCompo/Navbar'
import { useEffect, useRef, useState } from 'react';
import MagneticLink from '../Components/uiAnimationHooks/MagneticLink';
import { useAnimation, motion } from 'framer-motion';

export default function WorkPage() {
    const controls = useAnimation();
    const controls2 = useAnimation();
    const controls3 = useAnimation();
    const btnHover = useRef(null);
    const btnHover2 = useRef(null);
    const btnHover31 = useRef(null);
    const btnHover32 = useRef(null);
    const btnHover33 = useRef(null);
    const btnHover34 = useRef(null);

    useEffect(() => {
        window.document.title = "Work - Tanush Patel";
    }, [])


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
    const handleMouseEnterForHover2 = () => {
        if (btnHover2.current) btnHover2.current.style.color = "white";
        controls2.start({
            y: "0%",
            transition: { duration: 0.5, ease: [0.34, 1.0, 0.64, 1.0] },
        });
    };
    const handleMouseLeaveForHover2 = async () => {
        if (btnHover2.current) btnHover2.current.style.color = "black";
        await controls2.start({
            y: "-100%",
            transition: { duration: 0.4, ease: [0.34, 1.0, 0.64, 1.0] },
        });
        controls2.set({ y: "100%" });
    };
    const handleMouseEnterForHover3 = () => {
        if (btnHover31.current) btnHover31.current.style.borderColor = "white";
        if (btnHover32.current) btnHover32.current.style.borderColor = "white";
        if (btnHover33.current) btnHover33.current.style.borderColor = "white";
        if (btnHover34.current) btnHover34.current.style.borderColor = "white";
        controls3.start({
            y: "0%",
            transition: { duration: 0.5, ease: [0.34, 1.0, 0.64, 1.0] },
        });
    };
    const handleMouseLeaveForHover3 = async () => {
        if (btnHover31.current) btnHover31.current.style.borderColor = "black";
        if (btnHover32.current) btnHover32.current.style.borderColor = "black";
        if (btnHover33.current) btnHover33.current.style.borderColor = "black";
        if (btnHover34.current) btnHover34.current.style.borderColor = "black";
        await controls3.start({
            y: "-100%",
            transition: { duration: 0.4, ease: [0.34, 1.0, 0.64, 1.0] },
        });
        controls3.set({ y: "100%" });
    };
    const sectionRef = useRef(null);
    const overviewRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(null);
    const prevIndex = useRef(null);
    const [direction, setDirection] = useState("down");
    const target = useRef({ x: 0, y: 0 });
    const current = useRef({ x: 0, y: 0 });
    const raf = useRef(null);

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
        { title: "ORDER MATE", image: "OrderMate", projectDiscription: "Route protection & Development" ,year:"2023"},
        { title: "K72", image: "K72", projectDiscription: "Intraction & Development",year:"2024" },
        { title: "JOB PORTAL", image: "JobPortal", projectDiscription: "Role based access control & Development",year:"2024" },
        { title: "EMPLOYE TASK", image: "JobPortal", projectDiscription: "Role based access control & Development",year:"2024" },
        { title: "E-COMMERCE", image: "JobPortal", projectDiscription: "Role based access control & Development",year:"2024" },
        { title: "DISASTER MANAGEMENT SYSTEM", image: "JobPortal", projectDiscription: "Role based access control & Development",year:"2024" },
        { title: "BOOK MANAGEMENT SYSTEM", image: "JobPortal", projectDiscription: "Role based access control & Development",year:"2024" },
    ];


    return (
        <div className="min-h-screen w-full bg-white">
            <Navbar
                colorInNavabar="black"
            />
            <div className='min-h-screen flex flex-col items-center justify-center z-10 pt-50'>
                <div className='relative h-full w-[80vw]'>
                    <div className="w-full h-full bg-white px-18 py-10">
                        {/* Heading */}
                        <h1 className="text-[90px] font-midium font-sans leading-[1.1] text-[#1C1D20]">
                            Creating next level <br /> digital products
                        </h1>

                        {/* Filters + View Buttons */}
                        <div className="flex justify-between items-center mt-16">
                            {/* Left Filters */}
                            <div className="flex gap-2">
                                <MagneticLink>
                                    <button className="px-12 py-6 rounded-full bg-black text-white text-lg font-extralight">
                                        All
                                    </button>
                                </MagneticLink>

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
                                                <h1 className="text-xl">Design</h1>
                                                <h5 className="text-sm -mt-4">3</h5>
                                            </div>
                                        </div>
                                    </button>
                                </MagneticLink>

                                <MagneticLink >
                                    <button
                                        className="w-48 h-20 rounded-[9999px] border-2 border-neutral-200 bg-transparent text-black tracking-wide hover:scale-105 transition-transform overflow-hidden"

                                    >
                                        <div
                                            onMouseEnter={handleMouseEnterForHover2}
                                            onMouseLeave={handleMouseLeaveForHover2}
                                            className="relative flex items-center justify-center w-full h-full cursor-pointer overflow-hidden"
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
                                            <div ref={btnHover2} className="relative font-sans z-10 flex justify-center items-center">
                                                <h1 className="text-xl">Developement</h1>
                                                <h5 className="text-sm -mt-4">4</h5>
                                            </div>
                                        </div>
                                    </button>
                                </MagneticLink>
                            </div>

                            {/* Right View Icons */}
                            <div className="flex gap-4">
                                {/* List View */}
                                <MagneticLink>
                                    <button className="w-20 h-20 rounded-full bg-black flex items-center justify-center">
                                        <div className="space-y-1">
                                            <span className="block font-extralight font-sans w-5 h-[2px] bg-white"></span>
                                            <span className="block font-extralight font-sans w-5 h-[2px] bg-white"></span>
                                            <span className="block font-extralight font-sans w-5 h-[2px] bg-white"></span>
                                            <span className="block font-extralight font-sans w-5 h-[2px] bg-white"></span>
                                        </div>
                                    </button>
                                </MagneticLink>

                                {/* Grid View */}
                                <MagneticLink>
                                    <button className="w-20 h-20 rounded-full border border-gray-300 bg-transparent text-black tracking-wide hover:scale-105 transition-transform overflow-hidden">
                                        <div
                                            onMouseEnter={handleMouseEnterForHover3}
                                            onMouseLeave={handleMouseLeaveForHover3}
                                            className="relative flex items-center justify-center w-full h-full cursor-pointer overflow-hidden">
                                            {/* BLUE CIRCLE */}
                                            <motion.div
                                                initial={{ y: "100%" }}
                                                animate={controls3}
                                                className="absolute inset-0 z-1 bg-[#455cee]"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    borderRadius: "9999px"
                                                }}
                                            />
                                            <div className='relative z-10 grid grid-cols-2 gap-1'>
                                                <span ref={btnHover31} className="w-2 h-2 border border-black"></span>
                                                <span ref={btnHover32} className="w-2 h-2 border border-black"></span>
                                                <span ref={btnHover33} className="w-2 h-2 border border-black"></span>
                                                <span ref={btnHover34} className="w-2 h-2 border border-black"></span>
                                            </div>
                                        </div>
                                    </button>
                                </MagneticLink>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='min-h-screen w-[85vw]'>
                    <div className="w-full px-6 py-8">

                        {/* RECENT WORK */}
                        <section className="max-w-7xl mx-auto px-6 cursor-pointer">
                            <div className='flex flex-col justify-center'>
                                {/* Header Row */}
                                <div className="flex justify-around items-center gap-8 text-gray-400 text-[12px] tracking-widest uppercase">
                                    <div>Client</div>
                                    <div className="text-center">Services</div>
                                    <div className="text-right">Year</div>
                                </div>

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
                                        className="absolute top-0 left-0 w-100 h-100 pointer-events-none transition-transform duration-300 ease-out scale-0"
                                    >

                                        {/* PREVIEW BOX */}
                                        <div className="relative w-full h-full bg-gray-800 rounded-sm overflow-hidden flex justify-center items-center">

                                            {/* VIEW CIRCLE */}
                                            <div
                                                className="absolute top-40 left-1/2 -translate-x-1/2 w-30 h-30 rounded-full z-3 bg-blue-600 text-white flex items-center justify-center pointer-events-none"
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
                                                        className={`absolute w-full h-full object-cover object-center transition-all duration-300 ease-out ${direction === "down"
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
                                            className={`mt-15 border-t pt-13 flex justify-around gap-8 items-start ${index === projects.length - 1 ? "border-b border-b-neutral-800 pb-13" : ""}`}
                                        >
                                            <p className="text-2xl font-semibold tracking-tight">
                                                {project.title}
                                            </p>
                                            <p className="text-neutral-500 md:text-right">
                                                {project.projectDiscription}
                                            </p>
                                            <p className="text-neutral-500 tracking-tight">
                                                {project.year}
                                            </p>
                                        </div>
                                    ))}
                                </section>
                            </div>
                        </section>
                    </div>

                </div>
            </div >
        </div >
    );
}