import React from "react";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import macrosImage from "../../assets/macrosTitlePlay.jpeg";
import beeImage from "../../assets/beeCarefulTitlePlay.jpeg";
import earthImage from "../../assets/earthTrekkerTitlePlay.jpeg";
import styles from './ProjectsElement.module.css'

const ProjectsElement2 = ({ projects }) => {
  const macrosStack = (
    <span
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "1em",
        paddingTop: "2vh",
      }}
    >
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        height="25px"
      />
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
        height="25px"
      />{" "}
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
        height="25px"
      />
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg"
        height="25px"
      />
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
        height="25px"
      />
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
        height="25px"
      />
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
        height="25px"
      />
    </span>
  );



  const beecarefulStack = (
    <span
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "1em",
        paddingTop: "2vh",
      }}
    >
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        height="25px"
      />
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
        height="25px"
      />{" "}
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
        height="25px"
      />
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
        height="25px"
      />
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
        height="25px"
      />
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
        height="25px"
      />
    </span>
  );

  const earthtrekkerStack = (
    <span
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "1em",
        paddingTop: "2vh",
      }}
    >
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
        height="25px"
      />
      <img
        src="https://user-images.githubusercontent.com/108957679/221864279-fa907251-bad8-465a-b682-537dc92940dc.png"
        height="25px"
      />{" "}
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
        height="25px"
      />
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
        height="25px"
      />
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
        height="25px"
      />
    </span>
  );



  return (
    <div
      className="d-flex flex-wrap justify-content-center align-items-center projectContainer"
      style={{ height: "100vh", overflow: "auto", paddingTop: '5vh' }}
    >
      <div className="d-flex flex-wrap justify-content-around">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="mb-4"
            style={{
              width: "20rem",
              backgroundColor: "#212529",
              color: "white",
              margin: "1em",
              
            }}
          >
            {project.name === "macrOS" ? (
              <a href={project.videoUrl} target="_blank">
                <Card.Img variant="top" src={macrosImage} style={{ height: "30vh" }} />
              </a>
            ) : project.name === "beeCareful" ? (
              <a href={project.videoUrl} target="_blank">
                <Card.Img variant="top" src={beeImage} style={{ height: "30vh" }} />
              </a>
            ) : project.name === "Earth Trekker" ? (
              <a href={project.videoUrl} target="_blank">
                <Card.Img
                  variant="top"
                  src={earthImage}
                  style={{ height: "30vh" }}
                />
              </a>
            ) : (
              <div
                style={{
                  height: "10rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                No image available
              </div>
            )}

            <Card.Body>
              <Card.Title ><h3  style={{fontWeight: 'bold', textAlign: 'center', margin:'0'}}>{project.name}</h3></Card.Title>
              <Card.Text>
                <div style={{fontSize: '.8rem'}}>{project.description}</div>
               
                {project.name === "macrOS" ? (
              <div style={{paddingBottom: '1rem'}}>{macrosStack}</div>
            ) : project.name === "beeCareful" ? (
              <div style={{paddingBottom: '2rem'}}>{beecarefulStack}</div>
            ) : project.name === "Earth Trekker" ? (
              <div style={{paddingBottom: '3rem'}}>{earthtrekkerStack}</div>
            ) : (
              <div
                style={{
                  height: "10rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                No image available
              </div>
            )}
              </Card.Text>
              <div className="d-flex justify-content-center align-items-center">
                <Button variant="primary" href={project.link1} target="_blank" style={{backgroundColor: "#8F38AC", borderColor: 'grey', fontWeight: 'bolder'}} >
                  {project.name === "macrOS" ? (
                    <div className={styles.button}>
                      Front-end: <FontAwesomeIcon icon={faGithub} />
                    </div>
                  ) : (
                    <div className={styles.buttonCode}>
                      Code: <FontAwesomeIcon icon={faGithub} />{" "}
                    </div>
                  )}
                </Button>
                {project.link2 && (
                  <Button
                    variant="primary"
                    href={project.link2}
                    target="_blank"
                    style={{marginLeft: "1rem", backgroundColor: "#8F38AC", borderColor: 'grey', fontWeight: 'bolder'}}
                  >
                    <div className={styles.button} >
                   Back-end <FontAwesomeIcon icon={faGithub} />
                    </div>
                  </Button>
                )}
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsElement2;
