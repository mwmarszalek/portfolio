import React, {useState} from "react";
import { Card, Container } from "react-bootstrap";
import styles from "./About.module.css";
import picture1 from "../assets/codeImage1.svg";
import picture2 from "../assets/codeImage2.svg";
import picture3 from "../assets/codeImage3.svg";
import picture4 from "../assets/codeImage4.svg";

const About = () => {



  return (
    <div className={styles.aboutContainer}>
      <div className={styles.pictureContainer}>
        <img src={picture1} style={{height: '10vh', width: '10em'}} />
        <img src={picture2} style={{height: '10vh', width: '10em'}} />
        <img src={picture3} style={{height: '10vh', width: '10em'}} />
        {/* <img src={picture4} style={{height: '10vh', width: '10em'}} /> */}
      </div>
      <div className={styles.bioCard}>
        <h1>Hey, I'm Michal! ✌️</h1>
        <p>
          Born in Szczecin, Poland (willing to give $5 to the person who can
          pronounce it right). After graduating in Social Statistics, I moved to
          the UK, and this year (2023) marks my 14th anniversary of living in{" "}
          <strong>Glasgow! 🎉 🏴󠁧󠁢󠁳󠁣󠁴󠁿</strong>
        </p>
        <p>
          For the last four years, I've been working in the automotive industry,
          dealing with data using Excel and PowerBi. Sadly, there's only so much
          you can do with Excel, so I started digging deeper.
        </p>
        <p>
          This is where coding came in. I fell in love with Python 🐍, quit my
          day job, and committed myself to teaching myself how to code while
          working part-time as a delivery driver (apparently, you need at least
          one source of income to buy stuff and survive 😉).
        </p>
        <p>
          After numerous bootcamps, I decided to do Codeclan's intensive{" "}
          <strong>Professional Software Development course.</strong> What an
          experience that was!
        </p>
        <p>
          So here I am now, trying to prove to my first employer that I am a
          valuable asset to their company.
        </p>
        <h3>
          <strong>Any takers? 🤓</strong>
        </h3>
      </div>
    </div>
  );
};

export default About;
