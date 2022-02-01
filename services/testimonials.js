const testimonialsRepo = require('../repositories/testimonials')

const remove = async (id) => {
  await testimonialsRepo.remove(id)
}

const create = async (body) => {
  const testimonial = await testimonialsRepo.create(body)
  return testimonial
}

const update = async (id, body) => {
  const rowsCount = await testimonialsRepo.update(id, body)

  if (rowsCount[0] == 0) {
    throw new Error(`Testimonial ${id} don't exist`)
  };

  const testimonialUpdated = await testimonialsRepo.getById(id)
  return testimonialUpdated
}

const getAll = async () => {
  const testimonials = await testimonialsRepo.getAll()
  return testimonials
}

const getAllWithPagination = async (page, size) => {
  const testimonials = await testimonialsRepo.getAllWithPagination(page, size)
  return testimonials
}

module.exports = {
  remove,
  create,
  getAll,
  update
}
