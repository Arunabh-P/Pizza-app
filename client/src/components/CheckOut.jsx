import React from 'react';
import { Button } from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../action/orderAction';
import Loader from './Loader';
import Error from './Error';
import Success from './Success';

const CheckOut = ({ subTotal }) => {
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderState;
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subTotal));
  };
  return (
    <>
      {loading && <Loader />}
      {error && <Error error="something went wrong" />}
      {success && <Success success="order placed successfully" />}
      <StripeCheckout
        amount={subTotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51Mgir3SI6wAtfIJLgxmliWS2gyK8ZakfD9tXCbKVo5UWdOFsliUfq1Dq3wAAHzcHUbdaS7bknufiCTwrs1GpJ3po00deaqG0gJ"
        currency="INR"
      >
        <Button className="btn btn-danger w-100 mt-2">Pay Now</Button>
      </StripeCheckout>
    </>
  );
};

export default CheckOut;
