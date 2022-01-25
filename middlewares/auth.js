const userRepository = require('../repositories/users')
const { verifyToken } = require('../modules/auth')

const isAdmin = async (req, res, next) => {
  // not implemented
  next()
}

const isAuth = async (req, res, next) => {
  // not implemented
  next()
}

const isOwnUser = async (req, res, next) => {
  try {
    const idParm = req.params.id    
    const payload = getTokenPayload(req)
    const user = await userRepository.getById(payload.userId)

    if (!user) {
      const error = new Error('Not found user with token provided.')
      error.status = 403
      throw error
    }

    if(payload.userId == idParm) return next()

    if(user.roleID === 2) return next()

    const error = new Error('Its not authorized')
    error.status = 403
    throw error

  } catch (error) {
    next(error)
  }
}

module.exports = {
  isAdmin,
  isAuth,
  isOwnUser
}
