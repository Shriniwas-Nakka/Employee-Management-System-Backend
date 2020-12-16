const dbConnection = require('../Config/db.config');

class EmployeeModel {

    /**
     * purpose: create record
     * @param {*} req 
     * @param {*} next 
     */
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

    /**
     * purpose: read record
     * @param {*} req 
     * @param {*} next 
     */
    read = (req, next) => {
        try {
            return new Promise((resolve, reject) => {
                let sql = "SELECT * FROM employees"
                dbConnection.query(sql, (err, result) => {
                    console.log(result.length);

                    if (err) {
                        reject(err)
                    } else {
                        if (result.length == 0) {
                            reject()
                        } else {
                            resolve(result)
                        }
                    }
                })
            })
        } catch (error) {
            next(error);
        }
    }

    /**
     * purpose: update record
     * @param {*} req 
     * @param {*} next 
     */
    update = (req, next) => {
        try {
            return new Promise((resolve, reject) => {
                // let sql = "UPDATE employees SET firstName = ?, lastName = ?, email = ?, address = ?, city = ?, company = ?, designation = ?, mobile = ?  WHERE empId = ?";
                // let updatedData = [req.body.firstName, req.body.lastName, req.body.email, req.body.address, req.body.city, req.body.company, req.body.designation, req.body.mobile, req.params.empId]
                let sql = "UPDATE employees SET ?  WHERE empId = ?";
                let updatedData = [req.body, req.params.empId]

                dbConnection.query(sql, updatedData, (err, result) => {
                    if (err) {
                        console.log(err);
                        reject(err)
                    } else {
                        resolve(result)
                    }
                })
            })
        } catch (error) {
            next(error);
        }
    }

    /**
     * purpose: delete record
     * @param {*} req 
     * @param {*} next 
     */
    delete = (req, next) => {
        try {
            return new Promise((resolve, reject) => {
                let sql = "DELETE FROM employees WHERE empId = ?";
                dbConnection.query(sql, req, (err, result) => {
                    if (err) {
                        reject(err)
                    } else {
                        if (result.affectedRows > 0) {
                            resolve(result)
                        } else {
                            reject({ message: "Employee Id does not exists !" })
                        }
                    }
                })
            })
        } catch (error) {
            next(error);
        }
    }

}

module.exports = new EmployeeModel();