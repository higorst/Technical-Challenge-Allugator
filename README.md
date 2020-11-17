# Desafio-Técnico-Allugator

# Sobre

Projeto requerido no processo seletivo para o cargo de desenvolvedor de software na empresa [Allugator](https://www.allugator.com/).

Desenvolvimento de uma API RESTful responsável pelo controle dos funcionários de uma empresa, assim como o desenvolvimento de uma aplicação web capaz de consumir os serviços criados na API.

# Tecnologias

* [Reactjs](https://pt-br.reactjs.org/)
* [NodeJs](https://nodejs.org/en/)
* [Jest](https://jestjs.io/)

# Escopo

O presente projeto foi dividido entre Backend e Frontend, de modo que todos os serviços desenvolvidos no backend fossem acessados através do frontend da aplicação.

Para tal comunicação foi utilizado o [axios](https://www.npmjs.com/package/axios), o qual se caracteriza como um cliente HTTP baseado em promise que realiza a comunicação entre as duas camadas da aplicação.

# Executar projeto

Inicialmente é necessaŕio clonar o repositório.

``` https://github.com/samuelreboucas07/Technical-Challenge-Allugator.git ```

Após acessar a pasta raiz do projeto é necessário percorrer até a pasta referente ao backend da aplicação, para assim poder iniciar nosso servidor.

**Iniciar servidor** 
```
cd Backend
yarn install 
yarn start
```

Em sequência é realizado a execução do do servidor web da aplicação:

**Iniciar projeto web**
```
cd Frontend/desafio-tecnico
yarn install 
yarn start
```

Dessa forma temos a aplicação web executando no endereço ```http://localhost:3000``` e a API executando no endereço  ```http://localhost:3001```

# Realização de testes

Para testar todas as funcionalidade da API RESTful foi utilizado o framework Jest.

Os arquivos de teste estão presentes da pasta ``` __tests__``` dentro da pasta raiz da API.

Os testes foram divididos em três aquivos, cujo cada arquivo é responsável por uma parte da aplicação.

* ```helpers.test.js``` - Arquvo contendo o caso de teste para o arquivo de ``` helpers ``` contido na API.
* ```services.test.js``` - Aquivo contento os casos de testes referentes aos arquivos de serviços.
* ```routes.test.js``` - Aquivo contento os casos de testes referentes as rotas da aplicação, neste arquivo contém os testes referentes a cada endpoint da aplicação.

**Executar testes**
```
cd Backend
yarn test 
```

# Documentação da API

Como solicitado foi utilizado o swagger para documentar a API.

Para acessar a plataforma contendo os endpoints da aplicação é necessário que a API esteja em execuçã. 

Deste modo é possivel acessar o ambiente do swagger através do endereço ```http://localhost:3001/api-docs```  e realizar os testes necessários.

# Endpoints

* ```/getEmployeesByName/:name``` - Endpoint que permite que o funcionários sejam encontrados através do nome.
* ```/getEmployeesByCpf/:cpf``` - Endpoint que permite que o usuárifufuncionáriosncionáriosos sejam encontrados através do cpf.
* ```/getEmployeesByOffice/:office``` - Endpoint que permite que o funcionários sejam encontrados através do cargo.
* ```/getEmployeesByRegisterDate``` - Endpoint que permite que o funcionários sejam encontrados através da data de contratação.
* ```/getEmployeesByStatus/:status``` - Endpoint que permite que o funcionários sejam encontrados através do status.
* ```/getEmployeesByUfBirth/:ufBirth``` - Endpoint que permite que o funcionários sejam encontrados através do local do nascimento.
* ```/getEmployeesBySalaryRange/:lowerSalary/:upperSalary``` - Endpoint que permite que o funcionários sejam encontrados através da faixa salarial.
* ```/addingOrUpdateEmployee``` - Endpoint responsável pelo cadastro ou edição de funcionário.
* ```/deleteEmployeeByCpf/:cpf``` - Endpoint que permite que o funcionário seja removido através do seu cpf.