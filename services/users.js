const usersRepository = require('../repositories/users')
const { getTokenPayload } = require('../middlewares/auth')
const bcrypt = require('bcrypt')

const update = async (id, body, token) => {
  const payload = await getTokenPayload(token)
  body.password = await checkPasswords(body, payload)
  const rowCounts = await usersRepository.update(id, body)

  if (rowCounts <= 0) {
    const error = new Error('The user dont exist')
    error.status = 404
    throw error
  }

  return await usersRepository.getById(id)
}

const checkPasswords = async (body, payload) => {
  if (body.password) {
    if (!body.currentPassword) {
      const error = new Error('Insert current password')
      error.status = 400
      throw error
    }

    return comparePasswords(body, payload)
  }
}

const comparePasswords = async (body, payload) => {
  const user = await usersRepository.getById(payload.userId)
  const passwordsMatch = bcrypt.compareSync(body.currentPassword, user.password)

  if (!passwordsMatch) {
    const error = new Error('The current password is incorrect')
    error.status = 400
    throw error
  }

  return bcrypt.hashSync(body.password, 12)
}

module.exports = {
  update,
}

