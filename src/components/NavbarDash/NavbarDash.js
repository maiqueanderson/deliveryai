import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import './NavbarDash.css';

const NavbarDash = ({ toggleSidebar }) => {
    return (
        <Navbar bg="dark" expand="lg">
            <Container className="d-flex justify-content-between"> {/* Certifica que Dashboard e botão ficam separados */}
                <div className="d-flex align-items-center">
                    <button className="navButton" onClick={toggleSidebar}> {/* Botão de menu */}
                        <FontAwesomeIcon icon={faBars} alt='Menu' />
                    </button>
                    <Navbar.Brand className="navbardash ms-2" href="/Dashboard">Seu Marketing Online</Navbar.Brand> {/* Nome Dashboard à esquerda */}
                </div>

                <div className="d-flex align-items-center">
                    <Form className="d-none d-lg-flex me-3"> {/* Oculta em telas pequenas */}
                        <Form.Control
                            type="search"
                            placeholder="Pesquisar"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-light">Buscar</Button>
                    </Form>

                    <Dropdown className='userButton'>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            <FontAwesomeIcon icon={faUser} alt='User' />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Sair</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Container>
        </Navbar>
    );
}

export default NavbarDash;