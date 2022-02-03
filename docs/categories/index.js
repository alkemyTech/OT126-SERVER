const getCategories = require('./getCategories')
module.exports = {
  '/categories/{id}': {
    ...getCategories
  }

}
