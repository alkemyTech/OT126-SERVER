const db = require('../models')

const getRoleById = async (id) => {
  return await db.Roles.findOne({ where: { id } })
}

module.exports = {
  getRoleById
}
