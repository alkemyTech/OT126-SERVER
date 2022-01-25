const express = require('express')

const router = express.Router()

const authController = require('../controllers/auth')
const authValidations = require('../middlewares/auth-validations')

router.post('/login', authValidations.login, authController.login)

module.exports = router
