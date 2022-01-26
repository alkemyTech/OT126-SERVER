const testimonialsRepo = require('../repositories/testimonials')

const remove = async (id) => {
  await testimonialsRepo.remove(id)
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
  getAll,
  getAllWithPagination
}
