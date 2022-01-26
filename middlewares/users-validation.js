const { check } = require('express-validator')
const { executeValidation } = require('./validation-index')

module.exports = [

  check('firstName').notEmpty().matches(/^[A-Z]+$/i).withMessage('Please enter your fistname correctly'),
  check('lastName').notEmpty().matches(/^[A-Z]+$/i).withMessage('Please enter your lastname correctly'),
  check('email').notEmpty().isEmail().withMessage('Please enter a valid email address'),
  check('password').notEmpty().withMessage('Please enter your password'),
  executeValidation
]
