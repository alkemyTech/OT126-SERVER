const authService = require('../services/auth')

const login = async (req, res, next) => {
  try {
    const token = await authService.login(req.body)
    res.status(200).json({
      msg: 'Logged in successfully. Data in token payload',
      data: { ok: true, token }
    })
  } catch (error) { // special catch
    res.status(error.status || 500).json({
      errors: [error.message],
      data: { ok: false }
    })
  }
}

module.exports = {
  login
}
