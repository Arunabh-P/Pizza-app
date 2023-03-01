const asyncHandler = require('express-async-handler');
const Order = require('../model/orderModel');
const placeOrder = asyncHandler(async (req, res) => {
  const { token, subTotal, currentUser, cartItems } = req.body;

  try {
    const newOrder = new Order({
      name: currentUser.name,
      email: currentUser.email,
      userid: currentUser._id,
      orderItems: cartItems,
      orderAmount: subTotal,
      shippingAddress: {
        street: token.card.address_line1,
        city: token.card.address_city,
        country: token.card.address_country,
        pincode: token.card.address_zip,
      },
    });
    newOrder.save();
    res.send('Payment Success');
  } catch (error) {
    res.status(400).json({
      message: 'Something went wrong',
      error: error.stack,
    });
  }
});

module.exports = {
  placeOrder,
};
