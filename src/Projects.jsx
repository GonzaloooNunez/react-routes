import React from "react";
import projects from "../data/projects";

const Projects = () => {
  return (
    <div>
      <h1>Proyectos</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.name}</h2>
            <img
              src={project.image}
              alt={project.name}
              style={{ width: "200px", height: "auto" }}
            />
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              Ver proyecto
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
