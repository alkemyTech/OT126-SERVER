const categoriesRepository = require('../repositories/categories')

const create = async (category) => {
  const uniqueName = await categoriesRepository.findByName(category.name) != null

  if (uniqueName) {
    const error = new Error(`Name: ${category.name}, is not unique`)
    error.status = 400
    throw error
  }
  return await categoriesRepository.create(category)
}

const remove = async (id) => {
  await categoriesRepository.remove(id)
}

/* const update = async (id) => {
  return 0
}

const getAll = async (id) => {
  return 0
}

const getById = async (id) => {
  return 0
} */

module.exports = {
  create,
  remove
  /* update,
  getAll,
  getById */
}
