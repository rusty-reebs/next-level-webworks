import React from "react";

const About = () => {
  return (
    <div className="h-screen bg-grey">
      <div className="pt-20 mx-4 xl:mx-32">
        <div className="relative mb-20">
          <h2 className="text-3xl xl:text-4xl font-bold">
            About
            <p className="inline-block text-lg font-normal italic pl-4">
              &nbsp;Why work with me?
            </p>
          </h2>
          <div className="bg-yellow w-4/5 xl:w-1/3 opacity-30 h-4 absolute -bottom-5 left-0 blur-sm rounded-md"></div>
        </div>
        <div className="flex flex-col gap-y-5 text-xl max-w-prose">
          <p>
            I'm a full stack web developer with an eye for clean, practical
            webpage designs.
          </p>
          <p>
            I can build a product to suit your needs -- everything from a
            landing page (like this one you're reading!) to a multi-page
            website.
          </p>
          <p>
            I offer a complete suite of web services: design, coding, hosting,
            and maintenance.
          </p>
          <div className="relative">
            <p className="text-2xl font-bold tracking-wider">
              My goal is to exceed your expectations.
            </p>
            <div className="bg-red w-2/3 opacity-30 h-4 absolute -bottom-2 left-0 blur-sm rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
