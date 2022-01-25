const express = require('express')
const usersController = require('../controllers/users')
const usersValidation = require('../middlewares/users-validation')

const router = express.Router()

router.get('/', usersController.getAll)
router.post('/register', usersValidation, usersController.create)

module.exports = router
