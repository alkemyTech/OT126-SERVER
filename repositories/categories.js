const db = require('../models')

const create = async (category) => {
  return await db.Categories.create(category)
}

const findByName = async (name) => {
  const categories = await db.Categories.findOne({ where: { name } })
  return categories === null ? null : categories
}

const remove = async (id) => {
  await db.Categories.destroy({ where: { id } })
}

const getById = async (id) => {
  return await db.Categories.findByPk(id)
} 

module.exports = {
  create,
  remove,
  findByName,
  getById
}
