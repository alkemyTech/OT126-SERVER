const membersRepository = require('../repositories/members');

const remove = async (id) => {
  await membersRepository.remove(id);
};

const getById = async (id)=>{
  return await membersRepository.getById(id);
}

module.exports = {
  remove,
  getById
};
