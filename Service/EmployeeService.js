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
                return ({ message: "Employee records Found !", data: result, flag: true, code: 200 })
            }).catch((err) => {
                return ({ message: "No records found !", flag: false, code: 206 })
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

    deleteEmployeeService = (req, next) => {
        try {
            return employeeModel.delete(req).then((result) => {
                return ({ message: "Employee record deleted !", flag: true, code: 200, data: result })
            }).catch((err) => {
                return ({ message: err.message, flag: false, code: 206 })
            })
        } catch (error) {
            next(error);
        }
    }

}

module.exports = new EmployeeService();