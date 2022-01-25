const commentsRepository = require("../repositories/comments");

const getAll = async () => {
  const response = await commentsRepository.getAll();
  return response;
};
const create = async (data) => {
  const response = await commentsRepository.create(data)  
 
  if (!response) {
    const error = new Error("there was an error in comment creation");
    error.status = 403;
    throw error;
  }
  return response;
};
/* const remove = async (id) => {
  await commentsRepository.remove(id);
}; */
const getById = async (id) => {
  const response = await db.Comment.findByPk(id);
  return response;
}
const update = async (req) => {
  const comments = await commentsRepository.getById(req.params.id);
  console.log(comments);
  if (!comments) {
    const error = new Error("Comment not found");
    error.status = 409;
    throw error;
  }
  await commentsRepository.update(req.body, req.params.id);

  return await commentsRepository.getById(req.params.id);
};

module.exports = {
  getAll,
  create,
  getById,
  update
}

