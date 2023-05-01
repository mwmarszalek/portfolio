import React, { Fragment } from "react";
import styles from './ProjectsElement.module.css'

const ProjectsElement = ({ projects, frontBack }) => {
  return (
    <ul className={styles.projectsContainer}>
      {projects.map((project) => (
        <li key={Math.random()} className={styles.listElementProjects}>
          <h2>{project.name}</h2>  
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
                  width="260"
                  height="215"
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

        </li>
      ))}
    </ul>
  );
};

export default ProjectsElement;
