const express = require('express');
const EmployeesControllers = require('./src/controllers/EmployeesControllers');

const routes = express.Router();

routes.get('/getEmployeesByName/:name', EmployeesControllers.getEmployeesByName);
routes.get('/getEmployeesByCpf/:cpf', EmployeesControllers.getEmployeesByCpf);
routes.get('/getEmployeesByOffice/:office', EmployeesControllers.getEmployeesByOffice);
routes.get('/getEmployeesByRegisterDate', EmployeesControllers.getEmployeesByRegisterDate);
routes.get('/getEmployeesByStatus/:status', EmployeesControllers.getEmployeesByStatus);


module.exports = routes;