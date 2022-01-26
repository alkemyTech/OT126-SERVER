const express = require('express')

const router = express.Router()

const authController = require('../controllers/auth')
const authValidations = require('../middlewares/auth-validations')

router.get('/', authController.getAll)
router.post('/login', authValidations.login, authController.login)
router.post('/register', authController.create)

module.exports = router
