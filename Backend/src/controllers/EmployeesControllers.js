var fs = require('fs');
const EmployeesServices = require('./../services/EmployeesServices');

module.exports = {

    async getEmployeesByName(req, res, next){
        try{
            positionFilterFactor = 3;
            name = req.params.name;
            const data = await EmployeesServices.getData();   
            const employees = await EmployeesServices.getEmployees(data, positionFilterFactor, name);
            res.send(employees)
        } catch(err){
            next(err);
        }

    },

    async getEmployeesByCpf(req, res, next){
       try { 
            positionFilterFactor = 2;
            cpf = req.params.cpf;
            const data = await EmployeesServices.getData();
            const employees = await EmployeesServices.getEmployees(data, positionFilterFactor, cpf);
            res.send(employees);
        } catch(err){
            next(err);
        }

    },

    async getEmployeesByOffice(req, res, next){
        try {
            positionFilterFactor = 1;
            office = req.params.office;
            const data = await EmployeesServices.getData();
            const employees = await EmployeesServices.getEmployees(data, positionFilterFactor, office);
            res.send(employees)
        } catch(err){
            next(err);
        }

    },

    async getEmployeesByRegisterDate(req, res, next){
       try{
            positionFilterFactor = 0;
            registerDate = req.body.registerDate;
            const data = await EmployeesServices.getData();
            const employees = await EmployeesServices.getEmployees(data, positionFilterFactor, registerDate)
            res.send(employees)
       } catch(err){
           next(err);
       }

    },

    async getEmployeesByStatus(req, res, next){
        try{
            positionFilterFactor = 6;
            status = req.params.status;
            const data = await EmployeesServices.getData();
            const employees = await EmployeesServices.getEmployees(data, positionFilterFactor, status);
            res.send(employees)
        } catch(err){
            next(err);
        }

    },
}