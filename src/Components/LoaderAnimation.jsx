import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const helloLanguages = [
  { text: "Hello", lang: "English" },
  { text: "नमस्ते", lang: "Hindi" },
  { text: "Bonjour", lang: "French" },
  { text: "Hola", lang: "Spanish" },
  { text: "Ciao", lang: "Italian" },
  { text: "こんにちは", lang: "Japanese" },
  { text: "Hallo", lang: "German" },
  { text: "你好", lang: "Chinese" },
];

const fonts = [
  "font-ui",
  "font-classic",
  "font-typewriter",
  "font-humanist",
  "font-poster",
  "font-script",
];

const getFontFamily = (fontClass) => {
  const fontMap = {
    "font-ui": "system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
    "font-classic": "'Times New Roman', Times, serif",
    "font-typewriter": "'Courier New', Courier, monospace",
    "font-humanist": "Tahoma, Verdana, Geneva, sans-serif",
    "font-poster": "Impact, 'Arial Black', sans-serif",
    "font-script": "'Comic Sans MS', 'Comic Neue', cursive",
  };
  return fontMap[fontClass] || "system-ui, sans-serif";
};

const NameLoader = ({ children, show, name = "Hello" }) => {
  const [languageIndex, setLanguageIndex] = useState(0);
  const [fontIndex, setFontIndex] = useState(0);

  useEffect(() => {
    if (!show) return;

    const interval = setInterval(() => {
      setLanguageIndex((prev) => (prev + 1) % helloLanguages.length);
      // Also cycle fonts for visual variety
      setFontIndex((prev) => (prev + 1) % fonts.length);
    }, 200); // Slightly slower to allow reading each language

    return () => clearInterval(interval);
  }, [show]);

  return (
    <>
      <AnimatePresence mode="wait">
  {show && (
    <motion.div
      className="fixed cursor-progress inset-0 z-999 flex items-center justify-center bg-[#141517]"
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
        clipPath: "inset(0% 0% 300% 300%) round 300%", // more pronounced curved corners
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
      <div className="flex justify-center items-center gap-3">
      <div className="bg-[#f1f1f1] w-4 h-4 rounded-full"/>
        <motion.h1
        key={languageIndex}
        className={`text-[#f1f1f1] text-5xl md:text-7xl ${fonts[fontIndex]}`}
        style={{ fontFamily: getFontFamily(fonts[fontIndex]) }}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.2, ease:"easeOut" }}
      >
        {helloLanguages[languageIndex].text}
      </motion.h1>
      </div>
    </motion.div>
  )}
</AnimatePresence>



      {!show && children}
    </>
  );
};

export default NameLoader;
