const mysql = require('mysql')

const config = {
    host: 'database-tienda.cxl3tl91ae9t.us-east-1.rds.amazonaws.com',
    user: 'admin',
    database: 'tukisoft-tamales',
    password: '3Ycr2Lfgo3QP4qjN9xu9'
}
const conn = mysql.createConnection(config);
conn.connect(function(err) {
    if (err) throw err;
    console.log('Conexión a la base de datos exitosa!');
});

module.exports = conn;
