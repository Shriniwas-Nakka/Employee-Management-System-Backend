const managerService = require('../Service/ManagerService');
const response = {};

class ManagerController {

    /**
     * purpose: SMD format at manager registration controller level
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    managerRegistrationController = (req, res, next) => {
        try {
            managerService.managerRegistrationService(req.body).then((result) => {
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
     * purpose: SMD format at get managers controller level
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    getManagersController = (req, res, next) => {
        try {
            managerService.getManagersController().then((result) => {
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
     * purpose: SMD format at manager login controller level
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    managerLoginController = (req, res, next) => {
        try {
            managerService.managerLoginService(req.body).then((result) => {
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

module.exports = new ManagerController();