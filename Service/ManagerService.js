const managerModel = require('../Model/ManagerModel');

class ManagerService {

    managerRegistrationService = (req, next) => {
        try {
            return managerModel.create(req).then((result) => {
                return ({ message: "Registration Successful !", data: result })
            }).catch((err) => {
                return ({ message: "Failed to Register !", error: null })
            })
        } catch (error) {
            next(error);
        }
    }

    getManagersController = (req, next) => {
        try {
            return managerModel.read().then((result) => {
                return ({ message: "All records found!", data: result })
            }).catch((err) => {
                return ({ message: "Failed to found record !", error: null })
            })
        } catch (error) {
            next(error);
        }
    }

}

module.exports = new ManagerService();