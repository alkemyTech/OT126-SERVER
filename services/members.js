const membersRepository = require('../repositories/members')

const create = async (body) => {
  const member = await membersRepository.create(body)
  if (!member) {
    const error = new Error('Can\'t create new member')
    error.status = 400
    throw error
  }
  return member
}
const remove = async (id) => {
  await membersRepository.remove(id)
}

module.exports = {
  remove,
  create
}
