const db = require("../models");

const getAll = async () => {
  const response = await db.Comments.findAll({
    order: [["createdAt", "DESC"]],
    attributes: ["body"],
  });
  console.log(response);
  return response;
};
const create = async (data) => {
  const response = await db.Comments.create(data);
  return response;
};
/* const remove = async (id) => {
  await db.Comments.destroy({ where: { id } });
} */
const update = async (data, id) => {
  const response = await db.Comment.update(data, {
    where: {
      id,
    },
  });
  return response;
};
module.exports = {
  getAll,
  create,
  update
};
