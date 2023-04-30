import React, { Fragment } from "react";
import Typed from "typed.js";
import styles from "./Hello.module.css";

const Hello = ({ onClick }) => {
  // Create reference to store the DOM element containing the animation
  const greeting = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(greeting.current, {
      strings: [`<b>Hello, I'm Michal :-)</b>`,`Software Developer`],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  const handleClick = () => {
    onClick();
  };

  return (
    <div className={styles.hello2}>
      <div className={styles.hello}>
        <span ref={greeting} />
      </div>
      <button onClick={handleClick}>Get to know me!</button>
    </div>
  );
};
export default Hello;
