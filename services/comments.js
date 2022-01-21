const commentsRepository = require('../repositories/comments')

const getAll = async () => {
  const response = await commentsRepository.getAll()
  return response
}
/* const remove = async (id) => {
  await commentsRepository.remove(id);
}; */

module.exports = {
  getAll
}
