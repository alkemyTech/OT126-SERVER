const membersRepository = require('../repositories/members')

const create = async (member) => {
  return await membersRepository.create(member)
}
const remove = async (id) => {
  await membersRepository.remove(id)
}

module.exports = {
  remove,
  create
}
