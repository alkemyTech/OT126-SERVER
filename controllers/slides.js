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

    if (data) {
      res.status(200).json({ data: data })
    } else {
      res.status(400).json({ msg: 'Something went wrong, please try again later' })
    }
  } catch (error) {
    next(error)
  }
}

const create = async (req, res, next) => {
  try {
    const { imageUrl, text, order, organizationId } = req.body

    const data = await slidesService.create(imageUrl, text, order, organizationId)

    console.log(data)

    if (data) {
      res.status(200).json({ data: data })
    } else {
      res.status(400).json({ msg: 'error' })
    }
  } catch (error) {
    next(error)
  }
}

const update = async (req, res, next) => {
  try {
    const { imageUrl, text, order, organizationId } = req.body

    const data = await slidesService.update(req.params.id, imageUrl, text, order, organizationId)

    if (data[0]) {
      res.status(200).json({ msg: `Slide ${req.params.id} updated succesfully` })
    } else {
      res.status(400).json({ msg: 'There were problems trying to update this slide, check if this slide exist' })
    }
  } catch (error) {
    next(error)
  }
}

module.exports = {
  remove,
  getAll,
  getById,
  create,
  update
}
