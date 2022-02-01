
const ejs = require('ejs')
const path = require('path')

const createTemplateWelcome = async (organization) => {
  const data = {
    name: organization.name,
    image: organization.image,
    address: organization.address,
    phone: organization.phone,
    welcomeText: organization.welcomeText,
    email: organization.email
  }
  return await ejs.renderFile(path.join(process.cwd(), 'templates', 'signup-email.ejs'), data).then(data => data)
}

module.exports = {
  createTemplateWelcome
}
