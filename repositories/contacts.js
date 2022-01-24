const db = require('../models')

const create = async (contact) => {
  return await db.Contacts.create(contact)
}

module.exports = {
  create
}
