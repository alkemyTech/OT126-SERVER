const organizationService = require('../services/organizations')
const configuration = require('../config/config')

const update = async (req, res, next) => {
  try {
    const id = configuration.organizationId
    const data = await organizationService.update(id, req.body)
    res.status(200).json(data)
  } catch (e) {
    next(e)
  }
}

const getAll = async (req, res, next) => {
  try {
    const data = await organizationService.getAll()

    res.status(200).json({ data: data })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  update,
  getAll
}
