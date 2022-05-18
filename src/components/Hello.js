import React from "react";
const profilepic = require("../img/profilepic.png");
const downarrow = require("../img/downarrow.png");

const Hello = () => {
  return (
    <div className="h-screen bg-grey">
      <div className="pt-64 mx-32 relative">
        <div className="flex flex-row justify-between">
          <div>
            <div className="relative mb-12">
              <h1 className="text-6xl font-bold">Next Level Webworks</h1>
              <div className="bg-red w-full opacity-30 h-8 absolute -bottom-5 right-0 blur-sm rounded-md"></div>
            </div>
            <div className="relative mb-14">
              <h1 className="text-4xl font-bold">
                Hello! I'm Russell.
                <span className="animate-waving-hand">👋</span>
              </h1>
              <div className="bg-yellow w-full opacity-30 h-8 absolute -bottom-5 right-0 blur-sm rounded-md"></div>
            </div>
            <p className="text-xl">
              I do full stack web development and design.
            </p>
            <p className="text-xl">
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
              className="h-64 rounded-full"
            ></img>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0">
        <img
          src={downarrow}
          alt="downarrow"
          className="animate-bounce h-10 mx-auto"
        ></img>
      </div>
    </div>
  );
};

export default Hello;
