import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "../../Pages/HomePage";
import WorkPage from "../../Pages/WorkPage";
import LoaderPageForSpecificFile from "../CommonCompo/LoaderPageForSpecificFile";

export default function AnimatedRoutes() {
  const location = useLocation();

  const [displayedLocation, setDisplayedLocation] = useState(location);
  const [showLoader, setShowLoader] = useState(false);

  const pageNames = {
    "/": "Home",
    "/work": "Work",
  };

  // Trigger loader when route changes
  useEffect(() => {
    if (location.pathname !== displayedLocation.pathname) {
      setShowLoader(true);
    }
  }, [location, displayedLocation]);

  const handleLoaderComplete = () => {
    //  Switch page immediately after loader ends
    setDisplayedLocation(location);
    setShowLoader(false);
  };

  return (
    <>
      {/* LOADER */}
      <AnimatePresence mode="wait">
        {showLoader && (
          <LoaderPageForSpecificFile
            pageName={pageNames[location.pathname] ?? "Page"}
            onComplete={handleLoaderComplete}
          />
        )}
      </AnimatePresence>

      {/* PAGE RENDER */}
      {!showLoader && (
        <Routes location={displayedLocation}>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
        </Routes>
      )}
    </>
  );
}
