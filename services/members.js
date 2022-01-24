const membersRepository = require('../repositories/members');

const remove = async (id) => {
  await membersRepository.remove(id);
};

const getById = async (id)=>{
  return await membersRepository.getById(id);  
}

const update = async (id, body) => {
  return await membersRepository.update(id, body)
} 
module.exports = {
  remove,
  getById,
  update
};
