const dbConnection = require('../Config/db.config');

class EmployeeModel {

    create = (req, next) => {
        try {
            return new Promise((resolve, reject) => {
                // let sql = "INSERT INTO employees (empID, firstName, lastName, email, address, city , company, designation, mobile) VALUES (?,?,?,?,?,?,?,?,?)"
                let sql = "INSERT INTO employees SET ?"
                dbConnection.query(sql, req, (err, result, f) => {
                    if (err) {
                        console.log(err);

                        reject(err)
                    } else {
                        console.log(result);
                        resolve(result)
                    }
                })
            })
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new EmployeeModel()