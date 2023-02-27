import axios from 'axios';

export const addToCart = (pizza, quantity, varient) => (dispatch, getState) => {
  var cartItems = {
    _id: pizza._id,
    name: pizza.name,
    image: pizza.image,
    varient: varient,
    quantity: quantity,
    prices: pizza.prices,
    price: pizza.prices[0][varient] * quantity,
  };
  dispatch({ type: 'ADD_TO_CART', payload: cartItems });
  localStorage.setItem(
    'cartItems',
    JSON.stringify(getState().cartReducer.cartItems)
  );
};
