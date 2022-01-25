const db = require('../models')

const create = async (body) => {
  return await db.Members.create(body)
}
const remove = async (id) => {
  await db.Members.destroy({ where: { id: id } })
}

const getAll = async () => {
  return await db.Members.findAll()
}
module.exports = {
  remove,
  create,
  getAll
}
