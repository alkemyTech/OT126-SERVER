const getCategory = require('./getCategory')
module.exports = {
  '/categories/{id}': {
    ...getCategory
  }

}
