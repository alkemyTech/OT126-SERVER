const testimonialsService = require('../services/testimonials')

const remove = async (req, res, next) => {
  try {
    await testimonialsService.remove(req.params.id)
    res.status(200).json({ msg: `Testimonial ${req.params.id} removed succesfully` })
  } catch (e) {
    next(e)
  }
}

const update = async (req, res, next) => {
  try {
    const testimonialUpdated = await testimonialsService.update(req.params.id, req.body);
    res.status(200).json({ msg: `Testimonial ${testimonialUpdated.id} updated succesfully`, data: testimonialUpdated });
  } catch (error) {
    next (error)
  }
  
}

module.exports = {
  update,
  remove
}
