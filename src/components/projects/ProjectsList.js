

import ProjectsElement from "./ProjectsElement";
import styles from './ProjectsList.module.css'

import NavBar from "../NavBar";
import { Fragment } from "react";


const DUMMY_PROJECTS = [
  {
    name: "macrOS",
    videoUrl: "https://youtu.be/Uq3vOsC0IbU",
    link1: "https://github.com/mwmarszalek/MacrOS_frontend",
    link2: "https://github.com/mwmarszalek/MacrOS_backend",
    description:
      `
      macrOS is a cool app for tracking calories and nutrition goals. Built with React, Bootstrap`,
  },
  {
    name: "beeCareful",
    videoUrl: "https://youtu.be/a2FzY71vWYU",
    link1: "https://github.com/mwmarszalek/BeeCareful",
    link2: "",
    description:
      "Beecareful is a full-stack app for beehive management. It allows users to track daily inspections, hive health, bee colonies and weather (using external API).",
  },
  {
    name: "Earth Trekker",
    videoUrl: "",
    imgUrl:
      "https://user-images.githubusercontent.com/103493837/235325988-9ec7a23b-b05b-4e9a-bdd8-fe0b2c5e4d31.png",
    link1: "https://github.com/mwmarszalek/EarthTrekker",
    link2: "",
    description:
      "Earth Trekker is my first full-stack CRUD app developed solo over 5 days in Python with Flask and a PostgreSQL database",
  },
];

const Projects = () => {
  return (
      <Fragment>
        <ProjectsElement
          projects={DUMMY_PROJECTS}
          frontBack={["front-end", "back-end"]}
        />
      </Fragment>
  );
};

export default Projects;
