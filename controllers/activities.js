const activitiesService = require('../services/activities')

const getAll = async (req, res, next) => {
  try {
    res.status(200).json(await activitiesService.getAll())
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAll
}
