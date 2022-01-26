const testimonialsRepo = require('../repositories/testimonials')

const remove = async (id) => {
  await testimonialsRepo.remove(id)
}

const getAll = async () => {
  const testimonials = await testimonialsRepo.getAll()
  return testimonials
}

module.exports = {
  remove,
  getAll
}
