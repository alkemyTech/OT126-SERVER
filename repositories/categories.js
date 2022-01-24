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

const update = async (id) => {
  return 0
}

const getById = async (id) => {
  return await db.Categories.findById(id)
}

module.exports = {
  create,
  remove,
  update,
  getAll,
  getById,
  findByName
}
