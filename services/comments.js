const commentsRepository = require("../repositories/comments");

const getAll = async () => {
  const response = await commentsRepository.getAll();
  return response;
};
const create = async ({ user_id, novelty_id, body }) => {
  const response = await commentsRepository.create({
    user_id,
    novelty_id,
    body,
  });

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
};
const update = async (id, { body }) => {
  const comments = await commentsRepository.getById(id);
  if (!comments) {
    const error = new Error("Comment not found");
    error.status = 409;
    throw error;
  }
  await commentsRepository.update({ body }, id);

  return await commentsRepository.getById(id);
};

module.exports = {
  getAll,
  create,
  getById,
  update
};
