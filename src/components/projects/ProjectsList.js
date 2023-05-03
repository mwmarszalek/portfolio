
import ProjectsElement2 from "./ProjectsElement2";
import styles from './ProjectsList.module.css'

import NavBar from "../../deprecated/NavBar";
import { Fragment } from "react";



const DUMMY_PROJECTS = [
  {
    name: "macrOS",
    videoUrl: "https://youtu.be/Uq3vOsC0IbU",
    link1: "https://github.com/mwmarszalek/MacrOS_frontend",
    link2: "https://github.com/mwmarszalek/MacrOS_backend",
    description:
      `
      MacrOS is the ultimate calorie tracking app, developed by a team where I worked on both front and back-end development. Our beta testers, including a former professional rugby player, love our intuitive design and user-friendly interface. App uses open food API `,
  },
  {
    name: "beeCareful",
    videoUrl: "https://youtu.be/a2FzY71vWYU",
    link1: "https://github.com/mwmarszalek/BeeCareful",
    link2: "",
    description:
      "Beecareful is an app for beekeepers to track hive health, colony status, and weather conditions. Developed as a team project, I worked on front-end and led the design of the user interface. App uses external weather API.",
  },
  {
    name: "Earth Trekker",
    videoUrl: "https://youtu.be/QjBFCylOwjE",
    link1: "https://github.com/mwmarszalek/EarthTrekker",
    link2: "",
    description:
      `Earth Trekker is a travel app for tracking countries and cities you've visited or plan to visit. I developed it solo, using my own travel experience to design the functionality and user interface.`,
  },
];

const Projects = () => {
  return (
      <Fragment>
        <ProjectsElement2
          projects={DUMMY_PROJECTS}
        />
      </Fragment>
  );
};

export default Projects;
