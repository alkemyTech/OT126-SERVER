const jwt = require('jsonwebtoken')
const userRepository = require('../repositories/users')
const isAdmin = async (req, res, next) => {
  // not implemented
  next()
}

const isAuth = async (req, res, next) => {
  try {
    const token = getToken(req)
    if (!token) {
      const error = new Error('Please provided a token Bearer in authorization.')
      error.status = 403
      throw error
    }
    const decodedToken = verifyToken(token)
    if (!decodedToken) {
      const error = new Error('The token provided isn\'t valid.')
      error.status = 403
      throw error
    }
    const user = await userRepository.getById(decodedToken.userId)
    if (!user) {
      const error = new Error('Not found user with token provided.')
      error.status = 403
      throw error
    }
    next()
  } catch (error) {
    next(error)
  }
}

const isOwnUser = async (req, res, next) => {
  // not implemented
  next()
}

const getToken = async (req) => {
  const authToken = req.headers.authorization
  // authHeader && authHeader.split(' ')[1]
  const token = authToken && authToken.startsWith('Bearer ').split(' ')[1]
  return token
}
const verifyToken = async (token) => {
  return jwt.verify(token, process.env.PASS_JWT)
}
module.exports = {
  isAdmin,
  isAuth,
  isOwnUser
}
