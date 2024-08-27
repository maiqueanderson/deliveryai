import {  Col, Container, Row } from "react-bootstrap";
import Logo from '../../assets/LOGO.png';
import Marguerita from '../../assets/marguerita.jpg'
import './Sabores.css';
import { Link } from 'react-router-dom';

import Footer from "../../components/Footer/Footer";

const Sabores = () =>{
    return(
        <>
        <Container>

        <header className="my-4 Logo">
            <img src={Logo} height={100} alt="Pizza Delivery Logo" className="h-12 clientLogo" />
          </header>
          
          <h1 className="Title">Escolha o sabor da pizza</h1>
          <p className="subTitle">Você pode escolher até 3 sabores</p>

          <div className="mt-4 searchDiv">
            <input type="text" placeholder="Pesquisar" className=" searchBar p-2 my-3 border border-border rounded" />
          </div>

          <div>
            <h2 className="my-4 SaborTitle">Sabores Tradicionais</h2>
            
            <div className=" ">
                <Row>
                    <Col xs={6} lg={3}>
                    <Link className="LinkText" to='/Sabores'>
              <div className="p-4 mb-4 border border-border rounded cardSabor">
                <img src={Marguerita}  alt="Pizza de Marguerita" className="saborImage"/>
                <h3 className="cardTitle pt-2">Marguerita</h3>
                <p className="cardTitle">R$ 60,99</p>
                <button className="saborButton">+</button>
              </div>
              </Link>
                    </Col>

                    <Col xs={6} lg={3}>
                    <Link className="LinkText" to='/Sabores'>
              <div className="p-4 border border-border rounded cardSabor">
                <img src={Marguerita} alt="Pizza de Marguerita" className="saborImage"/>
                <h3 className="cardTitle pt-2">Calabresa</h3>
                <p className="cardTitle">R$ 60,99</p>
                <button className="saborButton">+</button>
              </div>
              </Link>
                    </Col>

                    <Col xs={6} lg={3}>
                    <Link className="LinkText" to='/Sabores'>
              <div className="p-4 border border-border rounded cardSabor">
                <img src={Marguerita} alt="Pizza de Marguerita" className="saborImage"/>
                <h3 className="cardTitle pt-2">Calabresa</h3>
                <p className="cardTitle">R$ 60,99</p>
                <button className="saborButton">+</button>
              </div>
              </Link>
                    </Col>

                    <Col xs={6} lg={3}>
                    <Link className="LinkText" to='/Sabores'>
              <div className="p-4 border border-border rounded cardSabor">
                <img src={Marguerita} alt="Pizza de Marguerita" className="saborImage"/>
                <h3 className="cardTitle pt-2">Calabresa</h3>
                <p className="cardTitle">R$ 60,99</p>
                <button className="saborButton">+</button>
              </div>
              </Link>
                    </Col>
                </Row>
              {/* Conteúdo de Pizzas Salgadas */}
             
          </div>

          <h2 className="my-4 SaborTitle">Sabores Premium</h2>
            
            <div className=" pb-5 mb-5 ">
                <Row>
                    <Col xs={6} lg={3}>
                    <Link className="LinkText" to='/Sabores'>
              <div className="p-4 mb-4 border border-border rounded cardSabor">
                <img src={Marguerita}  alt="Pizza de Marguerita" className="saborImage"/>
                <h3 className="cardTitle pt-2">Marguerita</h3>
                <p className="cardTitle">R$ 60,99</p>
                <button className="saborButton">+</button>
              </div>
              </Link>
                    </Col>

                    <Col xs={6} lg={3}>
                    <Link className="LinkText" to='/Sabores'>
              <div className="p-4 border border-border rounded cardSabor">
                <img src={Marguerita} alt="Pizza de Marguerita" className="saborImage"/>
                <h3 className="cardTitle pt-2">Calabresa</h3>
                <p className="cardTitle">R$ 60,99</p>
                <button className="saborButton">+</button>
              </div>
              </Link>
                    </Col>

                    <Col xs={6} lg={3}>
                    <Link className="LinkText" to='/Sabores'>
              <div className="p-4 border border-border rounded cardSabor">
                <img src={Marguerita} alt="Pizza de Marguerita" className="saborImage"/>
                <h3 className="cardTitle pt-2">Calabresa</h3>
                <p className="cardTitle">R$ 60,99</p>
                <button className="saborButton">+</button>
              </div>
              </Link>
                    </Col>

                    <Col xs={6} lg={3}>
                    <Link className="LinkText" to='/Sabores'>
              <div className="p-4 border border-border rounded cardSabor">
                <img src={Marguerita} alt="Pizza de Marguerita" className="saborImage"/>
                <h3 className="cardTitle pt-2">Calabresa</h3>
                <p className="cardTitle">R$ 60,99</p>
                <button className="saborButton">+</button>
              </div>
              </Link>
                    </Col>
                </Row>
              {/* Conteúdo de Pizzas Salgadas */}
             
          </div>
          </div>

        </Container>
        <Footer/>
        </>
    )
}

export default Sabores;