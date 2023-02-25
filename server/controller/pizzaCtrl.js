const Pizza = require('../model/pizzaModel');
const asyncHandler = require('express-async-handler');

//get all pizza
const getAllPizzas = asyncHandler(async (req, res) => {
  try {
    const pizzas = await pizzaModel.find({});
    res.send(pizzas);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = {
  getAllPizzas,
};
