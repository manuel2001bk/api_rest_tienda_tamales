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
}