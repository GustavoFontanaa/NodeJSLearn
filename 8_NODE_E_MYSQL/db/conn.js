const mysql = require('mysql')

const pool = mysql.createPool({
    connectTimeout: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
})

module.exports = pool