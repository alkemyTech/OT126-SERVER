const testimonialsService = require('../services/testimonials')

const remove = async (req, res, next) => {
  try {
    await testimonialsService.remove(req.params.id)
    res.status(200).json({ msg: `Testimonial ${req.params.id} removed succesfully` })
  } catch (e) {
    next(e)
  }
}

const getAll = async (req, res, next) => {
  const pageNumber = Number.parseInt(req.query.page)
  const size = 2
  let page = 1
  try {
    if (pageNumber > 1 && !Number.isNaN(pageNumber)) {
      page = pageNumber
    }
    const testimonials = await testimonialsService.getAllWithPagination(page, size)

    // const testimonials = await testimonialsService.getAll()
    res.status(200).json({ data: testimonials.rows, lastPage: Math.ceil(testimonials.count / size), hasNextPage: (size * page) < testimonials.count, hasPreviousPage: page > 1 })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  remove,
  getAll
}
