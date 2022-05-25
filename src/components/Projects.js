import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./utils/projects";

const Projects = () => {
  return (
    <div className="max-h-max bg-grey overflow-hidden">
      <div className="pt-20 mx-4 xl:mx-32">
        <div className="relative mb-20">
          <h2 className="text-3xl xl:text-4xl font-bold">
            Projects
            <p className="inline-block text-lg italic">&nbsp;Click them!</p>
          </h2>
          <div className="bg-darkblue w-full opacity-30 h-8 absolute -bottom-5 right-0 blur-sm rounded-md"></div>
        </div>
        <div className="flex flex-col mx-3 gap-8 mb-14 xl:grid xl:grid-cols-2 xl:gap-14">
          <ProjectCard
            bgcolor="bg-red"
            direction="fromLeft"
            details={projects[0]}
          />
          <ProjectCard bgcolor="bg-lightblue" direction="fromRight" />
          <ProjectCard bgcolor="bg-yellow" direction="fromLeft" />
          <ProjectCard bgcolor="bg-darkblue" direction="fromRight" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
