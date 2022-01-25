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
  return await slidesRepository.update(id, body)
}

module.exports = {
  remove,
  getAll,
  getById,
  create,
  update
}
