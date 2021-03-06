import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import useOnScreen from "./utils/useOnScreen";
import link from "../img/link.svg";

const ProjectCard = ({ bgcolor, outline, direction, details }) => {
  const [isToggled, setToggle] = useState(false);
  const controls = useAnimation();
  const rootRef = useRef();
  const onScreen = useOnScreen(rootRef);

  let screenSide;
  if (direction === "fromLeft") {
    screenSide = "-100%";
  }
  if (direction === "fromRight") {
    screenSide = "100%";
  }

  useEffect(() => {
    if (onScreen) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          delay: 0.2,
          duration: 1.5,
          ease: "easeOut",
        },
      });
    }
  }, [onScreen, controls]);
  return (
    <motion.div
      className={`${bgcolor} rounded-lg shadow-lg bg-opacity-60 w-full ${
        details.landscape ? "xl:w-fit" : "xl:w-1/3"
      }`}
      ref={rootRef}
      initial={{
        opacity: 0,
        x: screenSide,
      }}
      animate={controls}
      whileHover={{ scale: 1.05 }}
      onClick={() => setToggle(!isToggled)}
    >
      <div className="relative">
        <img
          src={details.image}
          alt={details.link}
          className={` mx-auto py-5 xl:py-10 px-5 xl:px-0 max-h-[26rem] xl:h-[32rem] ${
            !isToggled ? "opacity-100" : "opacity-20"
          } `}
        ></img>
        <AnimatePresence>
          {isToggled ? (
            <motion.div
              key="detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              className={` absolute left-0 top-0 h-full w-full bg-grey rounded-lg outline outline-4 outline-offset-0 ${outline} `}
            >
              <div className="flex flex-col gap-y-10 justify-center h-full mx-auto">
                <h2 className="text-xl font-bold text-center">
                  {details.title}
                </h2>
                <p className="text-xl text-center">{details.description}</p>
                <a href={details.url} target="_blank" rel="noopener noreferrer">
                  <p className="text-xl text-center">
                    <img src={link} alt="link" className="inline h-4" />
                    &nbsp;&nbsp;
                    <span className="underline">{details.link}</span>
                  </p>
                </a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      {/* <img src={phone} alt="phone" className="h-full mx-auto"></img> */}
    </motion.div>
  );
};

export default ProjectCard;
