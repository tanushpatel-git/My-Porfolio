import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const fonts = [
  "font-sans",
  "font-serif",
  "font-mono",
  "font-extrabold",
  "italic"
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
          className="fixed inset-0 cursor-wait z-9999 flex items-center justify-center bg-(--loadBg)"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{
            duration: 0.8,
            ease: [0.77, 0, 0.175, 1],
          }}
        >
          <motion.h1
            key={fontIndex}
            className={`text-(--loadText) text-5xl md:text-7xl ${fonts[fontIndex]}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.12 }}
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
