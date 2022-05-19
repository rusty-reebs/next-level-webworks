import React from "react";
const profilepic = require("../img/profilepic.png");
const downArrow = require("../img/downarrow.png");
const gears = require("../img/gears.png");

const Hello = () => {
  return (
    <div className="h-screen bg-grey bg-svg">
      <div className="z-10 pt-20 mx-4 xl:pt-64 xl:mx-32 relative">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          <div>
            <div className="relative mb-12">
              <h1 className="text-5xl xl:text-6xl font-bold">
                Next Level Webworks{" "}
                <img src={gears} alt="logo" className="h-14 inline-block" />
              </h1>
              <div className="bg-red w-full opacity-30 h-8 absolute -bottom-5 right-0 blur-sm rounded-md"></div>
            </div>
            <div className="relative mb-14">
              <h1 className="text-3xl xl:text-4xl font-bold">
                Hello! I'm Russell.
                <span className="animate-waving-hand">👋</span>
              </h1>
              <div className="bg-yellow w-full opacity-30 h-8 absolute -bottom-5 right-0 blur-sm rounded-md"></div>
            </div>
            <p className="text-xl mb-4 xl:mb-0">
              I specialize in full stack web development and design.
            </p>
            <p className="text-xl mb-4 xl:mb-0">
              I create effective and engaging user experiences{" "}
              <span className="text-darkblue font-bold">
                to bring you more business.
              </span>
            </p>
          </div>
          <div>
            <img
              src={profilepic}
              alt="profilepic"
              className="mx-auto xl:mx-0 h-64 rounded-full"
            ></img>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0">
        <img
          src={downArrow}
          alt="downarrow"
          className="animate-bounce h-10 mx-auto"
        ></img>
      </div>
    </div>
  );
};

export default Hello;
