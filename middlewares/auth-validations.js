const { body, validationResult } = require('express-validator')
const { executeValidation } = require('./validation-index')

// Common params

const email = body('email')
  .isEmail().withMessage('must be a valid email')
  .exists().withMessage('param required')
  .normalizeEmail()

const password = body('password')
  .isString().withMessage('must be a string')
  .notEmpty().withMessage('cannot be empty')
  .exists().withMessage('param required')

const firstName = body('firstName')
  .notEmpty()
  .matches(/^[A-Z]+$/i)
  .withMessage('Please enter your fistname correctly')
  .bail()

const lastName = body('lastName')
  .notEmpty()
  .matches(/^[A-Z]+$/i)
  .withMessage('Please enter your lastname correctly')
  .bail()

// Validations

const login = [email, password, executeValidationLogin]
const register = [firstName, lastName, email, password, executeValidation]

module.exports = {
  login,
  register
}

// Login response must contain data.ok: boolean
function executeValidationLogin (req, res, next) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array(), data: { ok: false } })
  }
  next()
}
