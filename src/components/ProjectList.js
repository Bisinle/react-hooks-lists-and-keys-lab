import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const project = projects.map((project) => {
    return (
      <li key={project.id}>
        {" "}
        <ProjectItem
          name={project.name}
          about={project.about}
          technologies={project.technologies}
        />
      </li>
    );
  });
  return (
    <div id="projects">
      <h2>My Projects</h2>

      <div id="project-list">{project}</div>
    </div>
  );
}

export default ProjectList;
