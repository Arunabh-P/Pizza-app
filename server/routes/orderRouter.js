const express = require('express');
const {
  placeOrder,
  getUserOrder,
  getAlluserOrder,
} = require('../controller/orderCtrl');
const router = express.Router();

router.post('/placeorder', placeOrder);
router.post('/getuserorder', getUserOrder);
router.get('/alluserorder', getAlluserOrder);

module.exports = router;
