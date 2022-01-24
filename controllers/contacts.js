const contactsService = require('../services/contacts')

const create = async (req, res, next) => {
  try {
    const contact = await contactsService.create(req.body)
    res.status(200).json({ data: contact, msg: 'El formulario se envio correctamente' })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  create
}
