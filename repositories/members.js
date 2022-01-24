const { where } = require('sequelize/dist');
const db = require('../models');

const remove = async (id) => {
  await db.Members.destroy({ where: { id: id } });
};

const getById = async (id) => { 
  await db.Members.findAll({where: id})
}

const update = async (id, body) => {
  await db.Members.update({body, where:{id}})
}
module.exports = {
  remove,
  getById, 
  update
};
