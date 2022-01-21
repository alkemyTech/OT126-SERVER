const db = require('../models')

const remove = async (id) => {
  const data = await db.Testimonials.destroy({
    where: { id }
  })
  return data
}

const create = async (body) => {
  await db.Testimonials.create(body)
}

module.exports = {
  create,
  remove
}
