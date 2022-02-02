const bcrypt = require('bcrypt')
const authModule = require('../modules/auth')
const usersRepository = require('../repositories/users')
const rolesRepository = require('../repositories/roles')

const login = async (credentials) => {
  const errorMsg = 'Email and/or Password incorrect'
  const user = await usersRepository.findByEmail(credentials.email)
  if (!user) {
    const error = new Error(errorMsg)
    error.status = 401
    throw error
  }
  const passwordsMatch = bcrypt.compareSync(credentials.password, user.password)
  if (!passwordsMatch) {
    const error = new Error(errorMsg)
    error.status = 401
    throw error
  } // code waiting for an error handler

  const token = getToken(user)
  return token
}

const getAll = async () => {
  const data = await usersRepository.getAll()
  if (!data) {
    const error = new Error('There are no users in our database')
    error.status = 400
    throw error
  }
  return data
}

const create = async (body) => {
  const standardRole = await rolesRepository.getRoleById(body.roleId)
  const user = {
    ...body,
    roleId: standardRole.id,
    password: bcrypt.hashSync(body.password, 12)
  }
  const createdUser = await usersRepository.create(user)
  const token = getToken(body.email)

  if (createdUser) {
    return { createdUser, token }
  }
  const error = new Error('Something went wrong. User registration failed.')
  error.status = 400
  throw error
}

module.exports = {
  login,
  getAll,
  create
}

function getToken (user) {
  const tokenPayload = {
    userId: user.id
  }
  const token = authModule.createToken(tokenPayload)
  return token
}
