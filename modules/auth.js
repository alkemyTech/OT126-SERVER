const jwt = require('jsonwebtoken')
const { token } = require('../config/config')

function createToken (payload) {
  return jwt.sign(payload, token.secret, { expiresIn: token.expiresIn })
}

function verifyToken (tokenUser) {
  const payload = jwt.verify(tokenUser, token.secret)
  return payload
}

module.exports = {
  createToken,
  verifyToken
}
