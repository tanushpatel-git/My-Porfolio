import Navbar from "../Components/CommonCompo/Navbar";
import { motion, AnimatePresence } from 'framer-motion'
import WorkListUi from "../Components/uiCompo/WorkListUi";
import FullFotter from '../Components/CommonCompo/FullFotter'

export default function ArchivePage() {

  //make a line coming effect 
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15, // delay between lines
      },
    },
  };

  const line = {
    hidden: {
      y: 120, // start from bottom
    },
    show: {
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1], // smooth upward ease
      },
    },
  };


  //aniimation of worklist 
  const workWrapper = {
    hidden: {
      y: 120,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: [0, 0, 1], // opacity only at the end
      transition: {
        y: {
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        },
        opacity: {
          duration: 0.4,
          times: [0, 0.85, 1],
          ease: "easeOut",
        },
      },
    },
  };


  const ArchiveProject = [
    { title: "Tic Tak Tow", image: "orderMate", projectDiscription: "Game Development", year: "2024" },
    { title: "Mc Donald Order System", image: "k72", projectDiscription: "Intraction & Development", year: "2024" },
  ]


  return (
    <>
      <div className="min-h-screen w-full bg-white">
        <Navbar
          colorInNavabar="black"
        />

        <div className='min-h-screen flex flex-col items-center justify-center z-10'>
          <div className='relative h-full w-[80vw] top-40'>
            <div className="w-full h-full bg-white px-18">


              {/* -------------------------------- Heading -----------------------------*/}
              <motion.h1
                className="text-[90px] font-medium font-sans leading-[1.1] text-[#1C1D20] overflow-hidden"
                variants={container}
                initial="hidden"
                animate="show"
              >
                <motion.span
                  className="block overflow-hidden"
                  variants={line}
                >
                  Archive
                </motion.span>
              </motion.h1>
            </div>
            {/* -------------------------Make a div section which speed the element and make a Radius decrease of div ---------------------------- */}
            <div className='w-[85vw] pt-20'>
              {/* ---------------------------Conditional rendering---------------------------- */}
              <AnimatePresence mode="wait">
                <motion.div
                  className="pb-30"
                  key={"list"}
                  variants={workWrapper}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                >
                  <WorkListUi
                    Projects={ArchiveProject}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
        <div className="pt-30">
          <FullFotter />
        </div>
      </div>
    </>
  );
}