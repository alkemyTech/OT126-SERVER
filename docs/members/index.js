const getAll = require('./getAllMembers')
module.exports = {
  '/members': {
    ...getAll
  },
  '/members/{id}': {

  }

}
