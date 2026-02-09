import { motion } from "framer-motion";

export function WordAnimationHook({ text, className }) {


    const textContainer = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.04, // word delay
            },
        },      
    };

    const wordAnimation = {
        hidden: {
            y: 30,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.34, 1.0, 0.64, 1.0],
            },
        },
        once: false,
    };

    return (
        <motion.div
            variants={textContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-120px" }}
            className={className}
        >
            {text.split(" ").map((word, i) => (
                <motion.span
                    key={i}
                    variants={wordAnimation}
                    className="inline-block mr-2"
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
}
