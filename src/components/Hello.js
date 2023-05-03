import React, { Fragment, useState, useEffect, useRef } from "react";
import styles from "./Hello.module.css";
import logoBig from "../assets/logoBig.png";
import Typed from 'typed.js';

const Hello = ({ onClick }) => {
  const greeting = useRef(null);
  const [buttonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    const typed = new Typed(greeting.current, {
      strings: [
        `<b>Hello, I'm Michal :-) &#128075;</b><br /><b>Software Developer &nbsp &#128187;</b>`,
        // `<b>Make yourself at home &#129299;</b>`,
      ],
      typeSpeed: 50,
      onComplete: () => {
        setTimeout(() => {
          setButtonVisible(true);
        }, 700);
      },
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleClick = () => {
    onClick();
  };

  return (
    <div className={styles.hello}>
      <img style={{ width: "15rem", height: "15rem" }} src={logoBig} />
      <div className={styles.typed}>
        <span ref={greeting} />
      </div>
      {buttonVisible && (
        <button
          className={`${styles.btnHello} ${styles.glow}`}
          onClick={handleClick}
        >
          Get to know me!
        </button>
      )}
    </div>
  );
};

export default Hello;
