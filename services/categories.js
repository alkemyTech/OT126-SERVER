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

const getAll = async () => {
  const categories = await categoriesRepository.getAll()
  return categories.map((data) => {
    const { name } = data.dataValues
    return { name }
  })
}

const remove = async (id) => {
  await categoriesRepository.remove(id)
}

module.exports = {
  create,
  remove,
  getAll
}
