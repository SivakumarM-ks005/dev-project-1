const mysql = require('mysql2/promise') ;

const mySqlPool = mysql.createPool({
    host: "localhost",
    database: "devmysqldb",
    user: "root",
    password: "LogPwd@1310"
});

module.exports = mySqlPool;