const jwt = require('jsonwebtoken')

//Create token
function createToken (user) {
    const payload = {
        userId: user.id,
        roleId: user.roleId,
    }
    return jwt.sign(payload, process.env.JWT_PASS, {expiresIn:'1h'})
    
}  

/* verifyToken return a payload object with userId, roleId, 
    creation time "iat" and expiry time "exp" */
function verifyToken (token) {

    const payload = jwt.verify(token, process.env.JWT_PASS)  
    return payload 
}

module.exports = {
    createToken,
    verifyToken
}