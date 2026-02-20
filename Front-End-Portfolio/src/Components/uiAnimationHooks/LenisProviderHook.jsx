import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,          // slightly faster scroll
      easing: (t) => 1 - Math.pow(1 - t, 3),
      lerp: 0.08,
      smooth: true,
      smoothTouch: false,
      wheelMultiplier: 1.5,   // makes scroll feel faster
      touchMultiplier: 1.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return children;
}
