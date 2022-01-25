const db = require('../models')

const remove = async (id) => {
  const data = await db.Slides.destroy({
    where: { id }
  })
  return data
}
<<<<<<< HEAD

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
=======

module.exports = {
  remove
>>>>>>> 55335a2ed76c4c242a882ec58bea8e5673facc60
}
