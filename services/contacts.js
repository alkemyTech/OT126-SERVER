const contactsRepository = require('../repositories/contacts')
const organizationRepository = require('../repositories/organizations')
const { templateContact } = require('../modules/sendEmailContact')
const { organizationId } = require('../config/config')
const { send } = require('../modules/emails')

const create = async (contact) => {
  const newContact = await contactsRepository.create(contact)
  if (newContact) {
    try {
      const organization = await organizationRepository.getById(organizationId)
      const headersEmail = {
        to: newContact.email,
        subject: `Gracias por contactarte con ${organization.name}`,
        html: await templateContact(organization, newContact),
        text: 'Gracias por haberte contactado con nosotros'
      }
      await send(headersEmail)
      console.log({ msg: 'Email sent successfully!' })
    } catch (err) {
      const error = new Error('Email sent failed')
      throw error
    }
  }
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
