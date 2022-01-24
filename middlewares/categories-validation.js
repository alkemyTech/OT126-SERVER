const { body } = require('express-validator')
const { executeValidation } = require('./validation-index')

exports.createValidationCategory = [
  body('name')
    .exists()
    .isString().withMessage('name has to be a string')
    .isLength({ min: 1, max: 200 }).withMessage('must have content'),
  body('description')
    .optional()
    .isString().withMessage('description has to be a string')
    .isLength({ min: 1, max: 200 }).withMessage('must have content'),
  body('image')
    .optional()
    .isString().withMessage('image has to be a string')
    .isLength({ min: 1, max: 200 }).withMessage('must have content'),
  executeValidation
]
