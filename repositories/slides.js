const db = require('../models')

const remove = async (id) => {
  const data = await db.Slides.destroy({
    where: { id }
  })
  return data
}

const getAll = async () => {
  const data = await db.Slides.findAll({
    attributes: ['id', 'imageUrl', 'text', 'order', 'organizationId']
  })
  return data
}

const getById = async (id) => {
  const data = await db.Slides.findOne({
    where: { id }
  })
  return data
}

module.exports = {
  remove,
  getAll,
  getById
}
