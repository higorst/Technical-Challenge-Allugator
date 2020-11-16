import { useEffect, useState } from 'react';
import {InputGroup, FormControl, Container, Col, Row, Button} from 'react-bootstrap';
import ListTable from '../../components/table/Table';
import './Styles.css'
import api from '../../services/api';


//Poderia usar o outro componente, mas a lógica ficaria confusa e não se justificaria.
const ConsultByRange = (props) => {
    const [data, setData] = useState([]);
    const [factorConsult, setFactorConsult] = useState('');
    const [valueLower, setValueLower] = useState('');
    const [valueUpper, setValueUpper] = useState('');

    useEffect(() => {
        setData([])
        setValueLower('');
        setValueUpper('');
        setFactorConsult(props.location.params.factorConsult);
    }, [props.location.key])

    useEffect(() => {
        setFactorConsult(props.location.params.factorConsult);
    }, [])

    function handleSubmit(){
        if(valueLower.length > 0 && valueUpper.length > 0){ 
            api.get(`${props.location.params.urlConsult}/${valueLower}/${valueUpper}`).then(
                result => {
                    setData(result.data)
                }, err => {
                    console.log(err)
                }
                )
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
                        <InputGroup.Text id="inputGroup-sizing-sm">Digite o limite inferior:</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={valueLower} onChange={e => setValueLower(e.target.value)}/>
                    </InputGroup>
                    
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">Digite o limite superior:</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={valueUpper} onChange={e => setValueUpper(e.target.value)}/>
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

export default ConsultByRange;