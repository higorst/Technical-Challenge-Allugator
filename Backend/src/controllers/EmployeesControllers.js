const EmployeesServices = require('./../services/EmployeesServices');

class EmployeeControllers {

    // Function responsible for obtaining employees by name
    async getEmployeesByName(req, res, next){
        try{
            let positionFilterFactor = 3;
            let name = req.params.name;
            const data = await EmployeesServices.getData();   
            const employees = await EmployeesServices.getEmployees(data, positionFilterFactor, name);
            if(employees.data.length === 0 ){
                res.status(404).json({message: 'Employee not found.', data: []})
            } else{
                res.status(200).json({message:'Employees found.', data: employees.data})
            }
        } catch(err){
            next(err);
        }
    }

    // Function responsible for obtaining employees by cpf
    async getEmployeesByCpf(req, res, next){
       try { 
            let positionFilterFactor = 2;
            let cpf = req.params.cpf;
            const data = await EmployeesServices.getData();
            const employees = await EmployeesServices.getEmployees(data, positionFilterFactor, cpf);
            if(employees.data.length === 0 ){
                res.status(404).json({message: 'Employee not found.', data: []})
            } else{
                res.status(200).json({message:'Employees found.', data: employees.data});
            }
        } catch(err){
            next(err);
        }
    }

    // Function responsible for obtaining employees by Office
    async getEmployeesByOffice(req, res, next){
        try {
            let positionFilterFactor = 1;
            let office = req.params.office;
            const data = await EmployeesServices.getData();
            const employees = await EmployeesServices.getEmployees(data, positionFilterFactor, office);
            if(employees.data.length === 0 ){
                res.status(404).json({message: 'Employees not found.', data: []})
            } else{
                res.status(200).json({message:'Employees found.', data: employees.data})
            }
        } catch(err){
            next(err);
        }
    }
    // Function responsible for obtaining employees by Register date
    async getEmployeesByRegisterDate(req, res, next){
       try{
            let positionFilterFactor = 0;
            let registerDate = req.body.registerDate;
            const data = await EmployeesServices.getData();
            const employees = await EmployeesServices.getEmployees(data, positionFilterFactor, registerDate)
            if(employees.data.length === 0 ){
                res.status(404).json({message: 'Employees not found.', data: []})
            } else{
                res.status(200).json({message:'Employees found.', data: employees.data})
            }
       } catch(err){
           next(err);
       }
    }

    // Function responsible for obtaining employees by Status
    async getEmployeesByStatus(req, res, next){
        try{
            let positionFilterFactor = 6;
            let status = req.params.status;
            const data = await EmployeesServices.getData();
            const employees = await EmployeesServices.getEmployees(data, positionFilterFactor, status);
            if(employees.data.length === 0 ){
                res.status(404).json({message: 'Employees not found.', data: []})
            } else{
                res.status(200).json({message:'Employees found.', data: employees.data})
            }
        } catch(err){
            next(err);
        }
    }

    // Function responsible for obtaining employees by Birthplace
    async getEmployeesByUfBirth(req, res, next) {
        try{
            let positionFilterFactor = 4;
            let ufBirth = req.params.ufBirth;
            const data = await EmployeesServices.getData();
            const employees = await EmployeesServices.getEmployees(data, positionFilterFactor, ufBirth);
            if(employees.data.length === 0 ){
                res.status(404).json({message: 'Employees not found.', data: []})
            } else{
                res.status(200).json({message:'Employees found.', data: employees.data})
            }
        } catch(err){
            next(err);
        }
    }

     // Function responsible for obtaining employees by salary range
    async getEmployeesBySalaryRange(req, res, next){
        try{
            let positionFilterFactor = 5;
            let lowerSalary = req.params.lowerSalary;
            let upperSalary = req.params.upperSalary;
            const data = await EmployeesServices.getData();
            const employees = await EmployeesServices.getEmployeesForRangeSalary(data, positionFilterFactor, lowerSalary, upperSalary);
            if(employees.data.length === 0 ){
                res.status(404).json({message: 'Employees not found.', data: []})
            } else{
                res.status(200).json({message:'Employees found.', data: employees.data})
            }
        } catch(err){
            next(err);
        }
    }

    //Function that adds or changes user data
    async addingOrUpdateEmployee(req, res, next){
        try{
            let employee = req.body;
            let cpf = employee.cpf;
            let positionFilterFactor = 2;
            const data = await EmployeesServices.getData();
            const employeeAlreadyRegistered = await EmployeesServices.getEmployees(data, positionFilterFactor, cpf);
            if(employeeAlreadyRegistered.data.length === 0){
               let statusAddingEmployee = await EmployeesServices.addingEmployee(employee)
                res.status(200).json(statusAddingEmployee)
            } else {
                let statusUpdateEmployee = await EmployeesServices.updateEmployee(data, employeeAlreadyRegistered.data[0], employee)
                res.status(200).json(statusUpdateEmployee)
            }
        } catch(err){
            res.status(404).json({message: "Error when registering"})
        }
    }

    //Function that remove employee by cpf
    async deleteEmployeeByCpf(req, res, next){
        try{
            let positionFilterFactor = 2;
            let cpf = req.params.cpf;
            const data = await EmployeesServices.getData();
            const employeeAlreadyRegistered = await EmployeesServices.getEmployees(data, positionFilterFactor, cpf);
            if(employeeAlreadyRegistered.data.length === 0){
                res.status(404).json({message: 'Employee not found.'})
            } else {
                let statusExcludedEmployee = await EmployeesServices.deleteEmployee(data, employeeAlreadyRegistered.data[0]);
                res.status(200).json(statusExcludedEmployee)
            }
        } catch(err){
            next(err);
        }
    }
}

module.exports = new EmployeeControllers();