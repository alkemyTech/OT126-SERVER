const db = require('../models')

const getAll = async () => {
  const response = await db.Comments.findAll({
    order: [['createdAt', 'DESC']],
    attributes: ['body']
  })
  console.log(response)
  return response
}
/* const remove = async (id) => {
  await db.Comments.destroy({ where: { id } });
} */

module.exports = {
  getAll
}
