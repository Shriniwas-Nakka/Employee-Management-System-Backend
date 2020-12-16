const route = require('express').Router();
const managerController = require('../Controller/ManagerController');
const employeeController = require('../Controller/EmployeeController');

// RestFull API's for manager
route.post('/manager/registration', managerController.managerRegistrationController);
route.get('/manager/getManagers', managerController.getManagersController);
route.post('/manager/login', managerController.managerLoginController);

// RestFull API's for employee
route.post('/employee/add', employeeController.addEmployeeController);
route.get('/employee/read', employeeController.getEmployeesController);
route.put('/employee/update/:empId', employeeController.updateEmployeeController);

module.exports = route;