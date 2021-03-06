var fs = require('fs').promises;

const {stringFormatForSave} = require('./../helpers/stringFormat');

class EmployeeServices {

    // Function that retrieves data from the database
    async getData(){
        const data = await fs.readFile(`${__dirname}/../../data/database.txt`, "utf8");
        return data
    }

    //Function that scrolls through lines of the database and checks if a search factor exists in the database. 
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
        return ({data: employees});
    }

    //Function that scrolls through lines of the database and checks if a search factor exists in the database.
    //Uses the range of values
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
        return ({data: employees});
    }

    //Function that adds employee to the text file (database).
    async addingEmployee(employee){
        try {
            let stringSave = await stringFormatForSave(employee);
            await fs.appendFile(`${__dirname}/../../data/database.txt`,  `\r\n\r\n${stringSave}`);
            return ({message: 'Employee Registered.'});
        } catch(err){
            return err
        }
    }

   // Function that change employee to the text file (database).
    async updateEmployee(data, employeeAlreadyRegistered, newEmployee){
        try{
            let stringAlreadyRegistered = await stringFormatForSave(employeeAlreadyRegistered);
            let newStringSave = await stringFormatForSave(newEmployee);
            let newvalue = data.replace(stringAlreadyRegistered, newStringSave);
            await fs.writeFile(`${__dirname}/../../data/database.txt`, newvalue, 'utf8');
            return ({message: 'Employee successfully changed.'});
        } catch(err){
            return err
        }
    }

    // Function that remove employee to the text file (database).
    async deleteEmployee(data, employeeAlreadyRegistered){
        try{
            let stringAlreadyRegistered = await stringFormatForSave(employeeAlreadyRegistered);
            let newValue = data.replace(stringAlreadyRegistered, '\r');
            let newValueRemoveBreakLine = await newValue.replace(/\r\n\r\n\r/, "");
            await fs.writeFile(`${__dirname}/../../data/database.txt`, newValueRemoveBreakLine, 'utf8');
            return ({message: 'Employee successfully excluded.'});
        } catch(err){
            console.log(err)
            return err
        }
    }
}

module.exports = new EmployeeServices();