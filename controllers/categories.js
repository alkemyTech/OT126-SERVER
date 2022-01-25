const categoriesService = require('../services/categories')

const remove = async (req, res, next) => {
  try {
    await categoriesService.remove(req.params.id)
    res.status(200).json({ msg: `Category ${req.params.id} removed succesfully` })
  } catch (error) {
    next(error)
  }
}

const create = async (req, res, next) => {
  try {
    const category = await categoriesService.create(req.body)
    res.status(200).json({ msg: `Category ${req.body.name} create succesfully`, data: category })
  } catch (error) {
    next(error)
  }
}

const getById = async (req, res, next) => {
  try {
    const category = await categoriesService.getById(req.params.id)
    res.status(200).json({ data: category })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  create,
  remove,
  getById
}
