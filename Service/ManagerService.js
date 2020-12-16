const managerModel = require('../Model/ManagerModel');

class ManagerService {

    /**
     * purpose: business logic at manager registration service level
     * @param {*} req 
     * @param {*} next 
     */
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

    /**
     * purpose: business logic at get managers service level
     * @param {*} req 
     * @param {*} next 
     */
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

    /**
     * purpose: business logic at manager login service level
     * @param {*} req 
     * @param {*} next 
     */
    managerLoginService = (req, next) => {
        try {
            return managerModel.login(req).then((result) => {
                console.log(result);
                return (result)
            }).catch((err) => {
                console.log('jh', err);
                return (err)
            })
        } catch (error) {
            next(error);
        }
    }

}

module.exports = new ManagerService();