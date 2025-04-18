const express = require('express');
const router = express.Router()
const order = require('./order.routes')
const product = require('./product.routes')
const table = require('./table.routes')
const user = require('./user.routes')

router.use('/api', order)
router.use('/api', product)
router.use('/api', table)
router.use('/api', user)

module.exports = router