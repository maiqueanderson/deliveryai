import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import './NavbarDash.css'; 

const NavbarDash = () => {
    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand className="navbardash" href="/Dashboard">Dashboard</Navbar.Brand>     
                <Form className="d-none d-lg-flex"> {/* Oculta em telas pequenas, mostra em grandes */}
                    <Form.Control
                        type="search"
                        placeholder="Pesquisar"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-light">Buscar</Button>
                </Form>
            </Container>
        </Navbar>
    );
}

export default NavbarDash;