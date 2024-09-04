import { Container, Form, Button } from 'react-bootstrap';
import { useState } from 'react'; // Importa useState
import './Login.css';
import Logo from '../../assets/LOGO.png';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false); // Estado para controlar a exibição da senha

    // Função para alternar a exibição da senha
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <Container>
                <header className="my-4 Logo">
                    <img src={Logo} height={100} alt="Pizza Delivery Logo" className="h-12 clientLogo" />
                </header>

                <h1 className="Title">Login</h1>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            Insira o seu e-mail
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        {/* Utiliza o estado showPassword para determinar o tipo de entrada */}
                        <Form.Control type={showPassword ? "text" : "password"} placeholder="Senha" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        {/* Chama a função togglePasswordVisibility ao clicar */}
                        <Form.Check
                            type="checkbox"
                            label="Mostrar senha"
                            onChange={togglePasswordVisibility}
                        />
                    </Form.Group>
                    <div className='criarConta'>

                    <p>Não possui uma conta ainda? <span>CRIAR CONTA</span></p>
                    </div>

                    <Button className='ButtonForm' type="submit">
                        Entrar
                    </Button>
                </Form>
            </Container>
        </>
    );
}

export default Login;