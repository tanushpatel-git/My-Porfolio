import React, { useEffect, useState } from 'react'
import LoaderAnimation from './Components/LoaderAnimation'
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
    <LoaderAnimation show={showLoader}/>
    </div>
  )
}

export default App