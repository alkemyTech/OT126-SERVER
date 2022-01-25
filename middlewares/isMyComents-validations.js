
const usersService = require("../services/users");
const rolesService = require("../services/roles");
const commentsRepository = require("../repositories/comments");
const { tokenId } = require("./auth")


const isMyComment = async (req, res, next) => {
  try {
    const reqId = tokenId(req);
    const { id } = req.params;
    const userFound = await usersService.getById(reqId);
    if (!userFound) {
      const error = new Error("no user found");
      error.status = 404;
      throw error;
    }
    const role = await rolesService.getByName("Admin");
    if (!role) {
      const error = new Error("no role found");
      error.status = 404;
      throw error;
    }
    if (userFound.roleId === role.id) {
      return next();
    }
    const comment = await commentsRepository.getById(id);
    if (comment.UserId === userFound.id) {
      return next();
    }
    const error = new Error("it isnt your comment or you are not an admin");
    error.status = 403;
    throw error;
  } catch (error) {
    next(error);
  }
};

module.exports = { isMyComment };