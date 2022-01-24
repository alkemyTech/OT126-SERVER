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

/* const update = async (id) => {
  return 0
}

const getAll = async (id) => {
  return 0
}

const getById = async (id) => {
  const category = await db.Categories.findById(id)
} */

// create, update, remove, getAll, getById, getByName
module.exports = {
<<<<<<< HEAD
  remove
=======
  create,
  remove,
  /* update,
  getAll,
  getById, */
  findByName
>>>>>>> dev
}
