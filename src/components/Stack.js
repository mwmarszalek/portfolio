import { Fragment } from "react";
import styles from "./Stack.module.css";

const Stack = () => {
  return (
    <div className={styles.stackContainer}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "5vh",
          fontSize: "45px",
          fontWeight: "bolder",
        }}
      >
        Currently using:
      </h1>
      <span className={styles.stackGrid}>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
          alt="stack"
        />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />{" "}
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />{" "}
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />{" "}
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />{" "}
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
        <img src="https://user-images.githubusercontent.com/108957679/221864279-fa907251-bad8-465a-b682-537dc92940dc.png" />
      </span>
      <hr></hr>
      <div className={styles.spinnerContainer}>
        <div className={styles.spinner}></div>
        <div className={styles.loader}>
          <h1 style={{ color: "white", fontSize: "50px" }}>
            Currently learning:{" "}
          </h1> &nbsp;
          <div className={styles.words}>
            <span className={styles.word}></span>
            <span className={styles.word}>
              C#&nbsp;
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                height="50"
              />
            </span>
            <span className={styles.word}>React Native <img
                src="https://cdn.worldvectorlogo.com/logos/react-native-1.svg"
                height="37"
              /> </span>
            <span className={styles.word}>
              AWS &nbsp;
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
                height="50"
              />
            </span>
            <span className={styles.word}>
              Docker &nbsp;
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                height="50"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
