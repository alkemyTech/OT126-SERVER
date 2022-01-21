const { check } = require('express-validator')
const executeValidation = require('./validation-index')

const name = check('name', 'Must be input a name valid')
  .notEmpty()
  .trim()

const createReqValidation = [name, executeValidation]

module.exports = {
  createReqValidation
}
