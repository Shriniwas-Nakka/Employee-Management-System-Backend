const mysql = require('mysql');

// mysql connection configuration
let mysqlConnection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    database: 'employee_db'
});

// connecting to mysql database
mysqlConnection.connect((err) => {
    if (!err) {
        console.log("Database conncetion established succssfully !");
    } else {
        console.log("Failed to connect !", err);
    }
})

module.exports = mysqlConnection;