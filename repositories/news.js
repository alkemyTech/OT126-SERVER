const db = require('../models')

const create = async (novelty) => {
  const noveltyCreated = await db.News.create(novelty)
  return noveltyCreated
}

const getAll = async () => {
  const news = await db.News.findAll({ attributes: ['id', 'name'] })
  return news
}

module.exports = {
  create,
  getAll
}
