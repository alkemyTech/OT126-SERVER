const membersRepository = require('../repositories/members')

const remove = async (id) => {
  await membersRepository.remove(id);
};
const getAll = async () => {
  return await membersRepository.getAll()
}
module.exports = {
  remove,
  getAll
}