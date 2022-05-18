import React from "react";

const About = () => {
  return (
    <div className="h-screen bg-grey">
      <div className="pt-20 mx-32">
        <div className="relative mb-20 w-44">
          <h2 className="text-4xl font-bold">About</h2>
          <div className="bg-yellow w-full opacity-30 h-8 absolute -bottom-5 right-0 blur-sm rounded-md"></div>
        </div>
        <p className="text-xl">Yada Yada.</p>
      </div>
    </div>
  );
};

export default About;
