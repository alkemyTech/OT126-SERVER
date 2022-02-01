const authService = require('../services/auth')

const login = async (req, res, next) => {
  try {
    const token = await authService.login(req.body)
    res.status(200).json({
      msg: 'Logged in successfully. Data in token payload',
      data: { ok: true, token }
    })
  } catch (error) { // special catch
    normalizeError(error)
    res.status(error.status).json({
      errors: [error.message],
      data: { ok: false }
    })
  }
}

const getAll = async (req, res, next) => {
  try {
    const data = await authService.getAll()

    res.status(200).json({ data: data })
  } catch (error) {
    next(error)
  }
}

const create = async (req, res, next) => {
  try {
    const data = await authService.create(req.body)

    res.status(200).json({ msg: 'User registration successfully. Please login.', data: data/* , token: token */ })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  login,
  getAll,
  create
}

function normalizeError (error) {
  error.status = error.status || 500
  error.message = error.status >= 500 ? 'Internal Server Error' : error.message
}
