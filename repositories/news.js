const db = require('../models')

const create = async (novelty) => {
  const noveltyCreated = await db.News.create(novelty)
  return noveltyCreated
}

module.exports = {
  create
}
