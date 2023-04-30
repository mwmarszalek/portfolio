import { Fragment, useState } from "react";

import ProjectsElement from "./ProjectsElement";

import NavBar from "../NavBar";


const DUMMY_PROJECTS = [
  {
    name: "macrOS",
    videoUrl: "https://youtu.be/Uq3vOsC0IbU",
    link1: "https://github.com/mwmarszalek/MacrOS_frontend",
    link2: "https://github.com/mwmarszalek/MacrOS_backend",
    description:
      "MacrOS is a full-stack calorie tracking application, with functionality allowing users set nutrition goals, track and view their daily food/calorie/macro intake and monitor their progress over time. It was developed as a team project over 14 days using Javascript, React and Bootstrap, with a Java Spring Boot server and a PostgreSQL database. I took a lead on programming the onboarding and registration process. Since development it has been beta tested by a number of fitness enthusiasts including a former professional rugby player who say that the user experience and quality of tracking put it leagues ahead of its main competitor myfitnesspal.",
  },
  {
    name: "beeCareful",
    videoUrl: "https://youtu.be/a2FzY71vWYU",
    link1: "https://github.com/mwmarszalek/BeeCareful",
    link2: "",
    description:
      "Beecareful is a full-stack app for beehive management. It allows users to track daily inspections, hive health, bee colonies and weather (using external API). It was developed as a team project over 7 days using React and javascript with an Express server and a MongoDB database. We developed the app using feedback from an experienced apiarist looking to improve on current applications available on the market and was tested with his colonies after development. I took the lead on designing the React front-end (components hierarchy and relationships and UX). It received very positive feedback from users who praised the user interface.",
  },
  {
    name: "Earth Trekker",
    videoUrl: "",
    imgUrl:
      "https://user-images.githubusercontent.com/103493837/235325988-9ec7a23b-b05b-4e9a-bdd8-fe0b2c5e4d31.png",
    link1: "https://github.com/mwmarszalek/EarthTrekker",
    link2: "",
    description:
      "Earth Trekker is my first full-stack CRUD app developed solo over 5 days in Python with Flask and a PostgreSQL database which allows users to track countries and cities they visited or plan to visit. I drew from my own experience as a seasoned traveller to design the functionality and user interface.",
  },
];

const Projects = () => {
  return (
    <Fragment>
      <span>
        <ProjectsElement
          projects={DUMMY_PROJECTS}
          frontBack={["front-end", "back-end"]}
        />
      </span>
    </Fragment>
  );
};

export default Projects;
