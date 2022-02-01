const ejs = require('ejs')
const path = require('path')

const templateContact = async (organization, newContact) => {
  const data = {
    nameOrg: organization.name,
    image: organization.image,
    address: organization.address,
    phone: organization.phone,
    name: newContact.name,
    email: newContact.email
  }
  return await ejs.renderFile(path.join(process.cwd(), 'templates', 'emailContact.ejs'), data)
    .then((data) => data)
}

module.exports = {
  templateContact
}
