const bcrypt = require('bcrypt')
/* const authModule = require('../modules/auth') */
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

  /* const token = getToken(user)
  return token */
}

const getAll = async () => {
  return await usersRepository.getAll()
}

const create = async (body) => {
  const user = await usersRepository.getAll()

  const emailMatch = user.find(value => value.email === body.email)
  if (emailMatch) {
    return false
  } else {
    return await usersRepository.create(body)
  }
}

module.exports = {
  login,
  getAll,
  create
}

/* function getToken (user) {
  const tokenPayload = {
    userId: user.id
  }
  const token = authModule.createToken(tokenPayload)
  return token
}
 */
