import { motion, useScroll, useTransform } from "framer-motion";
import { div } from "framer-motion/client";

const images = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
  "/img6.jpg",
  "/img7.jpg",
  "/img8.jpg",
  "/img9.jpg",
  "/img10.jpg",
  "/img11.jpg",
  "/img12.jpg",
];

export default function Scrollgallery() {
  const { scrollYProgress } = useScroll();

  // Scroll-based transforms
  const leftToRight = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const rightToLeft = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);

  return (
    <div className="min-h-[20vh] bg-white px-16 py-24">
      <div className="space-y-24">

        {/* Row 1 */}
        <motion.div
          style={{ x: leftToRight }}
          className="grid grid-cols-4 gap-12"
        >
          {images.slice(0, 4).map((src, i) => (
            // <Card key={i} src={src} />
            <div key={i} className="aspect-16/10 overflow-hidden rounded-xl bg-neutral-100 shadow-sm">Image {i}</div>
          ))}
        </motion.div>

        {/* Row 2 */}
        <motion.div
          style={{ x: rightToLeft }}
          className="grid grid-cols-4 gap-12"
        >
          {images.slice(4, 8).map((src, i) => (
            // <Card key={i} src={src} />
            <div key={i} className="aspect-16/10 overflow-hidden rounded-xl bg-neutral-100 shadow-sm">Image {i}</div>
          ))}
        </motion.div>

        {/* Row 3 */}
        <motion.div
          style={{ x: leftToRight }}
          className="grid grid-cols-4 gap-12"
        >
          {images.slice(8, 12).map((src, i) => (
            // <Card key={i} src={src} />
            <div key={i} className="aspect-16/10 overflow-hidden rounded-xl bg-neutral-100 shadow-sm">Image {i}</div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}

function Card({ src }) {
  return (
    <div className="aspect-16/10 overflow-hidden rounded-xl bg-neutral-100 shadow-sm">
      <img
        src={src}
        alt=""
        className="h-full w-full object-cover"
      />
    </div>
  );
}
