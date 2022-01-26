const db = require('../models')

const getAll = async () => {
  const response = await db.Comments.findAll({
    order: [['createdAt', 'DESC']],
    attributes: ['body']
  })
  return response
}
const create = async (data) => {
  const response = await db.Comments.create(data)
  return response
}
/* const remove = async (id) => {
  await db.Comments.destroy({ where: { id } });
} */

module.exports = {
  getAll,
  create
}
