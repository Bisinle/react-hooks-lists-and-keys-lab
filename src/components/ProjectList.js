import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const user = projects.map((user) => {
    return (
      <li key={user.id}>
        {" "}
        <ProjectItem
          name={user.name}
          about={user.about}
          technologies={user.technologies}
        />
      </li>
    );
  });
  return (
    <div id="projects">
      <h2>My Projects</h2>

      <div id="project-list">{user}</div>
    </div>
  );
}

export default ProjectList;
