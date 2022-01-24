const membersService = require('../services/members')

const create = async (req, res, next) => {
  try {
    const member = await membersService.create(req.body)
    res.status(201).json({ msg: `The member ${member.name} was create succesfully`, data: member })
  } catch (error) {
    next(error)
  }
}
const remove = async (req, res, next) => {
  try {
    await membersService.remove(req.params.id)
    res.status(200).json({ msg: `Member ${req.params.id} removed succesfully` })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  create,
  remove
}
