const organizationRepository = require('../repositories/organizations')

const update = async (id, body) => {
  return await organizationRepository.update(id, body)
}
const getById = async (id) => {
  return await organizationRepository.getById(id)
}

module.exports = {
  update,
  getById
}
