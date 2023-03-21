import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'

function BasicExample() {
  return (
    <Navbar sticky="top" bg="light" expand="lg"> 
      <Container>
        <Navbar.Brand href="#home"><img className='logo' src="http://torilimited.com/images/tori-logo.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end"  id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#home">Products</Nav.Link>
            <Nav.Link href="#link">Services</Nav.Link>
            <Nav.Link href="#home">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;