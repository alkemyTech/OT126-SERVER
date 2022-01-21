const testimonialsService = require('../services/testimonials')

const remove = async (req, res, next) => {
  try {
    await testimonialsService.remove(req.params.id)
    res.status(200).json({ msg: `Testimonial ${req.params.id} removed succesfully` })
  } catch (e) {
    next(e)
  }
}

const create = async (req, res, next) => {
  try {
    await testimonialsService.create(req.body)
    res.status(200).json({ msg: 'Testimonial created succesfully', data: req.body })
  } catch (e) {
    next(e)
  }
}

module.exports = {
  /* getAll,
  getById,
  update,
  */
  remove,
  create
}
