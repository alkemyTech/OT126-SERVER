const activitiesRepository = require('../repositories/activities')

const update = async (id, data) => {
  const updatedActivity = await activitiesRepository.update(id, data)
  if (updatedActivity) return updatedActivity
  const error = new Error(`Activity with id ${id} does not exist`)
  error.status = 404
  throw error
}

module.exports = {
  update
}
