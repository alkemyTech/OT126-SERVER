const getCategory = require('./getCategory')
module.exports = {
  '/categories': {

  },
  '/categories/{id}': {
    ...getCategory
  }

}
