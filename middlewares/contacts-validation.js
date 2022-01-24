
const { body } = require('express-validator')
const { executeValidation } = require('./validation-index')

exports.contacts = [
  body('name')
    .exists().withMessage('Name parameter is required')
    .isString().withMessage('Name has to be a string')
    .isLength({ min: 1, max: 200 }).withMessage('must have content'),

  body('phone')
    .optional()
    .isMobilePhone('pt-BR').withMessage('Insert a valid phone'),

  body('message')
    .optional()
    .isString().withMessage('message has to be a string')
    .isLength({ min: 10, max: 200 }).withMessage('must have content'),

  body('email')
    .exists().withMessage('Email parameter is required')
    .isEmail().withMessage('Please insert a valid email'),
  executeValidation

]
