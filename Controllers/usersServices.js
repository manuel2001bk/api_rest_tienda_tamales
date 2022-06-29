const usersDao = require('../models/usersDAO')

const userNameValidate = (req, res) => {
    usersDao.findByUsername(req.params.username, data => {
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
getAllUsers = (req, res) => {
    usersDao.getAllUsers(data => {
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
module.exports = {
    userNameValidate,
    getAllUsers,
}