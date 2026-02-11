import { motion } from "framer-motion";

export default function LoaderPageForSpecificFile({ pageName, onComplete }) {
  return (
    <>
      <motion.div
        className="fixed inset-0 w-full h-full bg-black flex items-center justify-center z-[9999]"
        initial={{
          y: "100%",
        }}
        animate={{
          y: ["100%", "0%", "-100%"],
        }}
        transition={{
          duration: 1.8,
          times: [0, 0.3, 1],
          ease: "easeInOut",
        }}
        onAnimationComplete={onComplete}
      >
        <motion.h1
          className="text-white text-4xl md:text-6xl font-bold tracking-wide uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 1.8,
            times: [0.15, 0.4, 0.9],
            ease: "easeInOut",
          }}
        >
          {pageName}
        </motion.h1>
      </motion.div>
    </>
  );
}
