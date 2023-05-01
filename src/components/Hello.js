import React, { Fragment } from "react";
import Typed from "typed.js";
import styles from "./Hello.module.css";
import logoBig from '../assets/logoBig.png'

const Hello = ({ onClick }) => {
  
  const greeting = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(greeting.current, {
      strings: [
        `<b>Hello, I'm Michal :-) &#128075;</b>`,
        `<b>Software Developer &nbsp &#128187;</b>`,
        `<b>Make yourself at home &#129299;</b>`,
      ],
      typeSpeed: 50,

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
        <img style={{width: '15rem', height: '15rem'}} src={logoBig} />
      <div className={styles.typed}>
        <span ref={greeting} />
      </div>
      <button onClick={handleClick}>Get to know me!</button>
    </div>
  );
};
export default Hello;
