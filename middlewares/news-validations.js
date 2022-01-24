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

const categoryId = body('categoryId')
  .custom(value => {
    if ((typeof value === 'number' && value > 0) || value === null) {
      return true
    }
    throw new Error('must be an integer greater than 0 or null')
  })

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
  categoryId,
  executeValidation
]

module.exports = {
  create,
  remove,
  getById,
  update
}
