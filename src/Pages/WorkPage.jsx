import Navbar from '../Components/CommonCompo/Navbar'
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MagneticLink from '../Components/uiAnimationHooks/MagneticLink';
import { useAnimation, motion, useTransform, useScroll, AnimatePresence } from 'framer-motion';
import FullFotter from '../Components/CommonCompo/FullFotter'
import WorkListUi from '../Components/uiCompo/WorkListUi'
import WorkGridUi from '../Components/uiCompo/WorkGridUi';
import web1 from '../assets/ProjectPhotosForFrontPage/web1.png'
import web2 from '../assets/ProjectPhotosForFrontPage/web2.png'
import web3 from '../assets/ProjectPhotosForFrontPage/web3.png'
import jobPortal from '../assets/job-portal.png'
import k72 from '../assets/k72.png'
import orderMate from '../assets/order-mate.png'

export default function WorkPage() {
    const [listView, setListView] = useState(true);
    const navigate = useNavigate();
    const sectionRef2 = useRef(null);
    const controls0 = useAnimation();
    const controls = useAnimation();
    const controls2 = useAnimation();
    const controls3 = useAnimation();
    const controls4 = useAnimation();
    const controls5 = useAnimation();
    const btnHover0 = useRef(null);
    const btnHover = useRef(null);
    const btnHover2 = useRef(null);
    const btnHover31 = useRef(null);
    const btnHover32 = useRef(null);
    const btnHover33 = useRef(null);
    const btnHover34 = useRef(null);
    const btnHover51 = useRef(null);
    const btnHover52 = useRef(null);
    const btnHover53 = useRef(null);
    const btnHover54 = useRef(null);
    const [activeFilter, setActiveFilter] = useState("All");


    useEffect(() => {
        window.document.title = "Work - Tanush Patel";
    }, [])

    useEffect(() => {
        if (activeFilter !== "development") {
            controls2.set({ y: "100%" }); // reset background
            if (btnHover2.current) {
                btnHover2.current.style.color = "black";
            }
        } if (activeFilter !== "design") {
            controls.set({ y: "100%" });
            if (btnHover.current) {
                btnHover.current.style.color = "black";
            }
        } if (activeFilter != "All") {
            controls0.set({ y: "100%" });
            if (btnHover0.current) {
                btnHover0.current.style.color = "black";
            }
        }
    }, [activeFilter]);
    useEffect(() => {
        if (listView) {
            // Switching to List: reset Grid hover background + grid icon borders.
            controls3.set({ y: "100%" });
            [btnHover31, btnHover32, btnHover33, btnHover34].forEach((ref) => {
                if (ref.current) ref.current.style.borderColor = "black";
            });
        } else {
            // Switching to Grid: reset List hover background + list icon borders.
            controls5.set({ y: "100%" });
            [btnHover51, btnHover52, btnHover53, btnHover54].forEach((ref) => {
                if (ref.current) ref.current.style.borderColor = "black";
            });
        }
    }, [listView]);



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

    const handleMouseEnterForHover0 = () => {
        if (btnHover0.current) btnHover0.current.style.color = "white";
        controls0.start({
            y: "0%",
            transition: { duration: 0.5, ease: [0.34, 1.0, 0.64, 1.0] },
        });
    };
    const handleMouseLeaveForHover0 = async () => {
        if (btnHover0.current) btnHover0.current.style.color = "black";
        await controls0.start({
            y: "-100%",
            transition: { duration: 0.4, ease: [0.34, 1.0, 0.64, 1.0] },
        });
        controls0.set({ y: "100%" });
    };
    const handleMouseEnterForHover5 = () => {
        if (btnHover51.current) btnHover51.current.style.borderColor = "white";
        if (btnHover52.current) btnHover52.current.style.borderColor = "white";
        if (btnHover53.current) btnHover53.current.style.borderColor = "white";
        if (btnHover54.current) btnHover54.current.style.borderColor = "white";
        controls5.start({
            y: "0%",
            transition: { duration: 0.5, ease: [0.34, 1.0, 0.64, 1.0] },
        });
    };
    const handleMouseLeaveForHover5 = async () => {
        if (btnHover51.current) btnHover51.current.style.borderColor = "black";
        if (btnHover52.current) btnHover52.current.style.borderColor = "black";
        if (btnHover53.current) btnHover53.current.style.borderColor = "black";
        if (btnHover54.current) btnHover54.current.style.borderColor = "black";
        await controls5.start({
            y: "-100%",
            transition: { duration: 0.4, ease: [0.34, 1.0, 0.64, 1.0] },
        });
        controls5.set({ y: "100%" });
    };

    const { scrollYProgress } = useScroll({
        target: sectionRef2,
        offset: ["start start", "end start"],
    });

    //make a line coming effect 
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15, // delay between lines
            },
        },
    };

    const line = {
        hidden: {
            y: 120, // start from bottom
        },
        show: {
            y: 0,
            transition: {
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1], // smooth upward ease
            },
        },
    };


    //aniimation of worklist 
    const workWrapper = {
        hidden: {
            y: 120,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: [0, 0, 1], // opacity only at the end
            transition: {
                y: {
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                },
                opacity: {
                    duration: 0.4,
                    times: [0, 0.85, 1],
                    ease: "easeOut",
                },
            },
        },
    };



    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    // Bottom radius: start very rounded (96px), decrease to 0 as you scroll
    const bottomRadius = useTransform(scrollYProgress, [0, 1], [96, 0]);

    // Project i Have is 

    const projects = [
        { title: "ORDER MATE", image: orderMate , projectDiscription: "Route protection & Development", year: "2025" },
        { title: "JOB PORTAL", image: jobPortal , projectDiscription: "Role based access control & Development", year: "2024" },
        { title: "EMPLOYE TASK", image: web3 , projectDiscription: "Role based access control & Development", year: "2024" },
        { title: "Head Phone Era", image: "JobPortal", projectDiscription: "Design & Development", year: "2026" },
        { title: "E-COMMERCE", image: web1 , projectDiscription: "Role based access control & Development", year: "2025" },
        { title: "K72", image: k72 , projectDiscription: "Intraction & Development", year: "2024" },
        { title: "DISASTER MANAGEMENT SYSTEM", image: web2, projectDiscription: "Role based access control & Development", year: "2024" },
        { title: "BOOK MANAGEMENT SYSTEM", image: "JobPortal", projectDiscription: "Role based access control & Development", year: "2024" },
    ];

    const designProject = [
        { title: "ORDER MATE", image: orderMate , projectDiscription: "Route protection & Development", year: "2023" },
        { title: "K72", image: k72 , projectDiscription: "Intraction & Development", year: "2024" },
        { title: "Head Phone Era", image: "JobPortal", projectDiscription: "Design & Development", year: "2026" },
    ]

    const developmentProjects = [
        { title: "JOB PORTAL", image: jobPortal , projectDiscription: "Role based access control & Development", year: "2024" },
        { title: "EMPLOYE TASK", image: web3 , projectDiscription: "Role based access control & Development", year: "2024" },
        { title: "E-COMMERCE", image: web1 , projectDiscription: "Role based access control & Development", year: "2025" },
        { title: "DISASTER MANAGEMENT SYSTEM", image: web2, projectDiscription: "Role based access control & Development", year: "2024" },
        { title: "BOOK MANAGEMENT SYSTEM", image: "JobPortal", projectDiscription: "Role based access control & Development", year: "2024" },
    ]




    return (
        <div className="min-h-screen w-full bg-white">
            <Navbar
                colorInNavabar="black"
            />
            <div className='min-h-screen flex flex-col items-center justify-center z-10 pt-50'>
                <div className='relative h-full w-[80vw]'>
                    <div className="w-full h-full bg-white px-18 py-10">


                        {/* -------------------------------- Heading -----------------------------*/}
                        <motion.h1
                            className="text-[90px] font-medium font-sans leading-[1.1] text-[#1C1D20] overflow-hidden"
                            variants={container}
                            initial="hidden"
                            animate="show"
                        >
                            <motion.span
                                className="block overflow-hidden"
                                variants={line}
                            >
                                Creating next level
                            </motion.span>

                            <motion.span
                                className="block overflow-hidden"
                                variants={line}
                            >
                                digital products
                            </motion.span>
                        </motion.h1>


                        {/* Filters + View Buttons */}
                        <div className="flex justify-between items-center mt-16">


                            {/* ---------------------------- Project Type -------------------------- */}

                            <div className="flex gap-2">



                                <MagneticLink>
                                    <button
                                        onClick={() => setActiveFilter("All")}
                                        className={`w-48 h-20 rounded-[9999px] overflow-hidden transition-transform
      ${activeFilter === "All"
                                                ? "bg-black text-white"
                                                : "border-2 border-neutral-200 bg-transparent text-black hover:scale-105"
                                            }
    `}
                                    >
                                        <div
                                            onMouseEnter={activeFilter !== "All" ? handleMouseEnterForHover0 : undefined}
                                            onMouseLeave={activeFilter !== "All" ? handleMouseLeaveForHover0 : undefined}
                                            className="relative flex items-center justify-center w-full h-full"
                                        >
                                            {activeFilter !== "All" && (
                                                <motion.div
                                                    initial={{ y: "100%" }}
                                                    animate={controls0}
                                                    className="absolute inset-0 bg-[#455ce9]"
                                                    style={{ borderRadius: "9999px" }}
                                                />
                                            )}

                                            <div
                                                ref={btnHover0}
                                                className={`relative z-10 flex items-center gap-1 ${activeFilter === "All" ? "text-white" : "text-black"
                                                    }`}
                                            >
                                                <h1 className="text-xl">All</h1>
                                            </div>
                                        </div>
                                    </button>
                                </MagneticLink>



                                <MagneticLink>
                                    <button
                                        onClick={() => setActiveFilter("design")}
                                        className={`w-48 h-20 rounded-[9999px] overflow-hidden transition-transform
      ${activeFilter === "design"
                                                ? "bg-black text-white"
                                                : "border-2 border-neutral-200 bg-transparent text-black hover:scale-105"
                                            }
    `}
                                    >
                                        <div
                                            onMouseEnter={activeFilter !== "design" ? handleMouseEnterForHover : undefined}
                                            onMouseLeave={activeFilter !== "design" ? handleMouseLeaveForHover : undefined}
                                            className="relative flex items-center justify-center w-full h-full"
                                        >
                                            {activeFilter !== "design" && (
                                                <motion.div
                                                    initial={{ y: "100%" }}
                                                    animate={controls}
                                                    className="absolute inset-0 bg-[#455ce9]"
                                                    style={{ borderRadius: "9999px" }}
                                                />
                                            )}

                                            <div
                                                ref={btnHover}
                                                className={`relative z-10 flex items-center gap-1 ${activeFilter === "design" ? "text-white" : "text-black"
                                                    }`}
                                            >
                                                <h1 className="text-xl">Design</h1>
                                                <h5 className="text-sm -mt-4">3</h5>
                                            </div>
                                        </div>
                                    </button>
                                </MagneticLink>




                                <MagneticLink>
                                    <button
                                        onClick={() => setActiveFilter("development")}
                                        className={`w-48 h-20 rounded-[9999px] overflow-hidden transition-transform
      ${activeFilter === "development"
                                                ? "bg-black text-white"
                                                : "border-2 border-neutral-200 bg-transparent text-black hover:scale-105"
                                            }
    `}
                                    >
                                        <div
                                            onMouseEnter={activeFilter !== "development" ? handleMouseEnterForHover2 : undefined}
                                            onMouseLeave={activeFilter !== "development" ? handleMouseLeaveForHover2 : undefined}
                                            className="relative flex items-center justify-center w-full h-full"
                                        >
                                            {activeFilter !== "development" && (
                                                <motion.div
                                                    initial={{ y: "100%" }}
                                                    animate={controls2}
                                                    className="absolute inset-0 bg-[#455ce9]"
                                                    style={{ borderRadius: "9999px" }}
                                                />
                                            )}

                                            <div
                                                ref={btnHover2}
                                                className={`relative z-10 flex items-center gap-1 ${activeFilter === "development" ? "text-white" : "text-black"
                                                    }`}
                                            >
                                                <h1 className="text-xl">Development</h1>
                                                <h5 className="text-sm -mt-4">5</h5>
                                            </div>
                                        </div>
                                    </button>
                                </MagneticLink>

                            </div>


                            {/* ------------------------------------- Type of Buttom Which decide the view of the project-------------------------------------- */}
                            <div className="flex gap-4">
                                {/* List View */}
                                <MagneticLink>
                                    <button
                                        onClick={() => setListView(true)}
                                        className={`w-20 h-20 rounded-full flex items-center justify-center overflow-hidden
      ${listView
                                                ? "bg-black text-white"
                                                : "border-2 border-neutral-200 bg-transparent text-black hover:scale-105"
                                            }
    `}
                                    >
                                        <div
                                            onMouseEnter={listView ? undefined : handleMouseEnterForHover5}
                                            onMouseLeave={listView ? undefined : handleMouseLeaveForHover5}
                                            className="relative flex items-center justify-center w-full h-full"
                                        >
                                            {listView || (
                                                <motion.div
                                                    initial={{ y: "100%" }}
                                                    animate={controls5}
                                                    className="absolute inset-0 z-0 bg-[#455ce9]"
                                                    style={{ borderRadius: "9999px" }}
                                                />
                                            )}

                                            <div className="relative z-10 space-y-1">
                                                <span ref={btnHover51} className={`block font-extralight font-sans w-5 h-[2px] border ${listView ? 'border-white' : 'border-black'}`}></span>
                                                <span ref={btnHover52} className={`block font-extralight font-sans w-5 h-[2px] border ${listView ? 'border-white' : 'border-black'}`}></span>
                                                <span ref={btnHover53} className={`block font-extralight font-sans w-5 h-[2px] border ${listView ? 'border-white' : 'border-black'}`}></span>
                                                <span ref={btnHover54} className={`block font-extralight font-sans w-5 h-[2px] border ${listView ? 'border-white' : 'border-black'}`}></span>
                                            </div>
                                        </div>
                                    </button>
                                </MagneticLink>

                                {/* Grid View */}
                                <MagneticLink>
                                    <button
                                        onClick={() => setListView(false)}
                                        className={`w-20 h-20 rounded-[9999px] overflow-hidden transition-transform
      ${!listView
                                                ? "bg-black text-white"
                                                : "border-2 border-neutral-200 bg-transparent text-black hover:scale-105"
                                            }
    `}
                                    >
                                        <div
                                            onMouseEnter={listView ? handleMouseEnterForHover3 : undefined}
                                            onMouseLeave={listView ? handleMouseLeaveForHover3 : undefined}
                                            className="relative flex items-center justify-center w-full h-full"
                                        >
                                            {listView && (
                                                <motion.div
                                                    initial={{ y: "100%" }}
                                                    animate={controls3}
                                                    className="absolute inset-0 z-0 bg-[#455ce9]"
                                                    style={{ borderRadius: "9999px" }}
                                                />
                                            )}

                                            <div className='relative z-10 grid grid-cols-2 gap-1'>
                                                <span ref={btnHover31} className={`w-2 h-2 border ${!listView ? 'border-white' : 'border-black'}`}></span>
                                                <span ref={btnHover32} className={`w-2 h-2 border ${!listView ? 'border-white' : 'border-black'}`}></span>
                                                <span ref={btnHover33} className={`w-2 h-2 border ${!listView ? 'border-white' : 'border-black'}`}></span>
                                                <span ref={btnHover34} className={`w-2 h-2 border ${!listView ? 'border-white' : 'border-black'}`}></span>
                                            </div>
                                        </div>
                                    </button>
                                </MagneticLink>
                            </div>
                        </div>



                    </div>

                </div>


                {/* -------------------------Make a div section which speed the element and make a Radius decrease of div ---------------------------- */}
                <div className='w-[85vw]'>


                    {/* ---------------------------Conditional rendering---------------------------- */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${listView ? "list" : "grid"}-${activeFilter}`}
                            variants={workWrapper}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                        >
                            {listView ? (
                                <WorkListUi
                                    Projects={
                                        activeFilter === "All"
                                            ? projects
                                            : activeFilter === "design"
                                                ? designProject
                                                : developmentProjects
                                    }
                                />
                            ) : (
                                <WorkGridUi
                                    Projects={
                                        activeFilter === "All"
                                            ? projects
                                            : activeFilter === "design"
                                                ? designProject
                                                : developmentProjects
                                    }
                                />
                            )}
                        </motion.div>
                    </AnimatePresence>

                    <motion.section
                        ref={sectionRef2}
                        className="overflow-hidden pb-8"
                        style={{
                            y,
                            borderTopLeftRadius: 96,
                            borderTopRightRadius: 96,
                            borderBottomLeftRadius: bottomRadius,
                            borderBottomRightRadius: bottomRadius,
                        }}
                    >


                        <div className='flex w-full justify-center items-center mt-20 mb-20'>

                            {/* Button */}
                            <MagneticLink >
                                <button
                                    onClick={()=>{navigate('/archive')}}
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
                    </motion.section>
                </div>
            </div>
            <FullFotter />
        </div >
    );
}