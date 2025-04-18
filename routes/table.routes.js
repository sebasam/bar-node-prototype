const express = require('express');
const router = express.Router();
const tableController = require('./../controllers/table.controller')
const validateToken = require('./../middlewares/validateToken')

router.post('/create-table', validateToken.validateToken, tableController.pushTable)
router.patch('/liberate-table/:id', validateToken.validateToken, tableController.liberateTable)
router.patch('/reserved-table/:id', validateToken.validateToken, tableController.reserveTable)

module.exports = router;