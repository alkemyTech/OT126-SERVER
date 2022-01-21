const newsRepository = require('../repositories/news')
const categoryRepository = require('../repositories/categories')

const create = async (newsToCreate) => {
  const newsCategory = await categoryRepository.findByName('news')
  if (newsCategory && newsCategory.id) {
    newsToCreate.categoryId = newsCategory.id
  } else {
    // @TO-DO LOG TO DEVS. category 'news' not found
    newsToCreate.categoryId = null
  }
  const newsCreated = await newsRepository.create(newsToCreate)
  return newsCreated
}

module.exports = {
  create
}
