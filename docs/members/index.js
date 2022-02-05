const getAll = require('./getAll')
const remove = require('./remove')
module.exports = {
  '/members': {
    ...getAll
  },
  '/members/{id}': {
    ...remove
  }

}
