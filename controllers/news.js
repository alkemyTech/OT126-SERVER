const newsService = require('../services/news')

const create = async (req, res, next) => {
  try {
    const noveltyCreated = await newsService.create(req.body)
    res.status(201).json({ msg: 'Novelty created succesfully', data: noveltyCreated })
  } catch (error) {
    next(error)
  }
}

const remove = async (req, res, next) => {
  try {
    await newsService.remove(req.params.id)
    res.status(200).json({ msg: 'Novelty removed succesfully' })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  create,
  remove
}