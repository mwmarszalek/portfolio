import React, { useState, useEffect } from "react";
import logo from "../assets/logoBig.png";

import { Navbar, Nav } from "react-bootstrap";
import "./NavBar3.css";

const NavBar = ({
  scrollToAbout,
  scrollToProjects,
  scrollToStack,
  scrollToContact,
}) => {
  const [isTransparent, setIsTransparent] = useState(true);
  const [activeLink, setActiveLink] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const threshold = windowHeight * 0.15;

      if (scrollTop > threshold) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsCollapsed(true);
  };

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleResumeClick = () => {
    window.open(require("../assets/cvMichalMarszalek.pdf"), "_blank");
    setActiveLink("");
  };

  return (
    <Navbar
      className={isTransparent ? "navbar-transparent" : ""}
      variant="dark"
      sticky="top"
      expand="md"
      expanded={!isCollapsed}
      style={{
        transition: "background-color 0.3s ease-in-out",
        backgroundColor: isTransparent ? "#8B048Bcc" : "transparent",
        opacity: isTransparent ? 0.9 : 1,
        height: "10vh",
      }}
    >
      <Navbar.Brand href="/" style={{ maxHeight: "8vh" }}>
        <img
          src={logo}
          style={{
            width: "8rem",
            height: "8rem",
            objectFit: "cover",
            marginTop: "-2.7rem",
          }}
          className="logo"
          alt="logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar} />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={`ms-auto navBarLinksStyle`}>
          <Nav.Link
            onClick={() => {
              handleLinkClick("about");
              scrollToAbout();
            }}
            className={activeLink === "about" ? "active" : ""}
          >
            about
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              handleLinkClick("projects");
              scrollToProjects();
            }}
            className={activeLink === "projects" ? "active" : ""}
          >
            projects
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              handleLinkClick("stack");
              scrollToStack();
            }}
            className={activeLink === "stack" ? "active" : ""}
          >
            stack
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              handleLinkClick("contact");
              scrollToContact();
            }}
            className={activeLink === "contact" ? "active" : ""}
          >
            contact
          </Nav.Link>
          <Nav.Link
            onClick={handleResumeClick}
            className={activeLink === "resume" ? "active" : ""}
          >
            resumé
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
