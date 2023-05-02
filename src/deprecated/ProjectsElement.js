import React, { Fragment } from "react";
import styles from "./ProjectsElement.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectsElement = ({ projects}) => {
  return (
    <ul className={styles.projectsContainer}>
      {projects.map((project) => (
        <li key={Math.random()} className={styles.listElementProjects}>
          <div className={styles.projectTitleGit}>
            <h2 style={{ display: "inline-block" }}>{project.name}</h2>
            <a
              style={{ display: "inline-block" }}
              href={project.link1}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.name === "macrOS" ? (
                <span>
                  Front-end: <FontAwesomeIcon icon={faGithub} />
                </span>
              ) : (
                <FontAwesomeIcon icon={faGithub} />
              )}
            </a>
            {project.link2 && (
              <a
                style={{ display: "inline-block" }}
                href={project.link2}
                target="_blank"
                rel="noopener noreferrer"
              >
                Back-end: <FontAwesomeIcon icon={faGithub} />
              </a>
            )}
          </div>
          <li style={{textAlign: 'center'}}>{project.description}</li>

          {project.videoUrl && (
            <li style={{textAlign: 'center'}}  >
              <iframe
                src={`https://www.youtube.com/embed/${project.videoUrl
                  .split("/")
                  .pop()}?proxy=true`}
                width="260"
                height="215"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                id="imagesGroup"
              />
            </li>
          )}
          {project.imgUrl ? (
            <li>
              <img src={project.imgUrl} id="imagesGroup" />
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
