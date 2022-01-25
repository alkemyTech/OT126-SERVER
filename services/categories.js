const categoriesRepository = require('../repositories/categories')

const create = async (category) => {
  const uniqueName = await categoriesRepository.findByName(category.name)

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

const getById = async (id) => {
  const category = await categoriesRepository.getById(id)
  if (!category){
    const error = new Error('The category does not exist')
    error.status = 404
    throw error
  }
  return category
} 

module.exports = {
  create,
  remove,
  getById
}
