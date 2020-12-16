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

    getEmployeesService = (req, next) => {
        try {
            return employeeModel.read().then((result) => {
                return ({ message: "Employee records Found !", data: result })
            }).catch((err) => {
                return ({ message: "No records found !", error: null })
            })
        } catch (error) {
            next(error);
        }
    }

    updateEmployeeService = (req, next) => {
        try {
            return employeeModel.update(req).then((result) => {
                return ({ message: "Employee records Updated !", data: result })
            }).catch((err) => {
                return ({ message: "Failed to update record !", error: null })
            })
        } catch (error) {
            next(error);
        }
    }

}

module.exports = new EmployeeService();