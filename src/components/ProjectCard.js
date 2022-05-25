import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import useOnScreen from "./utils/useOnScreen";

const phone = require("../img/phone.png");
const worldschooling = require("../img/worldschoolingpopups.jpg");
const wspopups = require("../img/wspopups.png");

const ProjectCard = ({ bgcolor, direction, details }) => {
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
      console.log("on screen!");
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
      className={`${bgcolor} rounded-lg shadow-lg bg-opacity-60`}
      ref={rootRef}
      initial={{
        opacity: 0,
        x: screenSide,
      }}
      animate={controls}
      whileHover={{ scale: 1.1 }}
      onClick={() => setToggle(!isToggled)}
    >
      <div className="relative">
        <img
          src={wspopups}
          alt="phone"
          className={` mx-auto py-10 ${
            !isToggled ? "opacity-100" : "opacity-20"
          } `}
        ></img>
        <AnimatePresence>
          {isToggled ? (
            //! link icon
            <motion.div
              key="detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              className="absolute left-0 top-0 h-full w-full bg-grey rounded-lg outline outline-4 outline-offset-0 outline-red"
            >
              <div className="flex flex-col gap-y-10 justify-center h-full mx-10">
                <h2 className="text-2xl font-bold text-center">
                  {details.title}
                </h2>
                <p className="text-xl text-center">{details.description}</p>
                <a
                  href="https://worldschoolingpopups.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  <p className="text-xl text-center">{details.link}</p>
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
