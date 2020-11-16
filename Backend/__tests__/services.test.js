const EmployeesServices = require('../src/services/EmployeesServices');
const {employeeUsedTests} = require('../src/helpers/constants');
var fs = require('fs').promises;


// The following tests used the employee 'Aaron Aaberg' as a basis, whose information is described in the file contained in the helpers folder, being imported into this file.
describe ('Tests for service methods', () => {
    
    test('Verific get database is defined.', async () => {
        expect(await EmployeesServices.getData()).toBeDefined();
    })
    
    test('Verific get employee for name.', async () => {
        
        const data = await fs.readFile(`${__dirname}/../data/database.txt`, "utf8");
        positionFilterFactor = 3;
        factorValue = employeeUsedTests.name;
        
        expect(await EmployeesServices.getEmployees(data, positionFilterFactor, factorValue)).toHaveProperty('data');
    })

    test('Verific get employee for cpf.', async () => {
        
        const data = await fs.readFile(`${__dirname}/../data/database.txt`, "utf8");
        positionFilterFactor = 2;
        factorValue = employeeUsedTests.cpf;
        
        expect(await EmployeesServices.getEmployees(data, positionFilterFactor, factorValue)).toHaveProperty('data');
    })

    test('Verific get employee for status.', async () => {
        
        const data = await fs.readFile(`${__dirname}/../data/database.txt`, "utf8");
        positionFilterFactor = 6;
        factorValue = employeeUsedTests.status;
        
        expect(await EmployeesServices.getEmployees(data, positionFilterFactor, factorValue)).toHaveProperty('data');
    })

    test('Verific get employee for register date.', async () => {
        
        const data = await fs.readFile(`${__dirname}/../data/database.txt`, "utf8");
        positionFilterFactor = 0;
        factorValue = employeeUsedTests.registerDate;
        
        expect(await EmployeesServices.getEmployees(data, positionFilterFactor, factorValue)).toHaveProperty('data');
    })

    test('Verific get employee for office.', async () => {
        
        const data = await fs.readFile(`${__dirname}/../data/database.txt`, "utf8");
        positionFilterFactor = 1;
        factorValue = employeeUsedTests.office;
        
        expect(await EmployeesServices.getEmployees(data, positionFilterFactor, factorValue)).toHaveProperty('data');
    })

    test('Verific get employee for UF birth.', async () => {
        
        const data = await fs.readFile(`${__dirname}/../data/database.txt`, "utf8");
        positionFilterFactor = 4;
        factorValue = employeeUsedTests.ufBirth;
        
        expect(await EmployeesServices.getEmployees(data, positionFilterFactor, factorValue)).toHaveProperty('data');
    })

    test('Verific get employee for salary range.', async () => {
        
        const data = await fs.readFile(`${__dirname}/../data/database.txt`, "utf8");
        lowerSalary = 7000.0;
        upperSalary = 8965.30;
        positionFilterFactor = 5;
        
        expect(await EmployeesServices.getEmployeesForRangeSalary(data, positionFilterFactor, lowerSalary, upperSalary)).toHaveProperty('data')
    })


    //Testar direito
    // test('Verific service adding employee.', async () => {
    //     let employee =  {
    //         name: 'joão teste',
    //         cpf: '222222222',
    //         office: 'Dev Jr',
    //         registerDate: '10/04/2017',
    //         ufBirth: 'BA',
    //         salary: '1005.30',
    //         status: 'ATIVO'
    //     }
    //     expect(await EmployeesServices.addingEmployee(employee)).toHaveProperty('message')
    // })

    // test('Verific service update employee.', async () => {
    //     let employeeAlreadyRegister =  {
    //         name: 'joão teste',
    //         cpf: '222222222',
    //         office: 'Dev Jr',
    //         registerDate: '10/04/2017',
    //         ufBirth: 'BA',
    //         salary: '1005.30',
    //         status: 'ATIVO'
    //     }
    //     let newEmployee =  {
    //         name: 'joão teste alterado',
    //         cpf: '222222222',
    //         office: 'Dev Jr',
    //         registerDate: '12/04/2017',
    //         ufBirth: 'BA',
    //         salary: '1005.30',
    //         status: 'ATIVO'
    //     }
    //     const data = await fs.readFile(`${__dirname}/../data/database.txt`, "utf8");

    //     expect(await EmployeesServices.updateEmployee(data, employeeAlreadyRegister, newEmployee)).toHaveProperty('message')
    // })

    // test('Verific service delete employee.', async () => {
    //     let employee =  {
    //         name: 'joão teste alterado',
    //         cpf: '222222222',
    //         office: 'Dev Jr',
    //         registerDate: '12/04/2017',
    //         ufBirth: 'BA',
    //         salary: '1005.30',
    //         status: 'ATIVO'
    //     }
    //     const data = await fs.readFile(`${__dirname}/../data/database.txt`, "utf8");

    //     expect(await EmployeesServices.deleteEmployee(data, employee)).toHaveProperty('message')
    // })


})