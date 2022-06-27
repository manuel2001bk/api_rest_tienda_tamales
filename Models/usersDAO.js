const bd = require('../configMysql')

module.exports = {
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