const bd =require('../configMysql')

module.exports = {
    findByUsername : (username, callback) => {
        let sql = 'SELECT * FROM users WHERE userName=?'
        bd.query(sql,username, (err, data) => {
            if (err)throw err
            if (data.length > 0)
                callback(data[0])
            else
                callback(null)
        })
    }
}