const { body, param } = require('express-validator')
const { executeValidation } = require('./validation-index')

const create = [
  body('name')
    .exists().withMessage('required parameter').bail()
    .isString().withMessage('must be a string').bail()
    .notEmpty().withMessage('cannot be empty'),
  body('content')
    .exists().withMessage('required parameter').bail()
    .isString().withMessage('must be a string').bail()
    .notEmpty().withMessage('cannot be empty'),
  body('image')
    .optional()
    .isString().withMessage('must be a string'),
  executeValidation
]

const update = [
  param('id')
    .toInt()
    .isInt().withMessage('must be an integer'),
  ...create
]

module.exports = {
  create,
  update
}
