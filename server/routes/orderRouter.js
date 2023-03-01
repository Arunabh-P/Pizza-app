const express = require('express');
const { placeOrder } = require('../controller/orderCtrl');
const router = express.Router();

router.post('/placeorder', placeOrder);

module.exports = router;
