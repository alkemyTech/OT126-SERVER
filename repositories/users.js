const Models = require('../models/index')
const bcrypt = require('bcrypt')

const getAll = async () => {
  const data = await Models.Users.findAll({
    attributes: ['firstName', 'email', 'image']
  })
  return data
}

const create = async (body) => {
  const data = await Models.Users.create({
    firstName: body.firstName.trim(),
    lastName: body.lastName.trim(),
    email: body.email.trim(),
    password: bcrypt.hashSync(body.password, 12)
  })

  return data
}
const getById = async (id) => {
  const user = await Models.Users.findByPk(id, {
    attributes: {
      exclude: ['password']
    }
  })
  return user
}

const findByEmail = async (userEmail) => {
  const data = await Models.Users.findOne({
    where: { email: userEmail },
    raw: true
  })
  return data
}

const remove = async (id) => {
  await Models.Users.destroy({ where: { id: id } })
  return true
}

const update = async (id, changes) => {
  const userUpdate = await Models.Users.update(
    { firstName: changes.firstName, lastName: changes.lastName },
    {
      where: {
        id: id
      }
    }
  )
  return userUpdate
}

module.exports = {
  getAll,
  getById,
  findByEmail,
  create,
  remove,
  update
}
