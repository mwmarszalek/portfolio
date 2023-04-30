import React, { Fragment } from "react";

const ProjectsElement = ({ projects, frontBack }) => {
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.name}>
          <h2>{project.name}</h2>
          <ul>
            <li>
              <strong>Description: </strong>
              {project.description}
            </li>
            <li>
              <a href={project.link1} target="_blank" rel="noopener noreferrer">
                {project.name === "macrOS" ? "Github front-end" : "Github"}
              </a>
            </li>
            {project.link2 && (
              <li>
                <a
                  href={project.link2}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Back-end
                </a>
              </li>
            )}
            {project.videoUrl && (
              <li>
                <iframe
                  src={`https://www.youtube.com/embed/${project.videoUrl
                    .split("/")
                    .pop()}?proxy=true`}
                  width="560"
                  height="315"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </li>
            )}
            {project.imgUrl ? (
              <li>
                <img src={project.imgUrl} width="560" height="315" />
              </li>
            ) : (
              ""
            )}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default ProjectsElement;
