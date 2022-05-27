import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./utils/projects";

const Projects = () => {
  return (
    <div className="bg-grey overflow-hidden">
      <div className="pt-20 mx-4 xl:mx-32">
        <div className="relative mb-20">
          <h2 className="text-3xl xl:text-4xl font-bold">
            Projects
            <p className="inline-block text-lg font-normal italic pl-4">
              &nbsp;Click them!
            </p>
          </h2>
          <div className="bg-darkblue w-4/5 xl:w-1/3 opacity-30 h-4 absolute -bottom-5 left-0 blur-sm rounded-md"></div>
        </div>
        {/* <div className="flex flex-col mx-3 gap-8 mb-14 xl:grid xl:grid-cols-2 xl:gap-14"> */}
        <div className="flex flex-col gap-y-6 xl:mx-3 xl:gap-12 mb-14 xl:columns-2">
          <div className="flex flex-col gap-y-6 xl:flex xl:flex-row xl:gap-x-12">
            <ProjectCard
              bgcolor="bg-red"
              outline="outline-red"
              direction="fromLeft"
              details={projects[0]}
            />
            <ProjectCard
              bgcolor="bg-lightblue"
              outline="outline-lightblue"
              direction="fromRight"
              details={projects[1]}
            />
          </div>
          <div className="flex flex-col-reverse space-y-reverse space-y-6 xl:flex xl:flex-row xl:gap-x-12 xl:space-y-0">
            <ProjectCard
              bgcolor="bg-yellow"
              outline="outline-yellow"
              direction="fromLeft"
              details={projects[1]}
            />
            <ProjectCard
              bgcolor="bg-darkblue"
              outline="outline-darkblue"
              direction="fromRight"
              details={projects[0]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
