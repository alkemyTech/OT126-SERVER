const slidesRepository = require('../repositories/slides')

const remove = async (id) => {
  await slidesRepository.remove(id)
}

const getAll = async (req, res) => {
  return await slidesRepository.getAll()
}

const getById = async (id) => {
  return await slidesRepository.getById(id)
}

const create = async (imageUrl, text, order, organizationId) => {
  return await slidesRepository.create(imageUrl, text, order, organizationId)
}

const update = async (id, body) => {
  const data = await slidesRepository.update(id, body)
  if (data[0]) {
    return data
  }
  const error = new Error('ID not found')
  error.status = 404
  throw error
}

module.exports = {
  remove,
  getAll,
  getById,
  create,
  update
}
