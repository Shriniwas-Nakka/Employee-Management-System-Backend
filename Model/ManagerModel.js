const dbConnection = require('../Config/db.config');

class ManagerModel {

    /**
     * purpose: create record
     * @param {*} req 
     * @param {*} next 
     */
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

    /**
     * purpose: read records
     * @param {*} req 
     * @param {*} next 
     */
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

    /**
     * purpose: login base on email and password
     * @param {*} req 
     * @param {*} next 
     */
    login = (req, next) => {
        try {
            return new Promise((resolve, reject) => {
                let sql = "SELECT * FROM managers WHERE email = ?"
                dbConnection.query(sql, [req.email], (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        if (result.length > 0) {
                            if (result[0].password === req.password) {
                                resolve({ "code": "200", "flag": "true", "message": "Login Successful !", "data": result });
                            } else {
                                reject({ "code": "204", "flag": "false", "message": "password does not match !" });
                            }
                        } else {
                            reject({ "code": "206", "flag": "false", "message": "email id does not exists !" });
                        }
                    }
                })
            })
        } catch (error) {
            next(error);
        }
    }

}

module.exports = new ManagerModel();