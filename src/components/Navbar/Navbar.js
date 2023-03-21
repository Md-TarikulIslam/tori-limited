import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function BasicExample() {
  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Container>
        <Link to="/">
        <Navbar.Brand>
          <img className="logo" src={logo} alt="" />
        </Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Link className="nav-style" to="/">
              <Nav>Home</Nav>
            </Link>
            <Link  className="nav-style" to="/about">
              <Nav>About</Nav>
            </Link>
            <Link  className="nav-style" to="/products">
              <Nav>Products</Nav>
            </Link>
            <Link  className="nav-style" to="/services">
              <Nav>Services</Nav>
            </Link>
            <Link  className="nav-style" to="/contact">
              <Nav>Contact</Nav>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
