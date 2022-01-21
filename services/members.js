const membersRepository = require('../repositories/members')

const create = async body => {
  return await membersRepository.create(body)
}
const remove = async (id) => {
  await membersRepository.remove(id)
}

module.exports = {
  remove,
  create
}
