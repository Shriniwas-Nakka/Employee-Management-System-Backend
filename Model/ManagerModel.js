const dbConnection = require('../Config/db.config');

class ManagerModel {

    create = (req, next) => {
        try {
            return new Promise((resolve, reject) => {
                let sql = "INSERT INTO managers (firstName, lastName, email, address, password, company, mobile) VALUES (?,?,?,?,?,?,?)"
                dbConnection.query(sql, [req.firstName, req.lastName, req.email, req.address, req.password, req.company, req.mobile], (err, result, f) => {
                    if (err) {
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

    read = (req, next) => {
        try {
            return new Promise((resolve, reject) => {
                let sql = "SELECT * FROM managers"
                dbConnection.query(sql, (err, result) => {
                    if (err) {
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

}

module.exports = new ManagerModel();