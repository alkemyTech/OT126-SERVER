const usersServices = require('../services/users')

const getAll = async (req, res, next) => {
  try {
    const data = await usersServices.getAll()

    if (data) {
      res.status(200).json({ data: data })
    } else {
      res.status(400).json({ msg: 'Something went wrong. Please try again later.' })
    }
  } catch (error) {
    next(error)
  }
}

const create = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body

    const result = await usersServices.getAll()

    const data = await usersServices.create(firstName, lastName, email, password)

    const emailMatch = result.find(value => value.email === email)

    if (data && !emailMatch) {
      res.status(200).json({ msg: 'User registration successfully. Please login.', data: data/* , token: token */ })
    } else {
      res.status(400).json({ msg: 'Something went wrong. User registration failed.' })
    }
  } catch (error) {
    next(error)
  }
}

module.exports = {
  create,
  getAll
}
