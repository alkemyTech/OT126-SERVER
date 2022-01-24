const db = require('../models');

const remove = async (id) => {
  await db.Members.destroy({ where: { id: id } });
};

const getById = async (id) => { 
  return await db.Members.findByPk( id )
}

const update = async (id, body) => {
  return await db.Members.update(body, { where: { id }})
}
module.exports = {
  remove,
  getById, 
  update
};
