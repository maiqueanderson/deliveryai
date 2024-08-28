import { Button, Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import Marguerita from '../../assets/marguerita.jpg'
import './Cart.css'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';


const Cart = () => {
    return (
        <>
            <Header/>
            <Container className='pb-5 mb-5'>
                <h2 className=' cartTitle'>Pedido</h2>

                <div className="p-4 my-3 border border-border rounded cardCart">

                    <Row className='textCart'>
                        <Col xs={4} lg={4}>
                            <img className='imageCart' src={Marguerita} alt='Pizza de Marguerita' />
                        </Col>

                        <Col xs={8} lg={8}>
                            <Row><h3>Pizza Grande</h3></Row>
                            <Row><p>Marguerita + Calabresa + Portuguesa</p></Row>
                            <Row>

                                <Col>
                                    <h4>R$ 59,90</h4>
                                </Col>

                                <Col>
                                    <FontAwesomeIcon className='trashIcon' color='#b02323' icon={faTrash} alt='Excluir' />
                                </Col>
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

                                <Col>
                                    <h4>R$ 59,90</h4>
                                </Col>

                                <Col>
                                    <FontAwesomeIcon className='trashIcon' color='#b02323' icon={faTrash} alt='Excluir' />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

                <div className="py-4 border border-border rounded cardCart textCart">
                    <h2>Total do pedido: <span>R$ 119,80</span></h2>
                </div>

                <div className="p-4 my-3 border border-border rounded cardCart textCart">
                    <label className='textCart'>
                        <h5>Observação:</h5>
                        <textarea className='p-2 my-3 border border-border rounded observacao' name="observacao" rows={4} cols={100} />
                    </label>
                </div>

                <div className='py-4 cartButton' >

                <Button className='ButtonCart' variant='danger'>Finalizar Pedido</Button>
                </div>

            </Container>
            <Footer />
        </>
    )
}

export default Cart;