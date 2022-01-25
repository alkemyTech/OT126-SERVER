const slidesRepository = require('../repositories/slides')

const remove = async (id) => {
  await slidesRepository.remove(id)
}
<<<<<<< HEAD

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
=======

module.exports = {
  remove
>>>>>>> 55335a2ed76c4c242a882ec58bea8e5673facc60
}
