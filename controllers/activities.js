const activitiesService = require('../services/activities')

const create = async (req, res, next) => {
  try {
    res.status(200).json(await activitiesService.create(req.body))
  } catch (error) {
    next(error)
  }
}

module.exports = {
  create
}
