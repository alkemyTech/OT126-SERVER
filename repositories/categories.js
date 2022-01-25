const db = require('../models')

const create = async (category) => {
  return await db.Categories.create(category)
}

const findByName = async (name) => {
  return await db.Categories.findOne({ where: { name } })
}

const getAll = async () => {
  return await db.Categories.findAll(({ attributes: ['id', 'name'] }))
}

const remove = async (id) => {
  await db.Categories.destroy({ where: { id } })
}

const update = async (id, category) => {
  return await db.Categories.update(category, { where: { id } })
}

const getById = async (id) => {
  return await db.Categories.findByPk(id)
}

module.exports = {
  create,
  remove,
  getAll,
  findByName,
  update,
  getById
}
