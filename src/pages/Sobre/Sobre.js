import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/LOGO.png';
import Marguerita from '../../assets/marguerita.jpg'
import './Sobre.css'
import Footer from '../../components/Footer/Footer';


const Sobre = () => {
    return (
        <>
            <Container className='pb-5 mb-5'>
                <Link to='/Sabores'>

                    <button className="backButton mt-3">
                        <FontAwesomeIcon icon={faArrowLeft} alt='Voltar' />
                    </button>
                </Link>

                <header className="my-4 Logo">

                    <img src={Logo} height={100} alt="Pizza Delivery Logo" className="clientLogo" />
                </header>

                <div className="p-4 my-3 border border-border rounded cardSobre">
                    <h2 className='cardTitleSobre py-2'>Marguerita</h2>
                    <img className='imageAbout' src={Marguerita} alt='Pizza de Marguerita' />
                </div>

                <div className="p-4 mb-4 border border-border rounded cardSobre">
                    <p className="cardSubTitleSobre">Preços</p>
                    <Row className='cardSubTitleSobre2'>
                        <Col>
                            <span >Média: </span><p>R$ 36,90</p>
                        </Col>
                        <Col>
                            <span >Grande: </span><p>R$ 46,90</p>
                        </Col>
                        <Col>
                            <span >Família: </span><p>R$ 56,90</p>
                        </Col>
                    </Row>
                </div>

                <div className="p-4 mb-4 border border-border rounded cardSobre">
                    <h3 className="cardSubTitleSobre">Descrição</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla​</p>

                </div>

            </Container>
            <Footer />
        </>
    )
}

export default Sobre;