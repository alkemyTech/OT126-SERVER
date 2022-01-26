const activitiesService = require('../services/activities')

const update = async (req, res, next) => {
  try {
    const data = await activitiesService.update(req.params.id, req.body)
    res.status(200).json({
      msg: 'Activity updated successfully',
      data: data
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  update
}
