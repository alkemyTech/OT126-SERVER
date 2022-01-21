const slidesRepository = require('../repositories/slides')

const remove = async (id) => {
  await slidesRepository.remove(id)
}

const getAll = async (req, res) => {
  return await slidesRepository.getAll()
}

module.exports = {
  remove,
  getAll
}
