const tags = require('./tags')
const basicInfo = require('./basicInfo')
const components = require('./components')
const categories = require('./categories/index')
const servers = require('./servers')
const auth = require('./authentication/index')

module.exports = {
  ...basicInfo,
  ...servers,
  ...tags,
  ...components,
  paths: {
    ...categories,
    ...auth
  }

}
