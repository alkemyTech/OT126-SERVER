const { body } = require('express-validator')
const { executeValidation } = require('./validation-index')

const create = [
  body('name')
    .exists().withMessage('required parameter')
    .isString().withMessage('must be a string')
    .notEmpty().withMessage('cannot be empty'),
  body('content')
    .exists().withMessage('required parameter')
    .isString().withMessage('must be a string')
    .notEmpty().withMessage('cannot be empty'),
  body('image')
    .exists().withMessage('required parameter')
    .isString().withMessage('must be a string')
    .notEmpty().withMessage('cannot be empty'),
  executeValidation
]

module.exports = {
  create
}
