import React, { useEffect, useState } from 'react'
import LoaderAnimation from './Components/LoaderAnimation'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MenuBtn from './Components/uiCompo/MenuBtn';
import LenisProviderHook from './Components/uiAnimationHooks/LenisProviderHook';
import AnimatedRoutes from './Components/uiAnimationHooks/AnimationRoutes';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const totalTime = 1500;
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, totalTime);
    return () => clearTimeout(timer);
  }, []);

  return (
      <LoaderAnimation show={showLoader}>
        <LenisProviderHook>
          <AnimatedRoutes />
          <MenuBtn />
        </LenisProviderHook>
      </LoaderAnimation>
  )
}

export default App

