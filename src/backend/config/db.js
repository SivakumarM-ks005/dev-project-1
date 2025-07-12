const mysql = require('mysql2/promise');

const mysqlPool = mysql.createPool({
    host:"sg2nlmysql19plsk.secureserver.net",
    user:"catvadmin",
    password:"MySonsBD@1310",
    database:"tcv_db"
});

module.exports = mysqlPool;