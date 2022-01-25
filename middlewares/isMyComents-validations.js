
const usersService = require("../services/users");
const rolesService = require("../services/roles");
const commentsRepository = require("../repositories/comments");
const { tokenId } = require("./auth")


const isMyComment = async (req, res, next) => {
  try {
    const reqId = tokenId(req); //obtiene el token decodificado y obtiene el id del usuario logueado
    const { id } = req.params; //id que viene por parametro
    const userFound = await usersService.getById(reqId); //paso el id que vino por token
    if (!userFound) {
      const error = new Error("no user found");
      error.status = 404;
      throw error;
    }
    const role = await rolesService.getByName("Admin");//verifica si en la base de datos existe un rol admin

    
    if (userFound.roleId === role.id) { //verificamos que el usuario sea administrador
      return next();
    }
    const comment = await commentsRepository.getById(id);//traigo el comentarion por el req.params.id
    if (comment.UserId === userFound.id) { //verificamos si el usuario es el dueño del comentario
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