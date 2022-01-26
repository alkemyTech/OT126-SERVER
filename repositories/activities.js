const db = require('../models')

const update = async (activity, data) => {
  const updatedActivity = await activity.update(data)
  return updatedActivity.get()
}

module.exports = {
  update
}
