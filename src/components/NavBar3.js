import React from "react";
import logo from "../assets/logoBig.png";
import { Navbar, Nav } from "react-bootstrap";

const navbarLinksStyle = {
  fontSize: "25px",
  fontWeight: "bolder",
  marginRight: "1em",
  display: "flex",
  gap: "1em",
};

const navbarStyle = {
    background: 'linear-gradient(to bottom, #410093, #8F38AC)',
    opacity: '0.9'
  };


const NavBar3 = ({
  scrollToAbout,
  scrollToProjects,
  scrollToStack,
  scrollToContact,
}) => {
  return (
    <Navbar style={navbarStyle} variant="dark" sticky="top" expand="md">
      <Navbar.Brand href="/" style={{ maxHeight: "5vh" }}>
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
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
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

export default NavBar3;
