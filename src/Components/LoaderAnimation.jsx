import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const fonts = [
  "font-sans",
  "font-serif", 
  "font-mono",
  "font-bold",
  "italic",
];

const NameLoader = ({ children, show, name = "Tanush" }) => {
  const [fontIndex, setFontIndex] = useState(0);

  useEffect(() => {
    if (!show) return;

    const interval = setInterval(() => {
      setFontIndex((prev) => (prev + 1) % fonts.length);
    }, 150);

    return () => clearInterval(interval);
  }, [show]);

  return (
    <>
      <AnimatePresence mode="wait">
  {show && (
    <motion.div
      className="fixed inset-0 z-999 flex items-center justify-center bg-(--loadBg)"
      initial={{
        y: 0,
        clipPath: "inset(0% 0% 0% 0%) round 0%", // flat corners
      }}
      animate={{
        y: 0,
        clipPath: "inset(0% 0% 0% 0%) round 0%", // stays flat
      }}
      exit={{
        y: "-150%", // smooth upward movement
        clipPath: "inset(0% 0% 0% 0%) round [100%]", // corners fully curved
        opacity: 0.98,
        transition: {
          duration: 3,
          ease: [0.16, 1, 0.3, 1], // smooth easeOut
        },
      }}
      transition={{
        duration: 1,
        ease: "easeOut"
      }}
    >
      <motion.h1
        key={fontIndex}
        className={`text-(--loadText) text-5xl md:text-7xl ${fonts[fontIndex]}`}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
        {name}
      </motion.h1>
    </motion.div>
  )}
</AnimatePresence>



      {!show && children}
    </>
  );
};

export default NameLoader;
