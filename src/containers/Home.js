import React, { Fragment, useState, useEffect, useRef } from "react";
import styles from "./Home.module.css";

import NavBar3 from "../components/NavBar3";
import Projects from "../components/projects/ProjectsList";
import About from "../components/About";
import Hello from "../components/Hello";
import Contact from "../components/Contact";
import Stack from "../components/Stack";

const Home = () => {
  const [firstLoad, setFirstLoad] = useState(true);

  const handleClick = () => {
    setFirstLoad(false);
  };

  const aboutRef = useRef(null);

  useEffect(() => {
    if (!firstLoad && aboutRef.current) {
      // Check if the user is not on a mobile device
      if (window.innerWidth > 768) {
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [firstLoad]);

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projectsRef = useRef(null);
  const stackRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="containerIphoneFix">
    <div className={firstLoad ? `${styles.hello}` : `${styles.main}`}>
      {firstLoad && <Hello onClick={handleClick} />}
      {!firstLoad && (
        <div>
          <NavBar3
            scrollToAbout={() => scrollToRef(aboutRef)}
            scrollToProjects={() => scrollToRef(projectsRef)}
            scrollToStack={() => scrollToRef(stackRef)}
            scrollToContact={() => scrollToRef(contactRef)}
          />
          <div ref={aboutRef} id="home">
            <About />
          </div>
          <div ref={projectsRef}>
            <Projects />
          </div>
          <div ref={stackRef}>
            <Stack />
          </div>
          <div ref={contactRef}>
            <Contact />
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Home;
