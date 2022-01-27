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

/**
 * @return {number} Return number of rows updated.
 */
const update = async (id, novelty) => {
  const [rowsUpdatedCount] = await db.News.update(novelty, { where: { id: id } })
  return rowsUpdatedCount
}

const getAll = async () => {
  const news = await db.News.findAll({ attributes: ['id', 'name'] })
  return news
}

const getCommentsByNewId = async (id) => {
  const response = await db.News.findByPk(id, {
    include: [
      {
        association: 'Comments',
        order: [['createdAt', 'DESC']],
        attributes: ['body']
      }
    ]
  })
  return response
}

module.exports = {
  create,
  remove,
  getById,
  update,
  getAll,
  getCommentsByNewId
}
