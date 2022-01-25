const db = require('../models')

const getNameById = async (id) => {
  return await db.Roles.findOne({ where: { id } })
}

module.exports = {
  getNameById
}
