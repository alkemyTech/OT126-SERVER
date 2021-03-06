
const { check, param } = require('express-validator')


const { executeValidation } = require('./validation-index')

const name = check('name', 'Must be input a name valid')
  .notEmpty()
  .trim()

const image = check('image', 'Must be input a image')
  .notEmpty()
  .trim()

const id = param('id', 'Must be input id the member in the params.')
  .isInt()

const updateReqValidation = [id, name, image,executeValidation]
const createReqValidation = [name, image, executeValidation]

module.exports = {
  createReqValidation,
  updateReqValidation
}
