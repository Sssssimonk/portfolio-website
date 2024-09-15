import React from "react";
import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Project 1",
      description:
        "Brief summary of Project 1. This project redirects to an external link.",
      image: "https://via.placeholder.com/300x200",
      link: "https://sssssimonk.github.io/agent_village/", // External link
      external: true,
    },
    {
      title: "Project 2",
      description:
        "Brief summary of Project 2. This project redirects to an internal details page.",
      image: "https://via.placeholder.com/300x200",
      link: "/projects", // Internal link
      external: false,
    },
    // Add more projects as needed
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) =>
          project.external ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-item"
              key={index}
            >
              <img src={project.image} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          ) : (
            <a href={project.link} className="project-item" key={index}>
              <img src={project.image} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          )
        )}
      </div>
    </section>
  );
}

export default Projects;
