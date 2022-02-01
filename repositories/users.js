const Models = require('../models/index')

const getAll = async () => {
  const data = await Models.Users.findAll({
    attributes: ['firstName', 'email', 'image']
  })
  return data
}

const create = async (user) => {
  const data = await Models.Users.create(user)

  return data
}

const getById = async (id) => {
  const user = await Models.Users.findByPk(id)
  return user
}

const findByEmail = async (userEmail) => {
  const data = await Models.Users.findOne({
    where: { email: userEmail },
    raw: true
  })
  return data
}

const remove = async id => {
  return await Models.Users.destroy({ where: { id } })
}

const update = async (id, body) => {
  const rowsUpdated = await Models.Users.update(body, {
    fields: ['firstName', 'lastName', 'email', 'image', 'password'],
    where: { id }
  })
  return rowsUpdated
}

module.exports = {
  getAll,
  getById,
  findByEmail,
  create,
  remove,
  update
}
