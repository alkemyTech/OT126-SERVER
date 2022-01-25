const { body, validationResult } = require('express-validator')

// Common params

const email = body('email')
  .isEmail().withMessage('must be a valid email')
  .exists().withMessage('param required')
  .normalizeEmail()

const password = body('password')
  .isString().withMessage('must be a string')
  .notEmpty().withMessage('cannot be empty')
  .exists().withMessage('param required')

// Validations

const login = [email, password, executeValidationLogin]

module.exports = {
  login
}

// Login response must contain data.ok: boolean
function executeValidationLogin (req, res, next) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array(), data: { ok: false } })
  }
  next()
}
