const { body, param } = require('express-validator')
const { executeValidation } = require('./validation-index')

exports.createValidationCategory = [
  body('name')
    .exists().withMessage('Name is required').bail()
    .isString().withMessage('Name has to be a string').bail()
    .isLength({ min: 1, max: 200 }).withMessage('Must have content').bail(),
  body('description')
    .optional()
    .isString().withMessage('Description has to be a string').bail()
    .isLength({ min: 1, max: 200 }).withMessage('Must have content').bail(),
  body('image')
    .optional()
    .isString().withMessage('Image has to be a string').bail()
    .isLength({ min: 1, max: 200 }).withMessage('Must have content').bail(),
  executeValidation
]
exports.updateValidationCategory = [
  param('id')
    .isInt().withMessage('id has to be a number').bail(),
  body('name')
    .optional()
    .isString().withMessage('name has to be a string').bail()
    .isLength({ min: 1, max: 200 }).withMessage('must have content').bail(),
  body('description')
    .optional()
    .isString().withMessage('description has to be a string').bail()
    .isLength({ min: 1, max: 200 }).withMessage('must have content').bail(),
  body('image')
    .optional()
    .isString().withMessage('image has to be a string').bail()
    .isLength({ min: 1, max: 200 }).withMessage('must have content').bail(),
  executeValidation
]
