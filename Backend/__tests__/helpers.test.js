const Helpers = require('./../src/helpers/stringFormat');

describe('Tests for methods helpers', () => {
    test('Check function that returns that returns string to be saved or compared in database', async () => {
        employee = {
            name: 'samuel rebouças',
            cpf: '123456',
            office: 'DEV jr',
            registerDate: '16/11/2020',
            ufBirth: 'BA',
            salary: '2000.00',
            status: 'ATIVO'
        }
        expected = `${employee.registerDate};${employee.office};${employee.cpf};${employee.name};${employee.ufBirth};${employee.salary};${employee.status}`
        expect(Helpers.stringFormatForSave(employee)).toEqual(expected);
    })
})