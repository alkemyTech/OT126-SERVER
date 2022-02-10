const categoriesRepository = require('../repositories/categories')
const { paginate } = require('../modules/pagination')
const filesModule = require('../modules/files')

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

const create = async (data, fileImage) => {
  // every name must be unique
  const error = await uniqueName(data.name)
  if (error) throw error
  if (fileImage) data.image = await filesModule.uploadFile(fileImage)

  return await categoriesRepository.create(data)
}

const getAll = async (req) => {
  return paginate(categoriesRepository.getAll, req, 10)
}

const remove = async (id) => {
  const currentCategory = await categoriesRepository.getById(id)
  if (currentCategory === null) {
    const error = new Error(`Category with id ${id} not found`)
    error.status = 404
    throw error
  }
  await filesModule.deleteFile(currentCategory.image)
  await categoriesRepository.remove(id)
}

const getById = async (id) => {
  const category = await categoriesRepository.getById(id)
  if (!category) {
    const error = new Error('The category does not exist')
    error.status = 404
    throw error
  }
  return category
}

const update = async ({ id }, categoryData, imageFile) => {
  const findCategory = await categoriesRepository.getById(id)

  if (!findCategory) {
    const error = new Error(`Id: ${id}, has not been assigned any category`)
    error.status = 400
    throw error
  }

  // every name must be unique
  const error = await uniqueName(categoryData.name)
  if (error) throw error

  categoryData.image = await filesModule.updateImageHandler(imageFile || categoryData.image, findCategory.image)
  await categoriesRepository.update(id, categoryData)

  return await categoriesRepository.getById(id)
}

module.exports = {
  create,
  remove,
  getById,
  getAll,
  update
}
