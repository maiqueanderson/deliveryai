
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faClipboard, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Footer = () =>{
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState('');

    useEffect(() => {
        setCurrentPage(location.pathname);
    }, [location]);

    return(
        <footer className="footer mt-5">
            <Container>
                <div className='navFooter'>
                    {/* NO LUGAR DE COLOR COLOCAR VARIAVEL DE COR QUE O CLIENTE ESCOLHEU AO CADASTRAR */}
                    <Row>
                        <Col>
                            <Link to='/Home'>
                                <FontAwesomeIcon className={`iconF ${currentPage === '/Home' ? 'active' : 'colorActive'}`} color='var(--primary-color)' icon={faHouse} />
                            </Link>
                        </Col>
                        <Col>
                            <Link to='/Status'>
                                <FontAwesomeIcon className={`iconF ${currentPage === '/Status' ? 'active' : 'colorActive'}`} color='var(--primary-color)'  icon={faClipboard} />
                            </Link>
                        </Col>
                     
                        <Col>
                            <Link to='/Cart'>
                                <FontAwesomeIcon className={`iconF ${currentPage === '/Cart' ? 'active' : 'colorActive'}`} color='var(--primary-color)'  icon={faCartShopping} />
                            </Link>
                        </Col>
                        <Col>
                            <Link to='/Profile'>
                                <FontAwesomeIcon className={`iconF ${currentPage === '/Profile' ? 'active' : 'colorActive'}`} color='var(--primary-color)'  icon={faUser} />    
                            </Link>
                        </Col>
                    </Row>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;