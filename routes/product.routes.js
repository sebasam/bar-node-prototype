const express = require('express');
const router = express.Router();
const productController = require('./../controllers/product.controller')
const validateToken = require('./../middlewares/validateToken')

router.post('/create-product', validateToken.validateToken, productController.pushProduct)

module.exports = router;