const db = require('../models')

const getRoleById = async (roleId) => {
  return await db.Roles.findOne({ where: { id: roleId } })
}

module.exports = {
  getRoleById
}
