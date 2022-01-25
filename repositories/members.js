const db = require('../models');

const remove = async (id) => {
  await db.Members.destroy({ where: { id: id } });
};

const update = async (id, body) => {
  return await db.Members.update(body, { where: { id }})
}
module.exports = {
  remove,
  update
}
