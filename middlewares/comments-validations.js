const { body } = require('express-validator')
const { executeValidation } = require('./validation-index')
/* const userRepository = require("../repositories/users")
const rolesService = require("../services/roles")
const commentsRepository = require("../repositories/comments")
const { getTokenPayload } = require("./auth") */

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

/* const tokenId = (req) => {
  const token = req.headers["authorization"];
  if (!token) {
    const error = new Error("No token provided!");
    error.status = 401;
    throw error;
  }
  const decodedUser = securityService.verifyToken(token);
  if (!decodedUser) {
    const error = new Error(
      "Unauthorized! Please enter a valid token provided at login"
    );
    error.status = 403;
    throw error;
  }
  return decodedUser.id;
};  */

 const isOwnComment = async (req, res, next) => {
  try {
    const userTokenId = getTokenPayload(req)
    const userId = userTokenId.id
    const { id } = req.params
    const userFound = await userRepository.getById(userId)
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
}

module.exports = { validateComments }
