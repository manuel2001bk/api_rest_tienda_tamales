const usersDAO = require('../Models/usersDAO')
const bcrypt = require('bcrypt')

const signUp = (req, res) => {
    try {
        if (!req.body.nombre || !req.body.apellidoPaterno || !req.body.userName || !req.body.password || !req.body.fechaNacimiento) throw new Error("Datos incompletos")
        if (!req.body.nombre.match(/^[a-zA-Z]{3,}$/)) throw new Error("Nombre invalido")
        if (!req.body.apellidoPaterno.match(/^[a-zA-Z]{3,}$/)) throw new Error("Apellido invalido")
        if (!req.body.userName.match(/^[a-zA-Z0-9]{3,}$/)) throw new Error("Usuario invalido")
        if (!req.body.password.match(/^[a-zA-Z0-9]{3,}$/)) throw new Error("Contraseña invalida")
        if (!req.body.fechaNacimiento.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)) throw new Error("Fecha de nacimiento invalida")

        const user = {
            nombre: req.body.nombre,
            apellidoPaterno: req.body.apellidoPaterno,
            userName: req.body.userName,
            password: bcrypt.hashSync(req.body.password, 10),
            fechaNacimiento: req.body.fechaNacimiento,
        }
        usersDAO.insertUser(user, (data) => {
            if (data && data.affectedRows === 1) {
                res.send({
                    status: true,
                    message: 'usuario creado exitosamente'
                })
            } else {
                res.send({
                    status: false,
                    message: 'Ha ocurrido un error al crear el usuario'
                })
            }
        })
    } catch (e) {
        res.send({
            status: false,
            message: "No se pudo crear el usuario",
            errorCode: e.message
        })
    }
}

const userNameValidate = (req, res) => {
    usersDAO.findByUsername(req.params.username, data => {
        try {
            if (!data) throw new Err("Usuario disponible")
              res.send({
                  status: true, message: 'Usuario Existente'
              })
        } catch (Err) {
            res.send({
                status: false, message: 'Usuario disponible'
            })
        }
    })
}

const getAllUsers = (req, res) => {
    usersDAO.getAllUsers(data => {
        try {
            if (!data) throw new Err("No existen usuarios")
            res.send({
                status: true, body: data
            })
        } catch (Err) {
            res.send({
                status: false, message: 'No existen usuarios'
            })
        }
    })
}

const login = (req, res) => {
    const user = {
        userName: req.body.userName,
        password: req.body.password,
    }
    usersDAO.findByUsername(user.userName, data => {
        if (data) {
            if (bcrypt.compareSync(user.password, data.password)) {
                res.send({
                    status: true,
                    message: 'Usuario y contraseña correcta',
                    nombre: data.nombre,
                    apellidoPaterno: data.apellidoPaterno,
                    token: jwt.generateToken(data)
                })
            } else {
                res.send({
                    status: false,
                    message: 'Contraseña incorrecta'
                })
            }
        } else {
            res.send({
                status: false,
                message: 'La cuenta de usuario no existe'
            })
        }
    })
}

module.exports = {
    signUp,
    userNameValidate,
    getAllUsers,
}