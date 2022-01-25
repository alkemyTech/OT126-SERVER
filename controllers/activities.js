const activitiesService = require('../services/activities')

const update = async (req, res, next) => {
  try {
    res.status(200).json({
      msg: 'Activity updated successfully',
      data: await activitiesService.update(req.params.id, req.body)
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  update
}
