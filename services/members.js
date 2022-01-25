const membersRepository = require('../repositories/members');

const remove = async (id) => {
  await membersRepository.remove(id);
};

const update = async (id, body) => {
  const member = await membersRepository.update(id, body)
  if(!member[0]){
    const error = new Error(`Member with id ${id} not found`)
    error.status = 404
    throw error
  }
  return member
} 
module.exports = {
  remove,
  update
};
