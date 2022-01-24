const newsService = require('../services/news')

const create = async (req, res, next) => {
  try {
    const noveltyCreated = await newsService.create(req.body)
    res.status(201).json({ msg: 'Novelty created succesfully', data: noveltyCreated })
  } catch (error) {
    next(error)
  }
}

const getAll = async (req, res, next) => {
  try {
    const news = await newsService.getAll()
    res.status(200).json({ data: news })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  create,
  getAll
}
