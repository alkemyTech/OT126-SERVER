
const userRepository = require('../repositories/users')
const { verifyToken } = require('../modules/auth')

const getTokenPayload = async (req) => {
  const authToken = req.headers.authorization
  const token = authToken && authToken.startsWith('Bearer ') && authToken.split(' ')[1]
  if (!token){
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
    const token = getTokenPayload(req)
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
  // not implemented
  next()
}

module.exports = {
  isAdmin,
  isAuth,
  isOwnUser
}
