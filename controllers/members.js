const membersService = require('../services/members');

const remove = async (req, res, next) => {
  try {
    await membersService.remove(req.params.id);
    res.status(200).json({ msg: `Member ${req.params.id} removed succesfully` });
  } catch (error) {
    next(error);
  }
};

const getById = async(req,res,next) =>{
  try {
    const member = await membersService.getById(req.params.id);
    if(!member){
      const error = new Error(`Member with id ${req.params.id} not found`)
      error.status(404)
      throw error
    }
    return res.status(200).json({data: member }); 
  } catch (error) {
    next(error);
    
  }
}

module.exports = {
  remove,
  
  getById
};
