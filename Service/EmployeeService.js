const employeeModel = require('../Model/EmployeeModel');

class EmployeeService {

    addEmployeeService = (req, next) => {
        try {
            return employeeModel.create(req).then((result) => {
                return ({ message: "Employee record added successfully !", data: result })
            }).catch((err) => {
                return ({ message: "Failed to add record !", error: null })
            })
        } catch (error) {
            next(error);
        }
    }

}

module.exports = new EmployeeService();