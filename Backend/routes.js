const express = require('express');
const EmployeesControllers = require('./src/controllers/EmployeesControllers');

const routes = express.Router();

routes.get('/getEmployeesByName/:name', EmployeesControllers.getEmployeesByName);
routes.get('/getEmployeesByCpf/:cpf', EmployeesControllers.getEmployeesByCpf);
routes.get('/getEmployeesByOffice/:office', EmployeesControllers.getEmployeesByOffice);
routes.get('/getEmployeesByRegisterDate', EmployeesControllers.getEmployeesByRegisterDate);
routes.get('/getEmployeesByStatus/:status', EmployeesControllers.getEmployeesByStatus);
routes.get('/getEmployeesByUfBirth/:ufBirth', EmployeesControllers.getEmployeesByUfBirth);
routes.get('/getEmployeesBySalaryRange/:lowerSalary/:upperSalary', EmployeesControllers.getEmployeesBySalaryRange);
routes.post('/addingOrUpdateEmployee', EmployeesControllers.addingOrUpdateEmployee);
routes.delete('/deleteEmployeeByCpf/:cpf', EmployeesControllers.deleteEmployeeByCpf);

module.exports = routes;