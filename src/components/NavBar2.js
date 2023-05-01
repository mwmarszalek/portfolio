import React from "react";
import logo from "../assets/logoBig.png";
import styles from "./NavBar2.module.css";

const NavBar2 = ({
  scrollToAbout,
  scrollToProjects,
  scrollToStack,
  scrollToContact,
}) => {
  return (
    <ul className={styles.navContainer}>
      <div className={styles.navLogo}>
        <li>
          <img src={logo} className={styles.navLogoImg} alt="Logo" />
        </li>
      </div>
      <div className={styles.navLinks}>
        <li onClick={scrollToAbout}>About</li>
        <li onClick={scrollToProjects}>Projects</li>
        <li onClick={scrollToStack}>Stack</li>
        <li onClick={scrollToContact}>Contact</li>
      </div>
    </ul>
  );
};

export default NavBar2;
