const { body } = require('express-validator')
const { executeValidation } = require('./validation-index')

const create = [
  body('name')
    .exists().withMessage('name required')
    .isString().withMessage('name must be a string'),
  body('content')
    .exists().withMessage('content required')
    .isString().withMessage('content must be a string'),
  body('image')
    .exists().withMessage('image required')
    .isString().withMessage('image must be a string'),
  executeValidation
]

module.exports = {
  create
}
