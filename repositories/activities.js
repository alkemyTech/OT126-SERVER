const db = require('../models')

const getAll = async () => {
  return await db.Activities.findAll({
    attributes: ['id', 'name']
  })
}

module.exports = {
  getAll
}
