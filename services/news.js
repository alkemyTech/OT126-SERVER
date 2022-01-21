const newsRepository = require('../repositories/news')
const categoryRepository = require('../repositories/categories')

const create = async (noveltyToCreate) => {
  const newsCategory = await categoryRepository.findByName('news')
  if (newsCategory && newsCategory.id) {
    noveltyToCreate.categoryId = newsCategory.id
  } else {
    // @TO-DO LOG TO DEVS. category 'news' not found
    noveltyToCreate.categoryId = null
  }
  const noveltyCreated = await newsRepository.create(noveltyToCreate)
  return noveltyCreated
}

module.exports = {
  create
}
