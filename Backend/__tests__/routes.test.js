const request = require('supertest');
const app = require('./../app');
const {employeeUsedTests} = require('../src/helpers/constants');

describe('Tests for routes', () => {

    test('Access the route get /getEmployeesByName/:name and check return status and properties', async () => {
        const name = employeeUsedTests.name;
        const res = await request(app).get(`/getEmployeesByName/${name}`);

        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('message');
        expect(res.body).toHaveProperty('data');
    })

    test('Access the route get /getEmployeesByCpf/:cpf and check return status and properties', async () => {
        const cpf = employeeUsedTests.cpf;
        const res = await request(app).get(`/getEmployeesByCpf/${cpf}`);

        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('message');
        expect(res.body).toHaveProperty('data');
    })

    test('Access the route get /getEmployeesByOffice/:office and check return status and properties', async () => {
        const office = employeeUsedTests.office;
        const res = await request(app).get(`/getEmployeesByOffice/${office}`);
        
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('message');
        expect(res.body).toHaveProperty('data');
    })

    test('Access the route get /getEmployeesByRegisterDate and check return status and properties', async () => {
        const res = await request(app).post(`/getEmployeesByRegisterDate`).send({registerDate: employeeUsedTests.registerDate});
        
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('message');
        expect(res.body).toHaveProperty('data');
    })

    test('Access the route get /getEmployeesByStatus/:status and check return status and properties', async () => {
        const status = employeeUsedTests.status;
        const res = await request(app).get(`/getEmployeesByStatus/${status}`);
        
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('message');
        expect(res.body).toHaveProperty('data');
    })

    test('Access the route get /getEmployeesByUfBirth/:ufBirth and check return status and properties', async () => {
        const ufBirth = employeeUsedTests.ufBirth;
        const res = await request(app).get(`/getEmployeesByUfBirth/${ufBirth}`);
        
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('message');
        expect(res.body).toHaveProperty('data');
    })

    test('Access the route get /getEmployeesBySalaryRange/:lowerSalary/:upperSalary and check return status and properties', async () => {
        const lowerSalary = '8000.00';
        const upperSalary = '9000.00';
        const res = await request(app).get(`/getEmployeesBySalaryRange/${lowerSalary}/${upperSalary}`);

        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('message');
        expect(res.body).toHaveProperty('data');
    })

    test('Access the route get /addingOrUpdateEmployee and check return status and properties', async () => {
        employee =  {
            name: 'joão',
            cpf: '111111111111',
            office: 'Dev Jr',
            registerDate: '10/04/2017',
            ufBirth: 'BA',
            salary: '1005.30',
            status: 'ATIVO'
        }
        const res = await request(app).post(`/addingOrUpdateEmployee`).send(employee);
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('message');
    })

    test('Access the route get /deleteEmployeeByCpf/:cpf and check return status and properties', async () => {
        const cpf = '111111111111';
        const res = await request(app).delete(`/deleteEmployeeByCpf/${cpf}`);
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('message');
    })
})