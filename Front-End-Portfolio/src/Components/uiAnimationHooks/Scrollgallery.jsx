import { motion, useScroll, useTransform } from "framer-motion";
import web1 from "../../assets/ProjectPhotosForFrontPage/web1.png"
import web2 from "../../assets/ProjectPhotosForFrontPage/web2.png"
import web3 from "../../assets/ProjectPhotosForFrontPage/web3.png"
import web4 from "../../assets/ProjectPhotosForFrontPage/web4.png"
import web5 from "../../assets/ProjectPhotosForFrontPage/web5.png"
import web6 from "../../assets/ProjectPhotosForFrontPage/web6.png"
import web7 from "../../assets/ProjectPhotosForFrontPage/web7.png"
import web8 from "../../assets/ProjectPhotosForFrontPage/web8.png"
import web9 from "../../assets/ProjectPhotosForFrontPage/web9.png"
import web10 from "../../assets/ProjectPhotosForFrontPage/web10.png"
import web11 from "../../assets/ProjectPhotosForFrontPage/web11.png"
import web12 from "../../assets/ProjectPhotosForFrontPage/web12.png"




const images = [
  web1,
  web2,
  web3,
  web4,
  web5,
  web6,
  web7,
  web8,
  web9,
  web10,
  web11,
  web12,
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
            <Card key={i} src={src} />
          ))}
        </motion.div>

        {/* Row 2 */}
        <motion.div
          style={{ x: rightToLeft }}
          className="grid grid-cols-4 gap-12"
        >
          {images.slice(4, 8).map((src, i) => (
            <Card key={i} src={src} />
          ))}
        </motion.div>

        {/* Row 3 */}
        <motion.div
          style={{ x: leftToRight }}
          className="grid grid-cols-4 gap-12"
        >
          {images.slice(8, 12).map((src, i) => (
             <Card key={i} src={src} />
          ))}
        </motion.div>

      </div>
    </div>
  );
}



function Card({src}){
    return(
        <div className="aspect-16/10 overflow-hidden rounded-xl bg-neutral-100 shadow-sm">
            <img src={src} alt="" className="h-full w-full object-cover" />
        </div>
    )
}
