const usersService = require('../services/users')

const update =  async (req, res, next) => {
    try {
        const userUpdated = await usersService.update(req.params.id, req.body, req)
        res.status(200).json({ msg: `User ${userUpdated.id} updated succesfully`, data: userUpdated })
    } catch (error) {
        next(error)
    }

}


module.exports = {
    update,
}