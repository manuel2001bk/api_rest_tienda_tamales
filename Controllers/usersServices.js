const userDAO = require('../models/usersDAO')

const getAllUsers = (req, res) => {
    userDAO.getAllUsers(data => {
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
    getAllUsers,
}