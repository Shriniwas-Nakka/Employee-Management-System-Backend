const employeeService = require('../Service/EmployeeService');
const response = {};

class EmployeeController {

    /**
     * purpose: SMD format at add employee controller level
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
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

    /**
     * purpose: SMD format at get employees controller level
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    getEmployeesController = (req, res, next) => {
        try {
            employeeService.getEmployeesService(req.body).then((result) => {
                response.success = result.flag;
                response.message = result.message;
                response.data = result.data;
                return res.status(result.code).send(response);
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

    /**
     * purpose: SMD format at update employee controller level
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
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

    /**
     * purpose: SMD format at delete employee controller level
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    deleteEmployeeController = (req, res, next) => {
        try {
            employeeService.deleteEmployeeService(req.params.empId).then((result) => {
                console.log(result);
                response.success = result.flag;
                response.message = result.message;
                response.data = result.data;
                return res.status(result.code).send(response);
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