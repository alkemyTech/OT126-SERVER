const db = require('../models')

const remove = async (id) => {
  const data = await db.Testimonials.destroy({
    where: { id }
  })
  return data
}

const getAll = async () => {
  const data = await db.Testimonials.findAll()
  return data
}

module.exports = {
  remove,
  getAll,
}
