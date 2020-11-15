const request = require('supertest');
const app = require('./../app');
const {employeeUsedTests} = require('../src/helpers/constants');

describe('Tests for routes', () => {
    test('Access the route get /getEmployeesByName/:name and check return', async () => {
        const name = 'Aaron Aaberg';
        const res = await request(app).get(`/getEmployeesByName/${name}`);

        expected =  employeeUsedTests;

        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('message');
        expect(res.body).toHaveProperty('data');
        expect(res.body.data).toContainEqual(expected);
    })

    test('Access the route get /getEmployeesByCpf/:cpf and check return', async () => {
        const cpf = '85235708709';
        const res = await request(app).get(`/getEmployeesByCpf/${cpf}`);
        
        expected =  employeeUsedTests;

        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('message');
        expect(res.body).toHaveProperty('data');
        expect(res.body.data).toContainEqual(expected);
    })

    test('Access the route get /getEmployeesByOffice/:office and check return', async () => {
        const office = 'Dev Jr';
        const res = await request(app).get(`/getEmployeesByOffice/${office}`);
        
        expected =  employeeUsedTests;

        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('message');
        expect(res.body).toHaveProperty('data');
        expect(res.body.data).toContainEqual(expected);
    })

    test('Access the route get /getEmployeesByRegisterDate and check return', async () => {
        const res = await request(app).get(`/getEmployeesByRegisterDate`).send({registerDate: "15/04/2017"});
        
        expected =  employeeUsedTests;

        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('message');
        expect(res.body).toHaveProperty('data');
        expect(res.body.data).toContainEqual(expected);
    })

    test('Access the route get /getEmployeesByStatus/:status and check return', async () => {
        const status = 'ATIVO';
        const res = await request(app).get(`/getEmployeesByStatus/${status}`);
        
        expected =  employeeUsedTests;

        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('message');
        expect(res.body).toHaveProperty('data');
        expect(res.body.data).toContainEqual(expected);
    })

    test('Access the route get /getEmployeesByUfBirth/:ufBirth and check return', async () => {
        const ufBirth = 'AP';
        const res = await request(app).get(`/getEmployeesByUfBirth/${ufBirth}`);
        
        expected =  employeeUsedTests;

        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('message');
        expect(res.body).toHaveProperty('data');
        expect(res.body.data).toContainEqual(expected);
    })

    test('Access the route get /getEmployeesBySalaryRange/:lowerSalary/:upperSalary and check return', async () => {
        const lowerSalary = '8000.00';
        const upperSalary = '9000.00';
        const res = await request(app).get(`/getEmployeesBySalaryRange/${lowerSalary}/${upperSalary}`);
        
        expected =  employeeUsedTests;

        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('message');
        expect(res.body).toHaveProperty('data');
        expect(res.body.data).toContainEqual(expected);
    })

    test('Access the route get /addingOrUpdateEmployee and check return', async () => {
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

    test('Access the route get /deleteEmployeeByCpf/:cpf and check return', async () => {
        const cpf = '111111111111';
        const res = await request(app).delete(`/deleteEmployeeByCpf/${cpf}`);
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('message');
    })
})