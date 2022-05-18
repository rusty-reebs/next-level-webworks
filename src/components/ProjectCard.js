import React from "react";
const phone = require("../img/phone.png");

const ProjectCard = ({ bgcolor }) => {
  return (
    <div className={`${bgcolor} rounded-lg shadow-lg h-120 opacity-60`}>
      <img src={phone} alt="phone" className="h-full mx-auto"></img>
    </div>
  );
};

export default ProjectCard;
