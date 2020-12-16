const mysql = require('mysql');

let mysqlConnection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    database: 'employee_db'
});

mysqlConnection.connect((err) => {
    if (!err) {
        console.log("Database conncetionestablished succssfully !");
    } else {
        console.log("Failed to connect !", err);
    }
})

module.exports = mysqlConnection;