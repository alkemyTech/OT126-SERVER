const db = require('../models')

const getAll = async () => {
  const contacts = await db.Contacts.findAll()
  return contacts
}

module.exports = {
  getAll
}
