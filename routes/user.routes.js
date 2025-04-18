const express = require('express')
const router = express.Router()
const userController = require('./../controllers/user.controller')
const users = require('./../middlewares/validationBody')
const validateFields = require('./../middlewares/validationResult')

router.post('/register', users, validateFields, userController.pushUser)
router.post('/login', userController.loginUser)

module.exports = router