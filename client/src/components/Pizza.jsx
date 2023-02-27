import React, { useState } from 'react';
import { Card, Button, Row, Col, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../action/cartAction';
const Pizza = ({ pizza }) => {
  const [varient, setVarient] = useState('small');
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(pizza, quantity, varient));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card
        className="pizza-card"
        style={{ width: '18rem', marginLeft: '30px' }}
      >
        <Card.Img
          variant="top"
          src={pizza.image}
          style={{ height: '220px', cursor: 'pointer' }}
          onClick={handleShow}
        />

        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <Card.Text>
            <Row>
              <Col md={6}>
                <h6>Varients</h6>
                <select
                  value={varient}
                  name=""
                  id=""
                  onChange={(e) => setVarient(e.target.value)}
                >
                  {pizza.varients.map((varient) => (
                    <option>{varient}</option>
                  ))}
                </select>
              </Col>
              <Col md={6}>
                <h6>Quantity</h6>
                <select
                  name=""
                  id=""
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(10).keys()].map((v, i) => (
                    <option>{i + 1}</option>
                  ))}
                </select>
              </Col>
            </Row>
          </Card.Text>
          <Row>
            <Col md={6}>Rs. {pizza.prices[0][varient] * quantity} /- Only</Col>
            <Col md={6}>
              <Button onClick={addToCartHandler} className="btn1 text-white">
                Add to cart
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {' '}
          <Card.Img
            variant="top"
            src={pizza.image}
            style={{ height: '220px', cursor: 'pointer' }}
            onClick={handleShow}
          />
          <p className="pt-2 m-0">{pizza.description}</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Pizza;
