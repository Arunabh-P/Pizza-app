import axios from 'axios';

export const placeOrder = (token, subTotal) => async (dispatch, getState) => {
  dispatch({ type: 'PLACE_ORDER_REQUEST' });
  const currentUser = getState().loginUserReducer.currentUser;
  const cartItems = getState().cartReducer.cartItems;
  try {
    await axios.post('/api/orders/placeorder', {
      token,
      subTotal,
      currentUser,
      cartItems,
    });
    dispatch({ type: 'PLACE_ORDER_SUCCESS' });
  } catch (error) {
    dispatch({ type: 'PLACE_ORDER_FAIL' });
    console.log(error);
  }
};
