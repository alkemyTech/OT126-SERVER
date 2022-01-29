const slidesService = require('../services/slides')

const remove = async (req, res, next) => {
  try {
    await slidesService.remove(req.params.id)
    res.status(200).json({ msg: `Slide ${req.params.id} removed succesfully` })
  } catch (error) {
    next(error)
  }
}

const getAll = async (req, res, next) => {
  try {
    const data = await slidesService.getAll()

    res.status(200).json({ data: data })
  } catch (error) {
    next(error)
  }
}

const getById = async (req, res, next) => {
  try {
    const data = await slidesService.getById(req.params.id)

    res.status(200).json({ data: data })
  } catch (error) {
    next(error)
  }
}

const create = async (req, res, next) => {
  try {
    const data = await slidesService.create(req.body)

    res.status(200).json({ data: data })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  remove,
  getAll,
  getById,
  create
}
