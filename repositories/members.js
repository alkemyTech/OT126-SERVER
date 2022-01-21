const db = require('../models')

const create = async (body) => {
  try {
    body.image = 'none'
    return await db.Members.create(body)
  } catch (error) {
    console.error(error)
  }
}
const remove = async (id) => {
  await db.Members.destroy({ where: { id: id } })
}

module.exports = {
  remove,
  create

}
