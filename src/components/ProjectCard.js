import React from "react";
const phone = require("../img/phone.png");
const worldschooling = require("../img/worldschoolingpopups.jpg");
const wspopups = require("../img/wspopups.png");

const ProjectCard = ({ bgcolor }) => {
  return (
    <div
      className={`${bgcolor} rounded-lg shadow-lg bg-opacity-60 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`}
    >
      <img
        src={wspopups}
        alt="phone"
        className="mx-auto py-10 opacity-100"
      ></img>
      {/* <img src={phone} alt="phone" className="h-full mx-auto"></img> */}
    </div>
  );
};

export default ProjectCard;
