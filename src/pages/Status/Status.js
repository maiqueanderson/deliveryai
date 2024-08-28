
import { Col, Container, Row } from 'react-bootstrap'
import './Status.css'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Marguerita from '../../assets/marguerita.jpg'

const Status = () => {
    return (
        <>
            <Header />
            <Container className='pb-5 mb-5'>
                <h2 className=' cartTitle'>Status do pedido</h2>

                <div className="p-4 my-3 border border-border rounded cardSobre">
                    <h3 className=' py-2 statusText'><span className='statusDot'>◉ </span>Pedido em andamento</h3>
                </div>

                <div className="p-4 my-3 border border-border rounded cardCart">

                    <Row className='textCart'>
                        <Col xs={4} lg={4}>
                            <img className='imageCart' src={Marguerita} alt='Pizza de Marguerita' />
                        </Col>

                        <Col xs={8} lg={8}>
                            <Row><h3>Pizza Grande</h3></Row>
                            <Row><p>Marguerita + Calabresa + Portuguesa</p></Row>
                            <Row>
                                <h4>R$ 59,90</h4>
                            </Row>
                        </Col>
                    </Row>
                </div>

                <div className="p-4 my-3 border border-border rounded cardCart">

                    <Row className='textCart'>
                        <Col xs={4} lg={4}>
                            <img className='imageCart' src={Marguerita} alt='Pizza de Marguerita' />
                        </Col>

                        <Col xs={8} lg={8}>
                            <Row><h3>Pizza Grande</h3></Row>
                            <Row><p>Marguerita + Calabresa + Portuguesa</p></Row>
                            <Row>
                                <h4>R$ 59,90</h4>
                            </Row>
                        </Col>
                    </Row>
                </div>

                <div className="py-4 border border-border rounded cardCart textCart">
                    <h2>Total do pedido: <span>R$ 119,80</span></h2>
                </div>
            </Container>
            <Footer />
        </>
    )
}

export default Status;