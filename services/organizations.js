const organizationRepository = require('../repositories/organizations')

const update = async (id, body) => {
  return await organizationRepository.update(id, body)
}

const getAll = async (id, body) => {
  return await organizationRepository.getAll()
}

module.exports = {
  update,
  getAll
}
