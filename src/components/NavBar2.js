import React from "react";
import logo from "../assets/logoBig.png";
import styles from "./NavBar2.module.css";

const NavBar2 = () => {
  return (
    <ul className={styles.navContainer}>
      <div className={styles.navLogo}>
        <li><img src={logo} className={styles.navLogoImg} /></li>
      </div>
      <div className={styles.navLinks}>
        <li>About</li>
        <li>Projects</li>
        <li>Stack</li>
        <li>Contact</li>
      </div>
    </ul>
  );
};

export default NavBar2;

