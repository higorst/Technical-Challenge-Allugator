import './App.css';
import ListTable from './components/table/Table';
import {Container} from 'react-bootstrap';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './features/home/Home';
import TopBar from  './components/topBar/TopBar';
import Consult from './features/consult/Consult';
import ConsultByRange from './features/consult/ConsultByRange';
import RegisterEmployee from './features/register/Register';
import RemoveEmployee from './features/remove/Remove';

function App() {
  return (
    <div className="App">
   
    <BrowserRouter>
    <TopBar/>
    <Container className='container'>
      <Route  path='/' component={Home} exact />  
      <Route  path='/consult' component={Consult} />
      <Route  path='/consultByRange' component={ConsultByRange} />
      <Route  path='/register' component={RegisterEmployee} />
      <Route path='/remove' component={RemoveEmployee} />
    </Container>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
