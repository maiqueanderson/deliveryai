import { useState } from 'react'; // Importando useState do React
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faMoneyBill1Wave, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faPix } from '@fortawesome/free-brands-svg-icons';

import Marguerita from '../../assets/marguerita.jpg';
import './Cart.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import AddCart from '../../components/AddCart/AddCart';

const Cart = () => {
    const [showChangeInput, setShowChangeInput] = useState(false); // Estado para controlar a exibição do campo de troco

    const handleDinheiroClick = () => {
        setShowChangeInput(!showChangeInput); // Alterna o estado quando o botão "Dinheiro" é clicado
    };

    return (
        <>
            <Header />
            <Container className='pb-5 mb-5'>
                <h2 className='cartTitle'>Pedido</h2>

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

                <div className="py-4 mb-3 border border-border rounded cardCart textCart">
                    <h2>Total do pedido: <span>R$ 119,80</span></h2>
                </div>

                <AddCart />

                <div className="p-4 my-3 border border-border rounded cardCart textCart">
                    <label className='textCart'>
                        <h5>Observação:</h5>
                        <textarea className='p-2 my-3 border border-border rounded observacao' name="observacao" rows={4} cols={100} />
                    </label>
                </div>

                <div className="p-4 my-3 border border-border rounded cardCart textCart">
                    <h2>Forma de pagamento</h2>
                    <p>Pague na entrega via:</p>

                    <div className="grid grid-cols-4 gap-4 mt-2 cartMoney">
                        <button className="catButton p-2 m-2 rounded">
                            <FontAwesomeIcon icon={faPix} alt='Pix' /> Pix
                        </button>
                        <button className="catButton p-2 m-2 rounded" onClick={handleDinheiroClick}>
                            <FontAwesomeIcon icon={faMoneyBill1Wave} alt='Dinheiro' /> Dinheiro
                        </button>
                        <button className="catButton p-2 m-2 rounded">
                            <FontAwesomeIcon icon={faCreditCard} alt='Cartão' /> Cartão
                        </button>
                    </div>

                    {/* Campo de entrada de troco que aparece quando o botão "Dinheiro" é clicado */}
                    {showChangeInput && (
                        <div className="mt-3">
                            <label>Troco para:</label>
                            <input type="number" className="form-control mt-2" placeholder="Digite o valor para o troco" />
                        </div>
                    )}
                </div>

                <div className='py-4 cartButton'>
                    <Button className='ButtonCart' variant='danger'>Finalizar Pedido</Button>
                </div>
            </Container>
            <Footer />
        </>
    );
}

export default Cart;