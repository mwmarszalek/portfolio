import React from "react";
import styles from "./Contact.module.css";

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
        $  You can reach me at{" "}
          <a href="mailto:mw.marszalek@outlook.com" className={styles.link}>
            mwmarszalek@outlook.com
          </a>
        </p>
        <p className={styles.text}>
          $  My GitHub profile is{" "}
          <a href="https://github.com/mwmarszalek" className={styles.link}>
            https://github.com/marszalek
          </a>
        </p>
        <p className={styles.text}>
          $  You can connect with me on LinkedIn at{" "}
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
