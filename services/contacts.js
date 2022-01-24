const contactsRepository = require('../repositories/contacts')

const create = async (contact) => {
  const newContact = await contactsRepository.create(contact)
  return newContact
}

module.exports = {
  create
}
