const testimonialsRepo = require('../repositories/testimonials')

const remove = async (id) => {
  await testimonialsRepo.remove(id)
}

const create = async (body) => {
  await testimonialsRepo.create(body)
}

const getAll = async () => {
  const testimonials = await testimonialsRepo.getAll()
  return testimonials
}

module.exports = {
  remove,
  create,
  getAll,
}
