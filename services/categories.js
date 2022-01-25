const categoriesRepository = require('../repositories/categories')

// general function to verify the name
const uniqueName = async (name) => {
  const result = await categoriesRepository.findByName(name)

  if (result) {
    const error = new Error(`Name: ${name}, is not unique`)
    error.status = 400
    return error
  }
  return false
}

const create = async (category) => {
  // every name must be unique
  const error = await uniqueName(category.name)
  if (error) throw error

  return await categoriesRepository.create(category)
}

const getAll = async () => {
  const categories = await categoriesRepository.getAll()
  return categories.map((data) => {
    const { id, name } = data.dataValues
    return { id, name }
  })
}

const remove = async (id) => {
  await categoriesRepository.remove(id)
}

const update = async ({ id }, category) => {
  const findCategory = await categoriesRepository.findById(id)

  if (!findCategory) {
    const error = new Error(`Id: ${id}, has not been assigned any category`)
    error.status = 400
    throw error
  }

  // every name must be unique
  const error = await uniqueName(category.name)
  if (error) throw error

  await categoriesRepository.update(id, category)

  return await categoriesRepository.findById(id)
}

module.exports = {
  create,
  remove,
  getAll,
  update
}
