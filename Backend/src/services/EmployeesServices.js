var fs = require('fs').promises;

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
    }
}