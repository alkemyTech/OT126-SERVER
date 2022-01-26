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

const create = async (body) => {
  return await slidesRepository.create(body)
}

module.exports = {
  remove,
  getAll,
  getById,
  create
}
