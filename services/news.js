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

const remove = async (id) => {
  const newsRemovedCount = await newsRepository.remove(id)
  if (newsRemovedCount <= 0) {
    const error = new Error(`Novelty with id ${id} not found`)
    error.status = 404
    throw error
  }
}

const getById = async (id) => {
  const novelty = await newsRepository.getById(id)
  if (novelty === null) {
    const error = new Error(`Novelty with id ${id} not found`)
    error.status = 404
    throw error
  }
  return novelty
}

module.exports = {
  create,
  remove,
  getById
}
