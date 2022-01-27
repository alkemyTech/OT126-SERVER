const { body } = require('express-validator')
const { executeValidation } = require('./validation-index')

const firstNameUpdate = body('firstName')
  .isString().withMessage('Please enter your firstName correctly')
  .bail()

const lastNameUpdate = body('lastName')
  .isString().withMessage('Please enter your lastName correctly')
  .bail()

const emailUpdate = body('email')
  .isEmail().withMessage('Please enter a valid email address')
  .bail()

const image = body('image')
  .isString().withMessage('Please enter your image correctly')
  .bail()

const userUpdateValidation = [firstNameUpdate, lastNameUpdate, emailUpdate, image, executeValidation]

module.exports = {
  userUpdateValidation
}
