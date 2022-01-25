const { check } = require('express-validator')
const { executeValidation } = require('./validation-index')

const name = check('name', 'Must be input a name valid')
  .notEmpty()
  .trim()

const image = check('image', 'Must be input a image')
  .notEmpty()
  .trim()

const createReqValidation = [name, image, executeValidation]

module.exports = {
  createReqValidation
}
