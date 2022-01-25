const slidesRepository = require('../repositories/users')

const getAll = async () => {
  return await slidesRepository.getAll()
}

const create = async (firstName, lastName, email, password) => {
  return await slidesRepository.create(firstName, lastName, email, password)
}

module.exports = {
  create,
  getAll
}
