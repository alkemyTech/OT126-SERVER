const express = require('express')

const router = express.Router()

const authController = require('../controllers/auth')
const authValidations = require('../middlewares/auth-validations')

<<<<<<< .merge_file_a02964
router.post('/login', authValidations.login, authController.login)
=======
router.get('/', authController.getAll)
router.post('/login', authValidations.login, authController.login)
router.post('/register', authController.create)
>>>>>>> .merge_file_a03352

module.exports = router
