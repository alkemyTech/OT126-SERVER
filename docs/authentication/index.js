const getAll = require('./getAll')
const register = require('./register')
const login = require('./login')
module.exports = {
  '/auth': {
    ...getAll
  },
  '/auth/login': {
    ...login
  },
  '/auth/register': {
    ...register
  },
  '/auth/me': {

  }

}
