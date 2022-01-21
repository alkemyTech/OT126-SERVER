const testimonialsRepo = require('../repositories/testimonials');

const remove = async (id) => {
  await testimonialsRepo.remove(id);
};

const update = async (id, body) => {
  const data = await testimonialsRepo.update(id, body);
  return data;
}

module.exports = {
  update,
  remove
};
