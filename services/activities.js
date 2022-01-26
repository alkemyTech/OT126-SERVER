const activitiesRepository = require('../repositories/activities')
const db = require('../models')

const update = async (id, data) => {
  const activity = await db.Activities.findByPk(id)
  if (activity == null) {
    const error = new Error(`Activity with id ${id} does not exist`)
    error.status = 404
    throw error
  } else {
    return await activitiesRepository.update(activity, data)
  }
}

module.exports = {
  update
}
