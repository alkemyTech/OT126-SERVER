const db = require('../models')

const getAll = async () => {
  return await db.Activities.findAll({
    attributes: ['id', 'name']
  })
}

const create = async (data) => {
  return await db.Activities.create(data)
}

module.exports = {
  getAll,
  create
}
