const testimonialsRepo = require('../repositories/testimonials')

const remove = async (id) => {
  await testimonialsRepo.remove(id)
}

const create = async (body) => {
  await testimonialsRepo.create(body)
}

module.exports = {
  create,
  remove

}
