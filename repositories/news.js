const db = require('../models')

const create = async (novelty) => {
  const noveltyCreated = await db.News.create(novelty)
  return noveltyCreated
}

/**
 * @return {number} Return number of rows removed.
 */
const remove = async (id) => {
  const rowsRemovedCount = await db.News.destroy({ where: { id: id } })
  return rowsRemovedCount
}

/**
 * @return {number} Return object entity or null.
 */
const getById = async (id) => {
  const novelty = await db.News.findByPk(id, { attributes: { exclude: ['deletedAt'] } })
  return novelty
}

module.exports = {
  create,
  remove,
  getById
}
