import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import useOnScreen from "./utils/useOnScreen";

const phone = require("../img/phone.png");
const worldschooling = require("../img/worldschoolingpopups.jpg");
const wspopups = require("../img/wspopups.png");

const ProjectCard = ({ bgcolor, direction }) => {
  const controls = useAnimation();
  const rootRef = useRef();
  const onScreen = useOnScreen(rootRef);
  let screenSide;
  if (direction === "fromLeft") {
    // screenSide = "-20rem";
    screenSide = "-100%";
  }
  if (direction === "fromRight") {
    // screenSide = "20rem";
    screenSide = "100%";
  }

  useEffect(() => {
    if (onScreen) {
      console.log("on screen!");
      controls.start({
        x: 0,
        opacity: 1,
        // transition: {
        //   duration: 1.5,
        //   ease: "easeOut",
        // },
      });
    }
  }, [onScreen, controls]);
  return (
    <motion.div
      className={`${bgcolor} rounded-lg shadow-lg bg-opacity-60 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`}
      ref={rootRef}
      initial={{
        opacity: 0,
        x: screenSide,
      }}
      animate={controls}
      //   whileHover={{ scale: 1.2 }}
    >
      <img
        src={wspopups}
        alt="phone"
        className="mx-auto py-10 opacity-100"
      ></img>
      {/* <img src={phone} alt="phone" className="h-full mx-auto"></img> */}
    </motion.div>
  );
};

export default ProjectCard;
