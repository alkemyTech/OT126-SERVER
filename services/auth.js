const bcrypt = require('bcrypt')
const { createToken } = require('../middlewares/jwt')
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

  const token = createToken(user)
  return token
}

module.exports = {
  login
}
