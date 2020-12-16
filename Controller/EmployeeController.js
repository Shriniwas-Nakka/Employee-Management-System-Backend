const employeeService = require('../Service/EmployeeService');
const response = {};

class EmployeeController {

    addEmployeeController = (req, res, next) => {
        try {
            employeeService.addEmployeeService(req.body).then((result) => {
                response.success = true;
                response.message = result.message;
                response.data = result.data;
                return res.status(200).send(response);
            }).catch((err) => {
                response.success = false;
                response.message = err.message;
                response.data = err.error;
                return res.status(400).send(response);
            })
        } catch (error) {
            next(error);
        }
    }

    getEmployeesController = (req, res, next) => {
        try {
            employeeService.getEmployeesService(req.body).then((result) => {
                response.success = true;
                response.message = result.message;
                response.data = result.data;
                return res.status(200).send(response);
            }).catch((err) => {
                response.success = false;
                response.message = err.message;
                response.data = err.error;
                return res.status(400).send(response);
            })
        } catch (error) {
            next(error);
        }
    }

    updateEmployeeController = (req, res, next) => {
        try {
            employeeService.updateEmployeeService(req).then((result) => {
                response.success = true;
                response.message = result.message;
                response.data = result.data;
                return res.status(200).send(response);
            }).catch((err) => {
                response.success = false;
                response.message = err.message;
                response.data = err.error;
                return res.status(400).send(response);
            })
        } catch (error) {
            next(error);
        }
    }

}

module.exports = new EmployeeController();