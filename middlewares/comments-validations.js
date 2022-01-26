const { body } = require('express-validator')
const { executeValidation } = require('./validation-index')
/* const usersService = require("../services/users")
const rolesService = require("../services/roles")
const commentsRepository = require("../repositories/comments")
const { tokenId } = require("./auth") */

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

/* const isOwnComment = async (req, res, next) => {
  try {
    const userId = tokenId(req)
    const { id } = req.params
    const userFound = await usersService.getById(userId)
    if (!userFound) {
      const error = new Error("no user found");
      error.status = 404
      throw error
    }
    const role = await rolesService.getByName("Admin")

    if (userFound.roleId === role.id) {
      return next()
    }
    const comment = await commentsRepository.getById(id)
    if (comment.UserId === userFound.id) {
      return next()
    }
    const error = new Error("it isnt your comment or you are not an admin")
    error.status = 403
    throw error
  } catch (error) {
    next(error)
  }
} */

module.exports = { validateComments }
