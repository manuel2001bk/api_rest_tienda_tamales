const mysql = require('mysql')

const config = {
    host: '54.160.254.55',
    user: 'tamales',
    database: 'tukisoft-tamales',
    password: '3Ycr2Lfgo3QP4qjN9xu9'
}
const conn = mysql.createConnection(config);
conn.connect(function(err) {
    if (err) throw err;
    console.log('Conexión a la base de datos exitosa!');
});

module.exports = conn;
