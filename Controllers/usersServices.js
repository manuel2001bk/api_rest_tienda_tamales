
const bd =require('../configMysql')

findByUsername : (username, callback) => {
    let sql = 'SELECT * FROM users WHERE userName=?'
    bd.query(sql,username, (err, data) => {
        if (err)throw err
        if (data.length > 0)
            callback(data[0])
        else
            callback(null)
    })
},
getAllUsers = (req, res) => {
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
    findByUsername,
    getAllUsers,
}