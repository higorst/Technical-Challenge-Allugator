import React, { useEffect, useState} from 'react';
import {Table, Pagination} from 'react-bootstrap'


//Component referring to the table for displaying the data.
const ListTable = ({items}) => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    if(items.data){
      setData(items.data);
    } else{
      setData([])
    }
  }, [items])
    return(
        <div>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>Nome</th>
                <th>Cpf</th>
                <th>Cargo</th>
                <th>Data de contratação</th>
                <th>Salário</th>
                <th>UF de nascimento</th>
                <th>Status</th>
                </tr>
            </thead>
            <tbody>
              { 
              data.length > 0 ?
                data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.cpf}</td>
                    <td>{item.office}</td>
                    <td>{item.registerDate}</td>
                    <td>R$ {item.salary}</td>
                    <td>{item.ufBirth}</td>
                    <td>{item.status}</td>
                  </tr>
                ))
               : (
                <tr>
                  <td colSpan="8">Nenhum funcionário encontrado</td>
                </tr>
               ) 
               }
            </tbody>
        </Table>
        </div>
    )
}

export default ListTable;