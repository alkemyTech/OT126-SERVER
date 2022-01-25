const testimonialsRepo = require('../repositories/testimonials')

const remove = async (id) => {
  await testimonialsRepo.remove(id)
}

const update = async (id, body) => {
  const rowsCount = await testimonialsRepo.update(id, body);

  if(rowsCount[0] == 0){
    throw new Error(`Testimonial ${id} don't exist`)
  };

  const testimonialUpdated = await testimonialsRepo.getById(id)
  return testimonialUpdated
}

module.exports = {
  update,
  remove
}
