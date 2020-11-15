const EmployeesServices = require('../src/services/EmployeesServices');
const {employeeUsedTests} = require('../src/helpers/constants');
var fs = require('fs').promises;


// The following tests used the employee 'Aaron Aaberg' as a basis, whose information is described in the file contained in the helpers folder, being imported into this file.
describe ('Tests for service methods', () => {
    
    test('Verific get database is defined.', async () => {
        expect(await EmployeesServices.getData()).toBeDefined();
    })
    
    test('Verific get employee for name.', async () => {
        
        let expected = employeeUsedTests;

        const data = await fs.readFile(`${__dirname}/../data/database.txt`, "utf8");
        positionFilterFactor = 3;
        factorValue = 'Aaron Aaberg';
        
        expect(await EmployeesServices.getEmployees(data, positionFilterFactor, factorValue)).toContainEqual(expected)
    })

    test('Verific get employee for cpf.', async () => {
        
        let expected = employeeUsedTests;

        const data = await fs.readFile(`${__dirname}/../data/database.txt`, "utf8");
        positionFilterFactor = 2;
        factorValue = '85235708709';
        
        expect(await EmployeesServices.getEmployees(data, positionFilterFactor, factorValue)).toContainEqual(expected)
    })

    test('Verific get employee for status.', async () => {
        
        let expected = employeeUsedTests
        
        const data = await fs.readFile(`${__dirname}/../data/database.txt`, "utf8");
        positionFilterFactor = 6;
        factorValue = 'ATIVO';
        
        expect(await EmployeesServices.getEmployees(data, positionFilterFactor, factorValue)).toContainEqual(expected)
    })

    test('Verific get employee for register date.', async () => {
        
        let expected = employeeUsedTests;
        
        const data = await fs.readFile(`${__dirname}/../data/database.txt`, "utf8");
        positionFilterFactor = 0;
        factorValue = '15/04/2017';
        
        expect(await EmployeesServices.getEmployees(data, positionFilterFactor, factorValue)).toContainEqual(expected)
    })

    test('Verific get employee for office.', async () => {
        
        let expected = employeeUsedTests;
        
        const data = await fs.readFile(`${__dirname}/../data/database.txt`, "utf8");
        positionFilterFactor = 1;
        factorValue = 'Dev Jr';
        
        expect(await EmployeesServices.getEmployees(data, positionFilterFactor, factorValue)).toContainEqual(expected)
    })

    test('Verific get employee for UF birth.', async () => {
        
        let expected = employeeUsedTests;
        
        const data = await fs.readFile(`${__dirname}/../data/database.txt`, "utf8");
        positionFilterFactor = 4;
        factorValue = 'AP';
        
        expect(await EmployeesServices.getEmployees(data, positionFilterFactor, factorValue)).toContainEqual(expected)
    })

    test('Verific get employee for salary range.', async () => {
        
        let expected = employeeUsedTests;
        
        const data = await fs.readFile(`${__dirname}/../data/database.txt`, "utf8");
        lowerSalary = 7000.0;
        upperSalary = 8965.30;
        positionFilterFactor = 5;
        
        expect(await EmployeesServices.getEmployeesForRangeSalary(data, positionFilterFactor, lowerSalary, upperSalary)).toContainEqual(expected)
    })


})