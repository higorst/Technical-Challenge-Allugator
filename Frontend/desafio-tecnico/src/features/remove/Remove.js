import {useState} from 'react';
import { ToastProvider, useToasts } from 'react-toast-notifications'
import api from './../../services/api';
import  {Container, Col, InputGroup, FormControl, Button, Row} from 'react-bootstrap';

const Remove = ({props}) => {
    const [cpf, setCpf] = useState('');
    const { addToast } = useToasts();

    function handleSubmit(){
        if(cpf.length > 0){ 
            api.delete(`${props.location.params.urlConsult}/${cpf}`).then(
                result => {
                    setCpf('');
                    addToast('Funcionário removido com sucesso', { appearance: 'success', autoDismiss: true});
                },
                err => {
                    console.log(err);
                    addToast('Erro ao remover funcionário', { appearance: 'error', autoDismiss: true});
                }
            )
        } else{
            addToast('Por favor informe o CPF do funcionário', { appearance: 'error', autoDismiss: true});
        }
    }
    return (
        <Container>
            <Row>
                <Col xs={10}>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">Digite o cpf:</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={cpf} onChange={e => setCpf(e.target.value)}/>
                    </InputGroup>
                </Col>
                <Col>
                    <Button variant="dark" size="sm" onClick={handleSubmit}>Remover</Button>
                </Col>
            </Row>
        </Container>
    )
}

const RemoveEmployee = (props) => {
    return(
        <ToastProvider>
            <Remove props={props}/>
        </ToastProvider>    
    )
}

export default RemoveEmployee;