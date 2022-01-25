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

module.exports = {
  create,
  remove
}
