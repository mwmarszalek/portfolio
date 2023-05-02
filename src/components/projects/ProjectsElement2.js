import React from "react";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const ProjectsElement2 = ({ projects }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center" style={{ height: "100vh",overflow:'auto' }}>
      <div className="d-flex flex-wrap justify-content-around">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="mb-4"
            style={{ width: "18rem", backgroundColor: "#212529", color: "white", margin:'1em' }}
          >
            {project.imgUrl ? (
              <Card.Img variant="top" src={project.imgUrl} />
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
              <Card.Title>{project.name}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
              <div className="d-flex justify-content-between align-items-center">
                <Button variant="primary" href={project.link1} target="_blank">
                  {project.name === "macrOS" ? <>Front-end: <FontAwesomeIcon icon={faGithub} /></> : <>Code: <FontAwesomeIcon icon={faGithub} /> </>}
                </Button>
                {project.link2 && (
                  <Button variant="primary" href={project.link2} target="_blank">
                    Back-end <FontAwesomeIcon icon={faGithub} />
                  </Button>
                )}
                {project.videoUrl && (
                  <Button variant="danger" href={project.videoUrl} target="_blank">
                    Preview <FontAwesomeIcon icon={faYoutube} />
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
