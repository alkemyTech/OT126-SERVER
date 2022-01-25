const activitiesService = require('../services/activities')

const create = async (req, res, next) => {
  try {
    const data = await activitiesService.create(req.body)
    res.status(200).json({
      msg: 'Activity created successfully',
      data: data
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  create
}
