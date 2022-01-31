const db = require('../models')

const create = async (body) => {
  const data = await db.Testimonials.create(body)
  return data
}

const remove = async (id) => {
  const data = await db.Testimonials.destroy({
    where: { id }
  })
  return data
}

const update = async (id, body) => {
  const rowsUpdated = await db.Testimonials.update(body,{
    where: { id }
  });
  return rowsUpdated;
}

const getAll = async () => {
  const data = await db.Testimonials.findAll()
  return data
}
  
const getById = async (id) => {
  const testimonial = await db.Testimonials.findByPk(id)
  return testimonial

}

module.exports = {
  create,
  update,
  remove,
  getById,
  getAll,
};

