import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';

function NAVBAR() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/"><img src='img/Logo.png' alt='logo' width='125px'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            
            <Nav.Link href="/photo-gallery">Photo Gallery</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link >Hablamos Español</Nav.Link>
            <Nav.Link href='tel:+5612555183'>(561) 255-5183</Nav.Link>
          </Nav>
          
          </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NAVBAR;
