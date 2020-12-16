const managerService = require('../Service/ManagerService');
const response = {};

class ManagerController {

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

}

module.exports = new ManagerController();