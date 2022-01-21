const db = require('../models');

const remove = async (id) => {
  const data = await db.Testimonials.destroy({
    where: { id }
  });
  return data;
};

const update = async (id, body) => {
  const data = await db.Testimonials.update(body,{
    where: { id }
  });
  return data;
}

module.exports = {
  update,
  remove
};
