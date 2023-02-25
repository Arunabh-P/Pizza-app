const express = require('express');
const { getAllPizzas } = require('../controller/pizzaCtrl');
const router = express.Router();

router.get('/getAllPizzas', getAllPizzas);

module.exports = router;
