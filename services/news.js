const newsRepository = require('../repositories/news')
const categoriesRepository = require('../repositories/categories')

const create = async (noveltyToCreate) => {
  const newsCategory = await categoriesRepository.findByName('news')
  if (newsCategory && newsCategory.id) {
    noveltyToCreate.categoryId = newsCategory.id
  } else {
    // @TODO LOG TO DEVS. category 'news' not found
    noveltyToCreate.categoryId = null
  }
  const noveltyCreated = await newsRepository.create(noveltyToCreate)
  return noveltyCreated
}

const getAll = async () => {
  const news = await newsRepository.getAll()
  return news
}

module.exports = {
  create,
  getAll
}
