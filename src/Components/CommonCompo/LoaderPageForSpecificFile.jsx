import { motion } from "framer-motion";

export default function LoaderPageForSpecificFile({ pageName, onComplete }) {
  return (
    <motion.div
      className="fixed overflow-hidden cursor-progress inset-0 w-full h-full bg-[#141517] flex items-center justify-center z-9999"
      initial={{ y: "100%" }}
      animate={{ y: ["100%", "0%", "-100%"] }}
      transition={{
        duration: 1.3,
        times: [0, 0.3, 1],
        ease: "easeInOut",
      }}
      onAnimationComplete={onComplete}
    >

      {/* Page name text, fading in/out on top of the SVG */}
      <motion.h1
        className="absolute text-(--loadText) text-6xl md:text-8xl font-sans tracking-wide uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 1.5,
          times: [0.15, 0.4, 0.9],
          ease: "easeInOut",
        }}
      >
        {pageName}
      </motion.h1>
    </motion.div>
  );
}
