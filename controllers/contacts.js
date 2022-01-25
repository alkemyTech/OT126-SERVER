const contactsService = require('../services/contacts')

const getAll = async (req, res, next) => {
  try {
    const contacts = await contactsService.getAll()

    res.status(200).json(contacts)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAll
}
