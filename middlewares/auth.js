const userRepository = require('../repositories/users')
const { verifyToken } = require('../modules/auth')

const isAdmin = async (req, res, next) => {
  // not implemented
  next()
}

const isAuth = async (req, res, next) => {
  try {
    const token = getTokenPayload(req)
    if (!await userRepository.getById(token.userId)) {
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

module.exports = {
  isAdmin,
  isAuth,
  isOwnUser
}
