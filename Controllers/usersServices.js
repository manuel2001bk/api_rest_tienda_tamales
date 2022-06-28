const userDAO = require('../Models/usersDAO')
const bcrypt = require('bcrypt')

const signUp = (req, res) => {
    const user = {
        nombre: req.body.nombre,
        apellidoPaterno: req.body.apellidoPaterno,
        userName: req.body.userName,
        password: bcrypt.hashSync(req.body.password, 20),
        fechaNacimiento: req.body.fechaNacimiento,
    }
    userDAO.insertUser(user, (data) => {
        if (data && data.affectedRows === 1) {
            res.send({
                status: true,
                message: 'Usuario creado exitosamente'
            })
        } else {
            res.send({
                status: false,
                message: 'Ha ocurrido un error al crear el usuario'
            })
        }
    })
}

module.exports = {
    signUp,
}