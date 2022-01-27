const userRepository = require('../repositories/users')
const { verifyToken } = require('../modules/auth')
const rolesRepository = require('../repositories/roles')

const getTokenPayload = (req) => {
  const authToken = req.headers.authorization
  const token = authToken && authToken.startsWith('Bearer ') && authToken.split(' ')[1]
  if (!token) {
    const error = new Error('Please provided a token Bearer in authorization')
    error.status = 403
    throw error
  }
  return verifyToken(token)
}

const isAdmin = async (req, res, next) => {
  // not implemented
  next()
}

const isAuth = async (req, res, next) => {
  try {
    const token = await getTokenPayload(req)
    const user = await userRepository.getById(token.userId)
    if (!user) {
      return res.status(403).json({ error: 'Not found user with token provided.' })
    }
    next()
  } catch (error) {
    next(error)
  }
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

    if (payload.userId == idParm) return next()

    const { roleId } = user.dataValues
    const roleUser = await rolesRepository.getRoleById(roleId)

    if (roleUser.name === 'Admin') return next()

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
