const { body } = require('express-validator')
const { executeValidation } = require('./validation-index')

// Common params

const name = body('name')
  .isString().withMessage('must be a string')
  .notEmpty().withMessage('cannot be empty')

const content = body('content')
  .isString().withMessage('must be a string')
  .notEmpty().withMessage('cannot be empty')

const image = body('image')
  .isString().withMessage('must be a string')
  .isLength({ min: 1, max: 1234 }).withMessage('length range: 1-1234')

// Validations

const create = [
  name.exists().withMessage('param required'),
  content.exists().withMessage('param required'),
  image.exists().withMessage('param required'),
  executeValidation
]

module.exports = {
  create
}
