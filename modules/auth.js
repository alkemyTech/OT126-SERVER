const jwt = require('jsonwebtoken')
const { token } = require('../config/config')

//Create token
function createToken (payload) {
    return jwt.sign(payload, token.secret, {expiresIn:token.expiresIn})
    
}  

/* verifyToken return a payload object with userId,  
    creation time "iat" and expiry time "exp" */
function verifyToken (tokenUser) {
    const payload = jwt.verify(tokenUser, token.secret)  
    return payload
}

module.exports = {
    createToken,
    verifyToken
}
