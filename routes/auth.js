const express = require('express')

const router = express.Router()

const authController = require('../controllers/auth')
const authValidations = require('../middlewares/auth-validations')
const authMiddleware = require('../middlewares/auth')

router.get('/', authMiddleware.isAdmin, authController.getAll)
router.post('/login', authValidations.login, authController.login)
router.post('/register', authValidations.register, authController.create)

module.exports = router
