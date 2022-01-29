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

const update = async (id, body) => {
  const data = await slidesRepository.update(id, body)
  const updates = await slidesRepository.getById(id)
  if (!data[0]) {
    const error = new Error('ID not found')
    error.status = 400
    throw error
  }
  return { data, updates }
}

module.exports = {
  remove,
  getAll,
  getById,
  create,
  update
}
