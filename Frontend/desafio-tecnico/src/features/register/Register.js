import {useState} from 'react';
import  {Container, Col, InputGroup, FormControl, Button} from 'react-bootstrap';
import api from './../../services/api';
import { ToastProvider, useToasts } from 'react-toast-notifications'

//User registration screen
const Register = ({props}) => {
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [office, setOffice] = useState('');
    const [registerDate, setRegisterDate] = useState('');
    const [ufBirth, setUfBirth] = useState('');
    const [salary, setSalary] = useState('');
    const [status, setStatus] = useState('');
    const { addToast } = useToasts();

    function handleSubmit(){

        const employee = {
            name,
            cpf,
            office, 
            registerDate, 
            ufBirth,
            salary,
            status 
        }
        api.post(`${props.location.params.urlConsult}`, employee).then(
            result => {
                if(result.status === 200){
                    setName('');
                    setCpf('');
                    setOffice('');
                    setRegisterDate('');
                    setUfBirth('');
                    setSalary('');
                    setStatus('');
                    addToast('Funcionário salvo', { appearance: 'success', autoDismiss: true})
                }
            }, err => {
                console.log(err)
                addToast('Erro ao adicionar funcionário', { appearance: 'error', autoDismiss: true})
            }
            )
          
}

    return (
            <Container>
                <h2>
                    Cadastre um novo funcionário
                </h2>
                <br/>
                <Col xs={10}>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">Digite o nome:</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={name} onChange={e => setName(e.target.value)}/>
                    </InputGroup>
                    
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">Digite o cpf:</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={cpf} onChange={e => setCpf(e.target.value)}/>
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">Digite o cargo:</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={office} onChange={e => setOffice(e.target.value)}/>
                    </InputGroup>
                    
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">Digite a data de contratação:</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={registerDate} onChange={e => setRegisterDate(e.target.value)}/>
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">Digite o local de nascimento (UF):</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={ufBirth} onChange={e => setUfBirth(e.target.value)}/>
                    </InputGroup>
                    
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">Digite o salário:</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={salary} onChange={e => setSalary(e.target.value)}/>
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">Digite o status:</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={status} onChange={e => setStatus(e.target.value)}/>
                    </InputGroup>

                </Col>
                    <Col  className="button-search">
                        <Button variant="dark" onClick={handleSubmit}>Salvar</Button>
                    </Col>
            </Container>
    )
}

const RegisterEmployee = (props) => (
    <ToastProvider>
      <Register props={props}/>
    </ToastProvider>
  )
  

export default RegisterEmployee;
