const db = require('../models')

const create = async (body) => {
  return await db.Members.create(body)
}
const remove = async (id) => {
  await db.Members.destroy({ where: { id: id } })
}

module.exports = {
  remove,
  create

}
