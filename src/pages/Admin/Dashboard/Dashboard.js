import Sidebar from '../../../components/Sidebar/Sidebar';
import Card from 'react-bootstrap/Card';
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import Charts from '../../../components/Charts/Chats';

const Dashboard = () => {
    return (
        <Sidebar>
            <h1 className='mb-3'>Dashboard</h1>
        
            <Row className='mb-5'>
                <Col>
                <Card
                bg='primary'  
                text="white"   
               
                className="mb-2"
            >
                <Card.Header>Pedidos Solicitados: <span className='pedidos'>20</span></Card.Header>
                <Card.Body>
                    <Link className='LinkDash'>Ver detalhes <FontAwesomeIcon className='chev' icon={faChevronRight} /></Link>
                </Card.Body>
            </Card>
                </Col>

                <Col>
                <Card
                bg='warning'  
                text="white"   
             
                className="mb-2"
            >
                <Card.Header>Pedidos em Andamento: <span className='pedidos'>20</span></Card.Header>
                <Card.Body>
                    <Link className='LinkDash'>Ver detalhes <FontAwesomeIcon className='chev' icon={faChevronRight} /></Link>
                </Card.Body>
            </Card>
                </Col>

                <Col>
                <Card
                bg='success'  
                text="white"   
                
                className="mb-2"
            >
                <Card.Header>Pedidos Finalizados: <span className='pedidos'>20</span></Card.Header>
                <Card.Body>
                    <Link className='LinkDash'>Ver detalhes <FontAwesomeIcon className='chev' icon={faChevronRight} /></Link>
                </Card.Body>
            </Card>
                </Col>


                <Col>
                <Card
                bg='danger' 
                text="white"   
                className="mb-2"
            >
                <Card.Header>Pedidos Devolvidos: <span className='pedidos'>20</span></Card.Header>
                <Card.Body>
                    <Link className='LinkDash'>Ver detalhes <FontAwesomeIcon className='chev' icon={faChevronRight} /></Link>
                </Card.Body>
            </Card>
                </Col>
            </Row>

            <Charts/>
         


        </Sidebar>
    );
};

export default Dashboard;