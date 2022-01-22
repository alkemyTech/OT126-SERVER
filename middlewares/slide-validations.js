const { check } = require('express-validator')
/* const { executeValidation } = require('./validation-index') */

module.exports = [

  check('imageUrl').notEmpty().matches(/^[A-Z]+$/i).withMessage('This camp is required and has to be a string'),
  check('text').notEmpty().matches(/^[A-Z]+$/i).withMessage('This camp is required and has to be a string'),
  check('order').notEmpty().isNumeric().withMessage('This camp is required and has to be a number'),
  check('organizationId').notEmpty().isNumeric().withMessage('This camp is required and has to be a number')/* ,
  executeValidation */
]
