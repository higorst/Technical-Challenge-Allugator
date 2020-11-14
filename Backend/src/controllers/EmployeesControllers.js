const { Console } = require('console');
var fs = require('fs');
const EmployeesServices = require('./../services/EmployeesServices');

module.exports = {

    async getEmployeesByName(req, res, next){
        try{
            let positionFilterFactor = 3;
            let name = req.params.name;
            const data = await EmployeesServices.getData();   
            const employees = await EmployeesServices.getEmployees(data, positionFilterFactor, name);
            res.send(employees)
        } catch(err){
            next(err);
        }

    },

    async getEmployeesByCpf(req, res, next){
       try { 
            let positionFilterFactor = 2;
            let cpf = req.params.cpf;
            const data = await EmployeesServices.getData();
            const employees = await EmployeesServices.getEmployees(data, positionFilterFactor, cpf);
            res.send(employees);
        } catch(err){
            next(err);
        }

    },

    async getEmployeesByOffice(req, res, next){
        try {
            let positionFilterFactor = 1;
            let office = req.params.office;
            const data = await EmployeesServices.getData();
            const employees = await EmployeesServices.getEmployees(data, positionFilterFactor, office);
            res.send(employees)
        } catch(err){
            next(err);
        }

    },

    async getEmployeesByRegisterDate(req, res, next){
       try{
            let positionFilterFactor = 0;
            let registerDate = req.body.registerDate;
            const data = await EmployeesServices.getData();
            const employees = await EmployeesServices.getEmployees(data, positionFilterFactor, registerDate)
            res.send(employees)
       } catch(err){
           next(err);
       }

    },

    async getEmployeesByStatus(req, res, next){
        try{
            let positionFilterFactor = 6;
            let status = req.params.status;
            const data = await EmployeesServices.getData();
            const employees = await EmployeesServices.getEmployees(data, positionFilterFactor, status);
            res.send(employees)
        } catch(err){
            next(err);
        }
    },

    async getEmployeesByUfBirth(req, res, next) {
        try{
            let positionFilterFactor = 4;
            let ufBirth = req.params.ufBirth;
            const data = await EmployeesServices.getData();
            const employees = await EmployeesServices.getEmployees(data, positionFilterFactor, ufBirth);
            res.send(employees)
        } catch(err){
            next(err);
        }
    },

    async getEmployeesBySalaryRange(req, res, next){
        try{
            let positionFilterFactor = 5;
            let lowerSalary = req.params.lowerSalary;
            let upperSalary = req.params.upperSalary;
            const data = await EmployeesServices.getData();
            const employees = await EmployeesServices.getEmployeesForRangeSalary(data, positionFilterFactor, lowerSalary, upperSalary);
            res.send(employees)
        } catch(err){
            next(err);
        }
    },

    async createEmployee(req, res, next){
        
    }
}