import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const fonts = [
  "font-sans",
  "font-serif",
  "font-mono",
  "font-extrabold",
  "italic"
];

const NameLoader = ({ show, name = "Tanush Patel" }) => {
  const [fontIndex, setFontIndex] = useState(0);
  useEffect(() => {
    if (!show) return;

    const interval = setInterval(() => {
      setFontIndex((prev) => (prev + 1) % fonts.length);
    }, 150);

    return () => clearInterval(interval);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-9999 flex items-center justify-center bg-[#ede0d4]"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{
            duration: 0.8,
            ease: [0.77, 0, 0.175, 1]
          }}
        >
          <motion.h1
            key={fontIndex}
            className={`text-[#7f5539] text-5xl md:text-7xl ${fonts[fontIndex]}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
          >
            {name}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NameLoader;
