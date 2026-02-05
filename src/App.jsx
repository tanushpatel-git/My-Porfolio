import React, { useEffect, useState } from 'react'
import LoaderAnimation from './Components/LoaderAnimation'
import HomePage from './Pages/HomePage'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MenuBtn from './Components/uiCompo/MenuBtn';
import LenisProviderHook from './Components/uiAnimationHooks/LenisProviderHook';
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
    <div>
      <LoaderAnimation show={showLoader}>
        <LenisProviderHook>
          <div className='relative'>
            <HomePage />
          <MenuBtn/>
        </div>
        <div className='h-screen w-full bg-black relative'></div> 
        </LenisProviderHook>
      </LoaderAnimation>
    </div>
  )
}

export default App