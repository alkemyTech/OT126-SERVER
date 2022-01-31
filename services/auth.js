const bcrypt = require('bcrypt')
const authModule = require('../modules/auth')
const usersRepository = require('../repositories/users')

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
  return await usersRepository.getAll()
}

const create = async (body) => {
  const user = {
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    password: bcrypt.hashSync(body.password, 12)
  }
  const register = await usersRepository.create(user)

  if (register) {
    return register
  }
  const error = new Error('Something went wrong. User registration failed.')
  error.status = 400
  throw error
}

const getByToken = async (authorization) => {
  const token = authorization.split(' ')[1]
  const payLoad = authModule.verifyToken(token)

  return await usersRepository.getById(payLoad.userId)
}

module.exports = {
  login,
  getAll,
  create,
  getByToken
}

function getToken (user) {
  const tokenPayload = {
    userId: user.id
  }
  const token = authModule.createToken(tokenPayload)
  return token
}
