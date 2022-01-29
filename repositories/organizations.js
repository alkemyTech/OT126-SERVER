const db = require('../models')

const update = async (id, body) => {
  const data = await db.Organization.update(body, {
    where: { id }
  })
  return data
}

const getAll = async () => {
  const data = await db.Slides.findAll({
    attributes: ['id', 'imageUrl', 'text', 'order', 'organizationId'],
    order: [
      ['order', 'ASC']
    ]
  })
  return data
}

module.exports = {
  update,
  getAll
}
