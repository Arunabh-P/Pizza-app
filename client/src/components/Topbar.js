import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { MdLocalOffer } from 'react-icons/md';
const Topbar = () => {
  return (
    <div className=" p-1 " style={{ background: '#fdc721' }}>
      <Container>
        <p
          className="text-dark text-center fst-italic m-0 p-0"
          style={{ fontSize: '14px' }}
        >
          {' '}
          <MdLocalOffer /> &nbsp;&nbsp; Free Home Delivery on Order Above 500/-
          Rupees
        </p>
      </Container>
    </div>
  );
};

export default Topbar;
