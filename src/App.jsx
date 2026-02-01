import React, { useEffect, useState } from 'react'
import LoaderAnimation from './Components/LoaderAnimation'
import HomePage from './Pages/HomePage'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
  const totalTime = 1500;
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, totalTime);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
    <LoaderAnimation show={showLoader}>
      <HomePage />
      <div className='h-screen w-full'></div>
    </LoaderAnimation>
    </div>
  )
}

export default App