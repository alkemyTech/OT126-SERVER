const testimonialsService = require('../services/testimonials')
const { validationResult } = require('express-validator')

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
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(422).json({ errores: errors.array() })
    }

    await testimonialsService.create(req.body)
    res.status(200).json({ success: req.body, msg: 'Testimonial created succesfully' })
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
