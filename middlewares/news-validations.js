const { body, param } = require('express-validator')
const { executeValidation } = require('./validation-index')

// Common params

const name = body('name')
  .isString().withMessage('must be a string')
  .notEmpty().withMessage('cannot be empty')
  .exists().withMessage('param required')

const content = body('content')
  .isString().withMessage('must be a string')
  .notEmpty().withMessage('cannot be empty')
  .exists().withMessage('param required')

const image = body('image')
  .isString().withMessage('must be a string')
  .isLength({ min: 1, max: 1234 }).withMessage('length range: 1-1234')
  .exists().withMessage('param required')

const idParam = param('id')
  .isInt().withMessage('must be an integer')
  .exists().withMessage('param required')

const categoryId = body('categoryId')
  .custom(value => {
    if ((typeof value === 'number' && value > 0) || value === null) {
      return true
    }
    throw new Error('must be an integer greater than 0 or null')
  })

// Validations

const create = [name, content, image, executeValidation]

const remove = [idParam, executeValidation]

const getById = [idParam, executeValidation]

const update = [name, content, image, categoryId, executeValidation]

module.exports = {
  create,
  remove,
  getById,
  update
}
