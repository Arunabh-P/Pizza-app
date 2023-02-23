import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { Image } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ background: '#FF2625' }}>
      <Container>
        <Navbar.Brand href="/">
          <Navbar.Brand>
            <Image
              src="images/logo.png"
              alt="logo"
              style={{ height: '50px' }}
            />
          </Navbar.Brand>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"> Orders</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link eventKey={2} href="#memes">
              Login
            </Nav.Link>
            <Nav.Link className="text-white" eventKey={2} href="#memes">
              Register
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;