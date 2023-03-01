import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import { BsCart2 } from 'react-icons/bs';
import { logoutUser } from '../action/userAction';
import { LinkContainer } from 'react-router-bootstrap';
import React from 'react';
import { Image, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NavBar = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  return (
    <Navbar className="navbar-wrapper" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand>
          <Link className="  " to="/">
            <Image
              src="images/logo.png"
              alt="logo"
              style={{ width: '200px' }}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {/*  */}
            {currentUser ? (
              <>
                <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
                  <LinkContainer to="/orders">
                    <NavDropdown.Item>orders</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                  >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                {' '}
                <Link className=" nav-links" to="/login">
                  Login
                </Link>
                <Link className=" nav-links" to="/register">
                  Register
                </Link>
              </>
            )}

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
