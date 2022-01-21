const db = require('../models')

const create = async (news) => {
  const newsCreated = await db.News.create(news)
  return newsCreated
}

module.exports = {
  create
}
