const { where } = require('sequelize/dist');
const db = require('../models');

const remove = async (id) => {
  await db.Members.destroy({ where: { id: id } });
};

const getById = async (id) => { 
  await db.Members.findAll({where: id})
}

module.exports = {
  remove,
  getById, 
  
};
