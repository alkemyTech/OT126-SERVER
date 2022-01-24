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

const update = async (id, noveltyToUpdate) => {
  if (noveltyToUpdate.categoryId) {
    const categorySelected = await categoriesRepository.getById(noveltyToUpdate.categoryId)
    if (categorySelected === null) {
      const error = new Error(`Category with id ${noveltyToUpdate.categoryId} not found. Novelty not updated`)
      error.status = 400
      throw error
    }
  }
  const newsUpdatedCount = await newsRepository.update(id, noveltyToUpdate)
  if (newsUpdatedCount <= 0) {
    const error = new Error(`Novelty with id ${id} not found`)
    error.status = 404
    throw error
  }
  const noveltyUpdated = await newsRepository.getById(id)
  return noveltyUpdated
}

module.exports = {
  create,
  remove,
  getById,
  update
}
