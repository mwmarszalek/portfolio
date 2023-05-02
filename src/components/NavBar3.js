import React, { useState, useEffect } from "react";
import logo from "../assets/logoBig.png";
import { Navbar, Nav } from "react-bootstrap";


const navbarLinksStyle = {
  fontSize: "25px",
  fontWeight: "bolder",
  marginRight: "1em",
  display: "flex",
  gap: "1em",
};

const NavBar = ({
  scrollToAbout,
  scrollToProjects,
  scrollToStack,
  scrollToContact,
}) => {
  const [isTransparent, setIsTransparent] = useState(true);

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

  return (
    <Navbar
      className={isTransparent ? "navbar-transparent" : ""}
      variant="dark"
      sticky="top"
      expand="md"
      style={{
        transition: "background-color 0.3s ease-in-out",
        backgroundColor: isTransparent ? "#8F38AC" : "transparent",
        opacity: isTransparent ? 0.9 : 1,
        height: '10vh'
      }}
    >
      <Navbar.Brand href="/" style={{ maxHeight: "8vh" }}>
        <img
          src={logo}
          style={{
            width: "8rem",
            height: "8rem",
            objectFit: "cover",
            marginTop: "-3rem",
          }}
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
      
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto" style={navbarLinksStyle}>
          <Nav.Link onClick={scrollToAbout}>About</Nav.Link>
          <Nav.Link onClick={scrollToProjects}>Projects</Nav.Link>
          <Nav.Link onClick={scrollToStack}>Stack</Nav.Link>
          <Nav.Link onClick={scrollToContact}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
