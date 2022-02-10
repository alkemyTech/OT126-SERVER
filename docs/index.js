const tags = require('./tags')
const basicInfo = require('./basicInfo')
const components = require('./components')
const categories = require('./categories/index')
const activities = require('./activities/index')
const news = require('./news')
const servers = require('./servers')
const comments = require('./comments/index')
const auth = require('./authentication/index')
const users = require('./users/index')

module.exports = {
  ...basicInfo,
  ...servers,
  ...tags,
  ...components,
  paths: {
    ...categories,
    ...comments,
    ...activities,
    ...news,
    ...auth,
    ...users
  }
}
