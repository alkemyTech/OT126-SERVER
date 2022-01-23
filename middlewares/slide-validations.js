const { check } = require('express-validator')
/* const { executeValidation } = require('./validation-index') */

const createSlide = [
  check('imageUrl').notEmpty().matches(/^[A-Z]+$/i).withMessage('This camp is required and has to be a string'),
  check('text').notEmpty().matches(/^[A-Z]+$/i).withMessage('This camp is required and has to be a string'),
  check('order').notEmpty().isNumeric().withMessage('This camp is required and has to be a number'),
  check('organizationId').notEmpty().isNumeric().withMessage('This camp is required and has to be a number')/* ,
  executeValidation */
]

const updateSlide = [
  check('imageUrl').matches(/^[A-Z]+$/i).withMessage('This camp has to be a string'),
  check('text').matches(/^[A-Z]+$/i).withMessage('This camp has to be a string'),
  check('order').isNumeric().withMessage('This camp has to be a number'),
  check('organizationId').isNumeric().withMessage('This camp has to be a number')/* ,
  executeValidation */
]

module.exports = {
  createSlide,
  updateSlide
}
