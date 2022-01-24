const newsService = require('../services/news')

const create = async (req, res, next) => {
  try {
    const noveltyCreated = await newsService.create(req.body)
    res.status(201).json({ msg: 'Novelty created succesfully', data: noveltyCreated })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  create
}
