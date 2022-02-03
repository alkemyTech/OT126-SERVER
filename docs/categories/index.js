const getCategories = require('./getCategories')
module.exports = {
  '/:id': {
    ...getCategories
  }

}
