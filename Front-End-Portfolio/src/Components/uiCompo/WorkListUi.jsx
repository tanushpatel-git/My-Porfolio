import { useRef, useState } from "react";


export default function WorkListUi({Projects}) {


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


    return (
        < section className="max-w-7xl mx-auto px-6 cursor-pointer" >
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
                                        src={Projects[activeIndex].image}
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
                    {Projects.map((project, index) => (
                        <div
                            key={project.title}
                            onMouseEnter={() => handleProjectEnter(index)}
                            className={`mt-15 border-t pt-13 flex justify-around gap-8 items-start ${index === project.length - 1 ? "border-b border-b-neutral-800 pb-13" : ""}`}
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
        </section >
    );
}