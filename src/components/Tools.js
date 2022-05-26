import React from "react";

import amazon from "../img/amazonwebservices-original.svg";
import canva from "../img/canva-original.svg";
import css3 from "../img/css3-original.svg";
import figma from "../img/figma-original.svg";
import firebase from "../img/firebase-plain.svg";
import html from "../img/html5-original.svg";
import javascript from "../img/javascript-original.svg";
import mongodb from "../img/mongodb-original.svg";
import nodejs from "../img/nodejs-original-wordmark.svg";
import react from "../img/react-original.svg";
import tailwind from "../img/tailwindcss-plain.svg";
import webpack from "../img/webpack-original.svg";

const svg = [
  {
    name: "Figma",
    image: figma,
  },
  {
    name: "Canva",
    image: canva,
  },
  {
    name: "JavaScript",
    image: javascript,
  },
  {
    name: "React",
    image: react,
  },
  {
    name: "HTML5",
    image: html,
  },
  {
    name: "CSS3",
    image: css3,
  },
  {
    name: "Tailwind",
    image: tailwind,
  },
  {
    name: "AWS",
    image: amazon,
  },
  {
    name: "Firebase",
    image: firebase,
  },
  {
    name: "Node.js",
    image: nodejs,
  },
  {
    name: "MongoDB",
    image: mongodb,
  },
  {
    name: "webpack",
    image: webpack,
  },
];

const Tools = () => {
  return (
    <div className="h-screen bg-grey">
      <div className="pt-20 mx-4 xl:mx-32">
        <div className="relative mb-20 w-44">
          <h2 className="text-3xl xl:text-4xl font-bold">Tools</h2>
          {/* //! Always using the latest tech */}
          <div className="bg-darkblue w-full opacity-30 h-8 absolute -bottom-5 right-0 blur-sm rounded-md"></div>
        </div>
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 xl:grid-cols-6 xl:gap-x-10 xl:gap-y-10 xl:h-36">
          {svg.map((svg, index) => (
            <div
              key={index}
              className="flex flex-col shadow-md rounded-md h-32 justify-center"
            >
              <img src={svg.image} alt={svg.name} className="h-16" />
              <p className="text-center">{svg.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
