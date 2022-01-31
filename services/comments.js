const commentsRepository = require('../repositories/comments')

const getAll = async () => {
  const response = await commentsRepository.getAll()
  return response
}
const create = async (data) => {
  const response = await commentsRepository.create(data)
  if (!response) {
    const error = new Error('there was an error in comment creation')
    error.status = 403
    throw error
  }
  return response
}
/* const remove = async (id) => {
  await commentsRepository.remove(id);
}; */

module.exports = {
  getAll,
  create
}
