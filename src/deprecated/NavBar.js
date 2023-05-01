import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";


const NavBar = () => {
  const navbarStyle = {
    color: "white",
    fontWeight: "800",
    marginBottom: "3rem",
    textAlign: "center",
    WebkitBorderRadius: "30px",
    MozBorderRadius: "30px",
    borderRadius: "30px",
  };

  return (
    <>
      <Navbar
        style={navbarStyle}
        expand="lg"
        variant="dark"
        sticky="top"
      
      >
        <Container style={{ padding: "0", margin: "0" }}>
          <img src={logo} style={{ width: "10rem", height: "9rem" }} />
          <Navbar.Brand href="/"></Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
