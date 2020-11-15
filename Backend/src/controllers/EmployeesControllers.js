const { Console } = require('console');
var fs = require('fs');
const EmployeesServices = require('./../services/EmployeesServices');

class EmployeeControllers {

    async getEmployeesByName(req, res, next){
        try{
            let positionFilterFactor = 3;
            let name = req.params.name;
            const data = await EmployeesServices.getData();   
            const employees = await EmployeesServices.getEmployees(data, positionFilterFactor, name);
            if(employees.length === 0 ){
                res.json({message: 'Employee not found.'})
            } else{
                res.send(employees)
            }
        } catch(err){
            next(err);
        }
    }

    async getEmployeesByCpf(req, res, next){
       try { 
            let positionFilterFactor = 2;
            let cpf = req.params.cpf;
            const data = await EmployeesServices.getData();
            const employees = await EmployeesServices.getEmployees(data, positionFilterFactor, cpf);
            if(employees.length === 0 ){
                res.json({message: 'Employee not found.'})
            } else{
                res.send(employees);
            }
        } catch(err){
            next(err);
        }
    }

    async getEmployeesByOffice(req, res, next){
        try {
            let positionFilterFactor = 1;
            let office = req.params.office;
            const data = await EmployeesServices.getData();
            const employees = await EmployeesServices.getEmployees(data, positionFilterFactor, office);
            if(employees.length === 0 ){
                res.json({message: 'Employees not found.'})
            } else{
                res.send(employees);
            }
        } catch(err){
            next(err);
        }
    }

    async getEmployeesByRegisterDate(req, res, next){
       try{
            let positionFilterFactor = 0;
            let registerDate = req.body.registerDate;
            const data = await EmployeesServices.getData();
            const employees = await EmployeesServices.getEmployees(data, positionFilterFactor, registerDate)
            if(employees.length === 0 ){
                res.json({message: 'Employees not found.'})
            } else{
                res.send(employees);
            }
       } catch(err){
           next(err);
       }
    }

    async getEmployeesByStatus(req, res, next){
        try{
            let positionFilterFactor = 6;
            let status = req.params.status;
            const data = await EmployeesServices.getData();
            const employees = await EmployeesServices.getEmployees(data, positionFilterFactor, status);
            if(employees.length === 0 ){
                res.json({message: 'Employees not found.'})
            } else{
                res.send(employees);
            }
        } catch(err){
            next(err);
        }
    }

    async getEmployeesByUfBirth(req, res, next) {
        try{
            let positionFilterFactor = 4;
            let ufBirth = req.params.ufBirth;
            const data = await EmployeesServices.getData();
            const employees = await EmployeesServices.getEmployees(data, positionFilterFactor, ufBirth);
            if(employees.length === 0 ){
                res.json({message: 'Employees not found.'})
            } else{
                res.send(employees);
            }
        } catch(err){
            next(err);
        }
    }

    async getEmployeesBySalaryRange(req, res, next){
        try{
            let positionFilterFactor = 5;
            let lowerSalary = req.params.lowerSalary;
            let upperSalary = req.params.upperSalary;
            const data = await EmployeesServices.getData();
            const employees = await EmployeesServices.getEmployeesForRangeSalary(data, positionFilterFactor, lowerSalary, upperSalary);
            if(employees.length === 0 ){
                res.json({message: 'Employees not found.'})
            } else{
                res.send(employees);
            }
        } catch(err){
            next(err);
        }
    }

    async addingOrUpdateEmployee(req, res, next){
        try{
            let employee = req.body;
            let cpf = employee.cpf;
            let positionFilterFactor = 2;
            const data = await EmployeesServices.getData();
            const employeeAlreadyRegistered = await EmployeesServices.getEmployees(data, positionFilterFactor, cpf);
            if(employeeAlreadyRegistered.length === 0){
               let statusAddingEmployee = await EmployeesServices.addingEmployee(employee)
                res.json(statusAddingEmployee)
            } else {
                let statusUpdateEmployee = await EmployeesServices.updateEmployee(data, employeeAlreadyRegistered, employee)
                res.json(statusUpdateEmployee)
            }
        } catch(err){
            next(err);
        }
    }

    async deleteEmployeeByCpf(req, res, next){
        try{
            let positionFilterFactor = 2;
            let cpf = req.params.cpf;
            const data = await EmployeesServices.getData();
            const employeeAlreadyRegistered = await EmployeesServices.getEmployees(data, positionFilterFactor, cpf);
            if(employeeAlreadyRegistered.length === 0){
                res.json({message: 'Employee not found.'})
            } else {
                let statusExcludedEmployee = await EmployeesServices.deleteEmployee(data, employeeAlreadyRegistered);
                res.json(statusExcludedEmployee)
            }
        } catch(err){
            next(err);
        }
    }
}

module.exports = new EmployeeControllers();