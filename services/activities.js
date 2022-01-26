const activitiesRepository = require('../repositories/activities')

const getAll = async () => {
  return await activitiesRepository.getAll()
}

const create = async (data) => {
  return await activitiesRepository.create(data)
}

module.exports = {
  getAll,
  create
}
