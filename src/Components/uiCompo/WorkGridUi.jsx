import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { createPortal } from "react-dom";


export default function WorkGridUi({ Projects }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 px-20 pt-24 pb-10">
            {Projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
}
function ProjectCard({ project }) {
    const [hovered, setHovered] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const CIRCLE_SIZE = 120;

    // Smooth delayed movement
    const smoothX = useSpring(mouseX, {
        stiffness: 120,
        damping: 25,
        mass: 0.6,
    });

    const smoothY = useSpring(mouseY, {
        stiffness: 120,
        damping: 25,
        mass: 0.6,
    });

    useEffect(() => {
        if (!hovered) return;

        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [hovered]);

    const handleMouseEnter = (e) => {
        setHovered(true);
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Image */}
            <motion.div
                className="overflow-hidden h-[420px] w-full border-b border-gray-500"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Floating Cursor */}
            {hovered &&
                createPortal(
                    <motion.div
                        className="
                fixed z-9999
                flex items-center justify-center
                rounded-full
                backdrop-blur-xl
                bg-[#455ce9]
                text-white text-sm font-medium
                pointer-events-none
                -translate-x-1/2 -translate-y-1/2
            "
                        style={{
                            width: CIRCLE_SIZE,
                            height: CIRCLE_SIZE,
                            left: 30,
                            top: 30,
                            x: smoothX,
                            y: smoothY,
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ scale: { duration: 0.25 } }}
                    >
                        View
                    </motion.div>,
                    document.body
                )}



            {/* Text */}
            <div className="mt-6 flex justify-between items-start">
                <div>
                    <h3 className="text-xl font-medium">{project.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                        {project.projectDiscription}
                    </p>
                </div>
                <span className="text-sm text-gray-400">{project.year}</span>
            </div>
        </div>
    );
}

