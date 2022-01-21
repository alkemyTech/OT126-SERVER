const newsService = require('../services/news')

const create = async (req, res, next) => {
  try {
    // @TO-DO body validations (name, content, image)
    const newsCreated = await newsService.create(req.body)
    res.status(201).json({ msg: 'News created succesfully', obj: newsCreated })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  create
}
