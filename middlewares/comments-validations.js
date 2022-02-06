const { body } = require('express-validator')
const { executeValidation } = require('./validation-index')
const userRepository = require('../repositories/users')
const rolesRepository = require('../repositories/roles')
const commentsRepository = require('../repositories/comments')
const { getTokenPayload } = require('./auth')
const { adminRoleName } = require('../config/config')

const validateComments = [
  body('user_id')
    .notEmpty()
    .withMessage('You need to enter a user_id!')
    .bail()
    .isNumeric()
    .withMessage('Invalid user_id')
    .bail(),
  body('novelty_id')
    .notEmpty()
    .withMessage('You need to enter a novelty_id!')
    .bail()
    .isNumeric()
    .withMessage('Invalid novelty_id')
    .bail(),
  body('body').notEmpty().withMessage('You need to enter a body!'),
  executeValidation
]

const isOwnComment = async (req, res, next) => {
  try {
    const payload = await getTokenPayload(req)
    const { id } = req.params
    const userFound = await userRepository.getById(payload.userId)
    if (!userFound) {
      const error = new Error('user not found')
      error.status = 404
      throw error
    }
    const comment = await commentsRepository.getById(id)

    if (comment.user_id === userFound.id) {
      return next()
    }
    const { roleId } = userFound.dataValues
    const roleUser = await rolesRepository.getRoleById(roleId)

    if (roleUser.name === adminRoleName) return next()

    const error = new Error('it isnt your comment or you are not an admin')
    error.status = 403
    throw error
  } catch (error) {
    next(error)
  }
}

module.exports = { validateComments, isOwnComment }
