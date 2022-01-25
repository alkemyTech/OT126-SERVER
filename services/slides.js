const slidesRepository = require('../repositories/slides')

const remove = async (id) => {
  await slidesRepository.remove(id)
}

const getAll = async (req, res) => {
  return await slidesRepository.getAll()
}

const getById = async (id) => {
  if (id) {
    return await slidesRepository.getById(id)
  }
}

module.exports = {
  remove,
  getAll,
  getById
}
