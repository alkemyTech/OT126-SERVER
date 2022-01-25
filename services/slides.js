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
  if (body) {
    return await slidesRepository.create(body)
  }
  const error = new Error('There were problems trying to create this slide')
  error.status = 400
  throw error
}

module.exports = {
  remove,
  getAll,
  getById,
  create
}
