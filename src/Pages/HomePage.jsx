import { motion } from "framer-motion";

export default function Component() {
  const date = new Date();

  return (
    <div className="min-h-screen bg-[#F7F6F3] font-sans relative overflow-hidden">
        
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-10 right-14 text-right text-sm"
      >
        <p className="text-gray-500">
          {date.getDate()}{" "}
          {date.toLocaleString("default", { month: "short" })},{" "}
          {date.getFullYear()}
        </p>
        <p className="font-semibold text-gray-800">
          Creative Presentation
        </p>
        <p className="text-gray-500">
          Presented By: Tanush Patel
        </p>
      </motion.div>

      <div className="pt-32 px-10 leading-none">

        <motion.h1
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[18vw] font-black tracking-tight text-[#3F3F3F]"
        >
          PORTO
        </motion.h1>

        <div className="flex items-end">


          <motion.h1
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-[18vw] font-black tracking-tight text-[#3F3F3F]"
          >
            FOLIO
          </motion.h1>


          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-md ml-10 mb-16 text-sm text-gray-500"
          >
            Crafting thoughtful digital experiences through clean code, subtle motion, and purposeful design — where frontend elegance meets backend strength.
          </motion.p>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center"
      >
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-sm text-gray-500 mb-2"
        >
          Scroll Down
        </motion.p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 mx-auto border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-10 left-10 text-sm text-gray-600 space-y-1"
      >
        <p>@TanushPatel</p>
        <p>TanushPatel.com</p>
      </motion.div>


      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="absolute bottom-10 right-14 text-sm text-gray-600 text-right space-y-1"
      >
        <p>hello@TanushPatel.com</p>
        <p>
          Bhopal, Madhya Pradesh, India
        </p>
      </motion.div>
    </div>
  );
}