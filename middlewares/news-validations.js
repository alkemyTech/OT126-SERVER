const { body, param } = require('express-validator')
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

const idParam = param('id')
  .isInt().withMessage('must be an integer')

// Validations

const create = [
  name.exists().withMessage('param required'),
  content.exists().withMessage('param required'),
  image.exists().withMessage('param required'),
  executeValidation
]

const remove = [
  idParam.exists().withMessage('param required'),
  executeValidation
]

const getById = [
  idParam.exists().withMessage('param required'),
  executeValidation
]

const update = [
  name.exists().withMessage('param required'),
  content.exists().withMessage('param required'),
  image.exists().withMessage('param required'),
  body('categoryId').not().exists().withMessage('forbidden access'),
  executeValidation
]

module.exports = {
  create,
  remove,
  getById,
  update
}
