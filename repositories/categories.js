const db = require('../models')

const create = async (category) => {
  return await db.Categories.create(category)
}

const findByName = async (name) => {
  const categories = await db.Categories.findOne({ where: { name } })
  return categories === null ? null : categories
}

const getAll = async () => {
  return await db.Categories.findAll({ attributes: ['name'] })
}

const remove = async (id) => {
  await db.Categories.destroy({ where: { id } })
}

module.exports = {
  create,
  remove,
  getAll,
  findByName
}
