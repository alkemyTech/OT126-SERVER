const slidesRepository = require('../repositories/slides')
const filesModule = require('../modules/files')

const remove = async (id) => {
  const getOneSlide = await slidesRepository.getById(id)
  await filesModule.deleteFile(getOneSlide.image)
  await slidesRepository.remove(id)
}

const getAll = async (req, res) => {
  return await slidesRepository.getAll()
}

const getById = async (id) => {
  return await slidesRepository.getById(id)
}

const create = async (body, imageFile) => {
  body.image = await filesModule.uploadFile(imageFile)
  return await slidesRepository.create(body)
}

const update = async (id, body, imageFile) => {
  const data = await slidesRepository.update(id, body)
  const updates = await slidesRepository.getById(id)
  if (!data[0]) {
    const error = new Error('ID not found')
    error.status = 400
    throw error
  }
  body.image = await filesModule.updateImageHandler(imageFile || body.image, updates.image)
  return { data, updates }
}

module.exports = {
  remove,
  getAll,
  getById,
  create,
  update
}
