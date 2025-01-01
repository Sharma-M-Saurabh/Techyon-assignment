import React from "react";
import ProjectCard from "./Card";

const ProjectSection = ({ title, projects }) => {
  return (
    <section className="">
      {/* <h3>{title}</h3> */}
      <div className="projects">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
