const contactsRepository = require('../repositories/contacts')

const create = async (contact) => {
  const newContact = await contactsRepository.create(contact)
  return newContact
}

const getAll = async () => {
  const contacts = await contactsRepository.getAll()
  return contacts
}

module.exports = {
  create,
  getAll
}
