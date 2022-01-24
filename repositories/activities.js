const db = require('../models')

const create = async (data) => {
  const createdData = await db.Activities.create(data)
  return {
    msg: 'Activity created successfully',
    data: createdData
  }
}

module.exports = {
  create
}
