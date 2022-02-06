const register = require('./register')
module.exports = {
  '/auth': {

  },
  '/auth/login': {

  },
  '/auth/register': {
    ...register
  },
  '/auth/me': {

  }

}
