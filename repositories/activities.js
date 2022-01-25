const db = require('../models')

const update = async (id, data) => {
  const activity = await db.Activities.findByPk(id)
  if (activity == null) return false
  const updatedActivity = await activity.update(data)
  return updatedActivity.get()
}

module.exports = {
  update
}
