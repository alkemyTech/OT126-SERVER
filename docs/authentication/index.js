const getAll = require('./getAll')
const register = require('./register')
module.exports = {
  '/auth': {
    ...getAll
  },
  '/auth/login': {

  },
  '/auth/register': {
    ...register
  },
  '/auth/me': {

  }

}
