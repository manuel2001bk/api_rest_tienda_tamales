const bd = require('../configMysql')

module.exports = {
    insertUser : (user, callback) => {
        console.log("ingreso a insertUser")
        let sql = 'INSERT INTO users SET ?'
        bd.query(sql,user, (err, data) => {
            console.log(callback)
            if (err)
                return callback(null)
            else
                return  callback(data)
        })
    },
    findByUsername: (username, callback) => {
        let sql = 'SELECT * FROM users WHERE userName=?'
        bd.query(sql, username, (err, data) => {
            if (err) throw err
            if (data.length > 0)
                callback(data[0])
            else
                callback(null)
        })
    },
    getAllUsers : (callback) => {
        let sql = 'Select * from users'
        bd.query(sql,(err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
       })
    },
}