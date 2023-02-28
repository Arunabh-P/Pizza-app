import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import { BsCart2 } from 'react-icons/bs';

import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NavBar = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);

  return (
    <Navbar className="navbar-wrapper" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Navbar.Brand>
            <Image
              src="images/logo.png"
              alt="logo"
              style={{ width: '220px' }}
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
            <Link className=" nav-links" to="/login">
              Login
            </Link>
            <Link className=" nav-links" to="/register">
              Register
            </Link>

            <Link className=" nav-links " to="/cart">
              <BsCart2 />{' '}
              <span className="cart-count">{cartState.cartItems.length}</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
