import React, { Fragment, useState } from "react";
import NavBar from "../components/NavBar";
import Projects from "../components/projects/ProjectsList";
import About from "../components/About";
import Hello from "../components/Hello";

import styles from "./Home.module.css";
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
        <div className={styles.main}>
          <NavBar />
          <About />
          <Projects />
          <Contact />
        </div>
      )}
    </div>
  );
};

export default Home;
