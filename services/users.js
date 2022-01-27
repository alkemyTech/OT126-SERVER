const usersRepository = require('../repositories/users')
const { getTokenPayload } = require('../middlewares/auth')
const bcrypt = require('bcrypt')

const update = async (id, body, token) => {
    
    const payload = await getTokenPayload(token)
    body.password = await checkPasswords(body, payload)


    const rowCounts = await usersRepository.update(id, body)

    if (rowCounts <= 0){
      const error = new Error('The user dont exist')
      error.status = 404
      throw error
    }

    const exclude = ['password', 'roleId', 'deletedAt']
    const updatedUser = await usersRepository.getById(id, exclude)
    return updatedUser
}


// check the current password whit the DB password and return a newPassword
const checkPasswords = async (body, payload) => {
    // check if it asks for password change
    if(body.password){
        // if dont insert a currentPassword, it throw error
        if(!body.currentPassword){
          const error = new Error('Insert current password')
          error.status = 400
          throw error
        } 
        const user = await usersRepository.getById(payload.userId)
       
        const passwordsMatch = bcrypt.compareSync(body.currentPassword, user.password)
 
        if (!passwordsMatch){
          const error = new Error('The current password is incorrect')
          error.status = 400
          throw error    
        }
        
        return bcrypt.hashSync(body.password, 12)
    }
}


module.exports = {
    update,
}


//2a$12$pnRk4pz/CjzV10l.p0RkoujnS1Z104wq3ILF8dKY.SioVC0f1qnzy