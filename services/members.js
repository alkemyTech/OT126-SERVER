const { paginate } = require('../modules/pagination')
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

const update = async (id, body) => {
  const member = await membersRepository.update(id, body)
  if (!member[0]) {
    const error = new Error(`Member with id ${id} not found`)
    error.status = 404
    throw error
  }
  return member
}

const getAll = async (req) => {
  return await paginate(membersRepository.getAll, req, 10)
}

module.exports = {
  create,
  remove,
  getAll,
  update
}
