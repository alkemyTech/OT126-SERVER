const db = require('../models');

const remove = async (id) => {
  const data = await db.Testimonials.destroy({
    where: { id }
  });
  return data;
};

const create = async (body) => {
  const data = await db.Testimonials.create(body);
  return data;
};

module.exports = {
  create,
  remove,
};
