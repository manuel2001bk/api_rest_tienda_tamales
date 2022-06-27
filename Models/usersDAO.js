const db = require('../configMysql')

module.exports = {
    insertUser : (user, callback) => {
        let sql = 'INSERT INTO users SET ?'
        bd.query(sql,user, (err, data) => {
            if (err)
                return callback(null)
            else
                return  callback(data)
        })
    },
}