const express = require('express');
const router = express.Router();
const orderController = require('./../controllers/order.controller')
const validateToken = require('./../middlewares/validateToken')

router.post('/create-order', validateToken.validateToken, orderController.pushOrder)

router.patch('/close-order', validateToken.validateToken, orderController.closeOrder)

module.exports = router;