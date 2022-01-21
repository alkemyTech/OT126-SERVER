const db = require('../models');

const remove = async (id) => {
  await db.Members.destroy({ where: { id: id } });
};

const getAll = async () => {
  return await db.Members.findAll()
}
module.exports = {
  remove, getAll
};
