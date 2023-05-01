import React, { Fragment, useState } from "react";
import styles from "./Home.module.css";

import NavBar2 from "../components/NavBar2";
import Projects from "../components/projects/ProjectsList";
import About from "../components/About";
import Hello from "../components/Hello";
import Contact from "../components/Contact";



const Home = () => {
  const [firstLoad, setFirstLoad] = useState(true);

  const handleClick = () => {
    setFirstLoad(false);
  };



  return (
    <div className={firstLoad ? `${styles.hello}`: `${styles.main}`}>
      {firstLoad && <Hello onClick={handleClick} />}
      {!firstLoad && (
        <div>
          <NavBar2 />
          <About />
          <Projects />
          <Contact />
        </div>
      )}
    </div>
  );
};

export default Home;
