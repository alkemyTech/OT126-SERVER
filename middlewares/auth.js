const jwt = require('jsonwebtoken')
const usersController = require('../controllers/users')
const isAdmin = async (req, res, next) => {
  // not implemented
  next()
}

const isAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]
  if (!token) {
    const error = new Error('Please provided a token Bearer in authorization.')
    error.status = 403
    throw error
  }
  try {
    const decodedToken = jwt.verify(token, process.env.PASS_JWT)
    if (!decodedToken) {
      const error = new Error('The token provided isn\'t valid.')
      error.status = 403
      throw error
    }
    const user = await usersController.getById(decodedToken.userId)
    // for verify that user exist and role equals
    if (user && user.roleId === decodedToken.roleId) {
      req.user = user
      next()
    }
    const error = new Error('Not found user with token provided.')
    error.status = 403
    throw error
  } catch (error) {
    next(error)
  }
}

const isOwnUser = async (req, res, next) => {
  // not implemented
  next()
}

module.exports = {
  isAdmin,
  isAuth,
  isOwnUser
}
