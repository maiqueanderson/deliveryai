
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/LOGO.png';

const Header = () => {
    return (
        <>
            <Container>
                <Link to='/Home'>

                    <button className="backButton mt-3">
                        <FontAwesomeIcon icon={faArrowLeft} alt='Voltar' />
                    </button>
                </Link>

                <header className="my-4 Logo">
                    <img src={Logo} height={100} alt="Pizza Delivery Logo" className="clientLogo" />
                </header>
            </Container>
        </>
    )
}

export default Header;