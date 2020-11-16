import { useEffect, useState } from 'react';
import {InputGroup, FormControl, Container, Col, Row, Button} from 'react-bootstrap';
import ListTable from './../../components/table/Table';
import './Styles.css'
import api from './../../services/api';

const Consult = (props) => {
    const [data, setData] = useState([]);
    const [factorConsult, setFactorConsult] = useState('');
    const [value, setValue] = useState('');

    useEffect(() => {
        setData([])
        setValue('');
        setFactorConsult(props.location.params.factorConsult);
    }, [props.location.key])

    useEffect(() => {
        setFactorConsult(props.location.params.factorConsult);
    }, [])

    function handleSubmit(){
        if(value.length > 0){ 
            if(!props.location.params.dataTransferForRequestBody){
                
                api.get(`${props.location.params.urlConsult}/${value}`).then(
                    result => {
                        setData(result.data)
                    }, err => {
                        console.log(err)
                    }
                    )
                } else {
                    api.post(`${props.location.params.urlConsult}`,  {'registerDate': value}).then(
                    result => {
                        setData(result.data)
                    }, err => {
                        console.log(err)
                    }
                    )
                }
            }
        }

    return (
        <div>
            <h2>
                Encontre o funcionário através d{factorConsult}
            </h2>
            
            <Container>
                <Row>
                    <Col xs={10}>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">Digite {factorConsult}:</InputGroup.Text>
                        </InputGroup.Prepend>
                        
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={value} onChange={e => setValue(e.target.value)}/>
                    </InputGroup>
                    </Col>
                    <Col  className="button-search">
                        <Button variant="dark" size="sm" onClick={handleSubmit}>Buscar</Button>
                    </Col>
                </Row>
                { data.data ?
                <div className='informAmount'>
                    {data.data.length} funcionários encontrados
                </div>
                : null
                }
                    <ListTable items={data}/>
            </Container>
            
        </div>
    )
}

export default Consult;