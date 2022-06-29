const jwt = require('jsonwebtoken')
const configurationServer = require('../configServer')
const generateToken = (user ) =>{
    let userToken = {
        idUser : user.idUser,
        idRol : user.idRol,
        name : user.nombre
    }

    return jwt.sign(userToken,configurationServer.jwt.secret,{expiresIn: 60 * 60})
}
module.exports = {
    generateToken
}