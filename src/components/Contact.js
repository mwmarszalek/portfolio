import React from "react";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Contact = () => {
  return (
    <div className={styles.contactContainer}>
    <div className={styles.terminal}>
      <div className={styles.header}>
        <div className={styles.close}></div>
        <div className={styles.minimize}></div>
        <div className={styles.maximize}></div>
        <span className={styles.title}>Contact Me</span>
      </div>
      <div className={styles.body}>
        <p className={styles.text}>
        $  Drop me an e-mail ✉️ {" "}
          <a href="mailto:mw.marszalek@outlook.com" className={styles.link}>
            mwmarszalek@outlook.com
          </a>
        </p>
        <p className={styles.text}>
          $  My GitHub <FontAwesomeIcon icon={faGithub}/>  profile is{" "}
          <a href="https://github.com/mwmarszalek" className={styles.link}>
            https://github.com/marszalek 
          </a>
        </p>
        <p className={styles.text}>
          $  Connect with me on LinkedIn <FontAwesomeIcon icon={faLinkedin}/>{" "}
          <a href="https://www.linkedin.com/in/mwmarszalek/" className={styles.link}>
          https://www.linkedin.com/in/mwmarszalek 
          </a>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Contact;
