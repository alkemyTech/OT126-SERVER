const membersService = require('../services/members');

const remove = async (req, res, next) => {
  try {
    await membersService.remove(req.params.id);
    res.status(200).json({ msg: `Member ${req.params.id} removed succesfully` });
  } catch (error) {
    next(error);
  }
};
const update = async(req, res, next) => {
  try {
    const member = await membersService.update(req.params.id, req.body)
    res.status(201).json({msg:`The member ${req.params.id} was updated succesfully`})
  } catch (error) {
    next(error)
  }
}

module.exports = {
  remove,
  update,
  
};
