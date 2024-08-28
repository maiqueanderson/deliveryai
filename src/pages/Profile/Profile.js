import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Header/Header'
import './Profile.css'
import Footer from '../../components/Footer/Footer'

const Profile = () => {
    return (

        <>
            <Header />
            <Container className='pb-5 mb-5 profileText'>
                <h2 className=' cartTitle'>Perfil do Usuario</h2>

                <div className="p-4 my-3 border border-border rounded cardSobre">
                    <p>Nome do usuario</p>
                    <Row>
                        <Col xs={10} lg={10}>
                        <h5>Exemplo de nome do useer</h5>
                        </Col>
                        <Col xs={2} lg={2}>
                        <FontAwesomeIcon icon={faEdit} alt='Editar' />
                        </Col>
                    </Row> 
                </div>

                <div className="p-4 my-3 border border-border rounded cardSobre">
                    <p>E-mail</p>
                    <Row>
                        <Col xs={10} lg={10}>
                        <h5>email@seuemail.com.br</h5>
                        </Col>
                        <Col xs={2} lg={2}>
                        <FontAwesomeIcon icon={faEdit} alt='Editar' />
                        </Col>
                    </Row> 
                </div>

                <div className="p-4 my-3 border border-border rounded cardSobre">
                    <p>Telefone</p>
                    <Row>
                        <Col xs={10} lg={10}>
                        <h5>(11) 99999-9999</h5>
                        </Col>
                        <Col xs={2} lg={2}>
                        <FontAwesomeIcon icon={faEdit} alt='Editar' />
                        </Col>
                    </Row> 
                </div>

                <div className="p-4 my-3 border border-border rounded cardSobre">
                    <p>Senha</p>
                    <Row>
                        <Col xs={10} lg={10}>
                        <h5>**************</h5>
                        </Col>
                        <Col xs={2} lg={2}>
                        <FontAwesomeIcon icon={faEdit} alt='Editar' />
                        </Col>
                    </Row> 
                </div>

                <div className="p-4 my-3 border border-border rounded cardSobre">
                    <p>Endereço</p>
                    <Row>
                        <Col xs={10} lg={10}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco </p>
                        </Col>
                        <Col xs={2} lg={2}>
                        <FontAwesomeIcon icon={faEdit} alt='Editar' />
                        </Col>
                    </Row> 
                </div>
            </Container>
            <Footer />
        </>
    )
}

export default Profile;