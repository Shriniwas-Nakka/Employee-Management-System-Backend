const route = require('express').Router();
const { managerRegistrationController } = require('../Controller/ManagerController');
const managerController = require('../Controller/ManagerController');

route.post('/manager/registration', managerController.managerRegistrationController);
route.get('/manager/getManagers', managerController.getManagersController);
route.post('/manager/login', managerController.managerLoginController);

module.exports = route;