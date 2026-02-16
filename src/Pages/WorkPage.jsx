import Navbar from '../Components/CommonCompo/Navbar'
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MagneticLink from '../Components/uiAnimationHooks/MagneticLink';
import { useAnimation, motion, useTransform, useScroll } from 'framer-motion';
import FullFotter from '../Components/CommonCompo/FullFotter'
import WorkListUi from '../Components/uiCompo/WorkListUi'

export default function WorkPage() {
    const navigate = useNavigate();
    const sectionRef2 = useRef(null);
    const controls = useAnimation();
    const controls2 = useAnimation();
    const controls3 = useAnimation();
    const controls4 = useAnimation();
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
    const handleMouseEnterForHover4 = () => {
        controls4.start({
            y: "0%",
            transition: { duration: 0.5, ease: [0.34, 1.0, 0.64, 1.0] },
        });
    };
    const handleMouseLeaveForHover4 = async () => {
        await controls4.start({
            y: "-100%",
            transition: { duration: 0.4, ease: [0.34, 1.0, 0.64, 1.0] },
        });
        controls4.set({ y: "100%" });
    };

    const { scrollYProgress } = useScroll({
        target: sectionRef2,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    // Bottom radius: start very rounded (96px), decrease to 0 as you scroll
    const bottomRadius = useTransform(scrollYProgress, [0, 1], [96, 0]);

    // Project i Have is 

    const projects = [
        { title: "ORDER MATE", image: "OrderMate", projectDiscription: "Route protection & Development", year: "2023" },
        { title: "K72", image: "K72", projectDiscription: "Intraction & Development", year: "2024" },
        { title: "JOB PORTAL", image: "JobPortal", projectDiscription: "Role based access control & Development", year: "2024" },
        { title: "EMPLOYE TASK", image: "JobPortal", projectDiscription: "Role based access control & Development", year: "2024" },
        { title: "E-COMMERCE", image: "JobPortal", projectDiscription: "Role based access control & Development", year: "2024" },
        { title: "DISASTER MANAGEMENT SYSTEM", image: "JobPortal", projectDiscription: "Role based access control & Development", year: "2024" },
        { title: "BOOK MANAGEMENT SYSTEM", image: "JobPortal", projectDiscription: "Role based access control & Development", year: "2024" },
    ];




    return (
        <div className="min-h-screen w-full bg-white">
            <Navbar
                colorInNavabar="black"
            />
            <div className='min-h-screen flex flex-col items-center justify-center z-10 pt-50'>
                <div className='relative h-full w-[80vw]'>
                    <div className="w-full h-full bg-white px-18 py-10">


                        {/* -------------------------------- Heading -----------------------------*/}
                        <h1 className="text-[90px] font-midium font-sans leading-[1.1] text-[#1C1D20]">
                            Creating next level <br /> digital products
                        </h1>

                        {/* Filters + View Buttons */}
                        <div className="flex justify-between items-center mt-16">


                            {/* ---------------------------- Project Type -------------------------- */}

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


                            {/* ------------------------------------- Type of Buttom Which decide the view of the project-------------------------------------- */}
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


                {/* -------------------------Make a div section which speed the element and make a Radius decrease of div ---------------------------- */}
                <motion.section
                    ref={sectionRef2}
                    className="overflow-hidden"
                    style={{
                        y,
                        borderTopLeftRadius: 96,
                        borderTopRightRadius: 96,
                        borderBottomLeftRadius: bottomRadius,
                        borderBottomRightRadius: bottomRadius,
                    }}
                >
                    <div className='min-h-screen w-[85vw]'>

                        {/* ---------------------------Conditional rendering---------------------------- */}
                        <div className="w-full px-6 py-8">
                            <WorkListUi 
                            Projects = {projects} />
                        </div>


                        <div className='flex w-full justify-center items-center mt-20'>
                            {/* Button */}
                            <MagneticLink >
                                <button
                                    onClick={() => { navigate('/work') }}
                                    className="w-48 h-20 rounded-[9999px] border-2 border-neutral-200 text-white bg-(--loadBg) tracking-wide hover:scale-105 transition-transform overflow-hidden"

                                >
                                    <div
                                        onMouseEnter={handleMouseEnterForHover4}
                                        onMouseLeave={handleMouseLeaveForHover4}
                                        className="relative flex items-center justify-center w-full h-full cursor-pointer overflow-hidden"
                                    >
                                        {/* BLUE CIRCLE */}
                                        <motion.div
                                            initial={{ y: "100%" }}
                                            animate={controls4}
                                            className="absolute inset-0 z-1 bg-[#455ce9]"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                borderRadius: "9999px"
                                            }}
                                        />
                                        {/* ICON */}
                                        <div className="relative font-sans z-10 flex justify-center items-center">
                                            <h1 className="text-xl text-white">My Archive Work</h1>
                                            <h5 className="text-sm -mt-4 text-white">2</h5>
                                        </div>
                                    </div>
                                </button>
                            </MagneticLink>
                        </div>
                    </div>
                </motion.section>
            </div>
            <FullFotter />
        </div>
    );
}