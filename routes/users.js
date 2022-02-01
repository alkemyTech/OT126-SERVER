const express = require('express');
const router = express.Router();
const userValidations = require('../middlewares/users-validation');

const authMiddleware = require('../middlewares/auth')
const usersController = require('../controllers/users')

router.patch('/:id' ,userValidations.userUpdateValidation , authMiddleware.isAuth, usersController.update)

module.exports = router
