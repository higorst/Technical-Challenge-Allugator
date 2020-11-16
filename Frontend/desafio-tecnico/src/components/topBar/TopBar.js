import React from 'react';
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
const TopBar = () => {
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
        <Link to="/">
        <Navbar.Brand href="#home">Desafio técnico Allugator</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Consultar funcionário" id="basic-nav-dropdown">
                <Link to={{pathname: "/consult", params: {factorConsult: "o nome", urlConsult: '/getEmployeesByName'}}} >
                <NavDropdown.Item href="#action/3.1">Nome</NavDropdown.Item>
                </Link>

              <NavDropdown.Divider />
                <Link to={{pathname: "/consult", params: {factorConsult: "o cpf", urlConsult: '/getEmployeesByCpf'}}} >
                    <NavDropdown.Item href="#action/3.2">CPF</NavDropdown.Item>
                </Link>

              <NavDropdown.Divider />
                <Link to={{pathname: "/consult", params: {factorConsult: "o status", urlConsult: '/getEmployeesByStatus'}}} >
                    <NavDropdown.Item href="#action/3.3">Status</NavDropdown.Item>
                </Link>

              <NavDropdown.Divider />
                <Link to={{pathname: "/consult", params: {factorConsult: "o local de nascimento (UF)", urlConsult: '/getEmployeesByUfBirth'}}} >
                    <NavDropdown.Item href="#action/3.4">UF de nascimento</NavDropdown.Item>
                </Link>
              
              <NavDropdown.Divider />
                <Link to={{pathname: "/consult", params: {factorConsult: "a data de contratação (dia/mês/ano)", urlConsult: '/getEmployeesByRegisterDate', dataTransferForRequestBody: true}}} >
                    <NavDropdown.Item href="#action/3.5">Data de contratação</NavDropdown.Item>
                </Link>

              <NavDropdown.Divider />
                <Link to={{pathname: "/consultByRange", params: {factorConsult: "a faixa salarial", urlConsult: '/getEmployeesBySalaryRange'}}} >
                    <NavDropdown.Item href="#action/3.6">Faixa salarial</NavDropdown.Item>
                </Link>

            </NavDropdown>
                <Link to={{pathname: "/register", params: {urlConsult: '/addingOrUpdateEmployee'}}} >
                    <Nav.Link href="#home">Adicionar funcionário</Nav.Link>
                </Link>
                <Link to={{pathname: "/remove", params: {urlConsult: '/deleteEmployeeByCpf'}}} >
                    <Nav.Link href="#link">Remover funcionário</Nav.Link>
                </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default TopBar;