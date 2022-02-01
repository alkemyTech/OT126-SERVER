
const ejs = require('ejs')
const path = require('path')

const createTemplateWelcome = async (organization) => {
  return await ejs.renderFile(path.join(process.cwd(), 'templates', 'signup-email.html'), organization)
}

module.exports = {
  createTemplateWelcome
}
