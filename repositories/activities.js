const db = require('../models')

const getAll = async () => {
  return await db.Activities.findAll({
    attributes: ['id', 'name']
  })
}

const create = async (data) => {
  return await db.Activities.create(data)
}

const update = async (activity, data) => {
  const updatedActivity = await activity.update(data)
  return updatedActivity.get()
}

module.exports = {
  getAll,
  create,
  update
}
