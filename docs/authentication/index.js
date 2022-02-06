const getAll = require('./getAll')
const register = require('./register')
const login = require('./login')
const update = require('./update')
const remove = require('./remove')
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
  '/users/{id}': {
    ...update,
    ...remove
  }
}
