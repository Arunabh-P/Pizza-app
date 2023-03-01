import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { addToCart, deleteFromCart } from '../action/cartAction';
import { AiOutlineClose } from 'react-icons/ai';
import CheckOut from '../components/CheckOut';
const CartScreen = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch();
  const subTotal = cartItems.reduce((x, item) => x + item.price, 0);
  return (
    <>
      <Container>
        <Row className=" justify-content-evenly">
          <Col md={6} className="cart-items mt-5">
            {cartItems.map((item) => (
              <div className="cart-card">
                <div className="d-flex">
                  <div className="img-div">
                    <img
                      className=" cart-img"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <div className="content-div">
                    <h5>
                      {item.name} [{item.varient}]
                    </h5>
                    <p>
                      Price : {item.quantity} x {item.prices[0][item.varient]} ={' '}
                      {item.price}
                    </p>
                    <p className="pt-1">
                      <AiOutlineMinus
                        className="plus-minus-icon me-2 bg-danger rounded"
                        onClick={() =>
                          dispatch(
                            addToCart(item, item.quantity - 1, item.varient)
                          )
                        }
                      />{' '}
                      {item.quantity}{' '}
                      <AiOutlinePlus
                        className="plus-minus-icon ms-2 bg-success rounded"
                        onClick={() =>
                          dispatch(
                            addToCart(item, item.quantity + 1, item.varient)
                          )
                        }
                      />
                    </p>
                  </div>
                </div>

                <div>
                  <AiOutlineClose
                    style={{ cursor: 'pointer' }}
                    className="m-4 delete-btn"
                    onClick={() => {
                      dispatch(deleteFromCart(item));
                    }}
                  />
                </div>
              </div>
            ))}
          </Col>
          <Col md={4} className="mt-5 total-card">
            <h2>Payment Info</h2>
            <p className=" mt-2">Sub Total : Rs {subTotal}/-</p>
            <CheckOut subTotal={subTotal} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CartScreen;
