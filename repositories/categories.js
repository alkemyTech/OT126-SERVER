const db = require('../models')

const create = async (category) => {
  return await db.Categories.create(category)
}

const findByName = async (name) => {
  const categories = await db.Categories.findAll({ where: { name } })
  return categories.length === 0 ? null : categories[0]
}

const remove = async (id) => {
  await db.Categories.destroy({ where: { id } })
}

/* const update = async (id) => {
  return 0
}

const getAll = async (id) => {
  return 0
}

const getById = async (id) => {
  const category = await db.Categories.findById(id)
  return category.length === 0 ? null : category[0]
} */

// create, update, remove, getAll, getById, getByName
module.exports = {
  create,
  remove,
  /* update,
  getAll,
  getById, */
  findByName
}
