var fs = require('fs').promises;

const formatForSave = (employee) => {
    let stringSave = `\n\n${employee.registerDate};${employee.office};${employee.cpf};${employee.name};${employee.ufBirth};${employee.salary};${employee.status}`
    return stringSave
}

module.exports = {
    async getData(){
        const data = await fs.readFile(`${__dirname}/../../data/database.txt`, "utf8");
        return data
    },

    async getEmployees(data, positionFilterFactor, factorValue){
        let employees = []
        for (let line of data.split('\n')){
            if(line.split(';').length > 1){
                if(factorValue.toLowerCase() === line.split(';')[positionFilterFactor].trim().toLowerCase()){
                    employees.push(
                        {
                            name: line.split(';')[3],
                            cpf: line.split(';')[2],
                            office: line.split(';')[1],
                            registerDate: line.split(';')[0],
                            ufBirth: line.split(';')[4],
                            salary: line.split(';')[5],
                            status: line.split(';')[6].trim()
                        }
                    )
                }
            }
        }
        return (employees);
    },

    async getEmployeesForRangeSalary(data, positionFilterFactor, lowerSalary, upperSalary){
        let employees = []
        for (let line of data.split('\n')){
            if(line.split(';').length > 1){
                if( parseFloat(line.split(';')[positionFilterFactor].trim()) >= parseFloat(lowerSalary) && parseFloat(line.split(';')[positionFilterFactor].trim()) <= parseFloat(upperSalary)){
                    employees.push(
                        {
                            name: line.split(';')[3],
                            cpf: line.split(';')[2],
                            office: line.split(';')[1],
                            registerDate: line.split(';')[0],
                            ufBirth: line.split(';')[4],
                            salary: line.split(';')[5],
                            status: line.split(';')[6].trim()
                        }
                    )
                }
            }
        }
        return (employees);
    },


    async addingEmployee(employee){
        try {
            let stringSave = await formatForSave(employee);
            await fs.appendFile(`${__dirname}/../../data/database.txt`,  stringSave)
            return ({status: 'success', message: 'Employee Registered.'});
        } catch(err){
            return err
        }
    },

    async updateEmployee(data, employeeAlreadyRegistered, newEmployee){
        let stringAlreadyRegistered = await formatForSave(employeeAlreadyRegistered[0]);
        let newStringSave = await formatForSave(newEmployee);
        let newvalue = data.replace(stringAlreadyRegistered, newStringSave)
        await fs.writeFile(`${__dirname}/../../data/database.txt`, newvalue, 'utf8');
        return ({status: 'success', message: 'Employee successfully changed.'});
    },
    //Verificar outra camada de arquivos para adicionar função de gerar string.

    async deleteEmployee(data, employeeAlreadyRegistered){
        let stringAlreadyRegistered = await formatForSave(employeeAlreadyRegistered[0]);
        let newvalue = data.replace(stringAlreadyRegistered, '')
        await fs.writeFile(`${__dirname}/../../data/database.txt`, newvalue, 'utf8');
        return ({status: 'success', message: 'Employee successfully excluded.'});
    }
}

