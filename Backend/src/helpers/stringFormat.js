
module.exports = {
    stringFormatForSave (employee) {
        let stringSave = `${employee.registerDate};${employee.office};${employee.cpf};${employee.name};${employee.ufBirth};${employee.salary};${employee.status}`
        return stringSave
    }
}