const jwt = require('jsonwebtoken')
const { token } = require('../config/config')

//Create token
function createToken (payload) {
    return jwt.sign(payload, token.secret, {expiresIn:token.expiresIn})
    
}  

/* verifyToken return a payload object with userId,  
    creation time "iat" and expiry time "exp" */
function verifyToken (token) {

    const payload = jwt.verify(token, process.env.JWT_PASS)  
    return payload 
}

module.exports = {
    createToken,
    verifyToken
}