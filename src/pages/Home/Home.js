import { useState } from "react";
import {  Container } from "react-bootstrap";
import Logo from '../../assets/LOGO.png';
import './Home.css';
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice, faBowlFood, faBurger, faWineGlass, faCake } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Banner from "../../components/Banner/Banner";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Pizzas');

  // Função para renderizar o conteúdo baseado na categoria selecionada
  const renderCategoryContent = () => {
    switch (selectedCategory) {
      case 'Yakosoba':
        return (
          <div>
            <h2 className="my-4 CatTitle">Yakosoba</h2>
            <div className="space-y-2">
              {/* Conteúdo de Yakosoba */}
              <div className="p-4 my-3 border border-border rounded cardCat">
                <h3 className="cardTitle">Yakosoba Vegetariano</h3>
                <p className="cardContent">Delicioso yakosoba com legumes frescos.</p>
                <p className="cardTitle">R$ 15,99</p>
              </div>

              <div className="p-4 my-3 border border-border rounded cardCat">
                <h3 className="cardTitle">Yakosoba de Frango</h3>
                <p className="cardContent">Delicioso yakosoba com legumes frescos e Frango.</p>
                <p className="cardTitle">R$ 25,99</p>
              </div>

              <div className="p-4 my-3 border border-border rounded cardCat">
                <h3 className="cardTitle">Yakosoba de Carne</h3>
                <p className="cardContent">Delicioso yakosoba com legumes frescos e Carne.</p>
                <p className="cardTitle">R$ 29,99</p>
              </div>

              <div className="p-4 my-3 border border-border rounded cardCat">
                <h3 className="cardTitle">Yakosoba Misto</h3>
                <p className="cardContent">Delicioso yakosoba com legumes frescos com Carne e Frango.</p>
                <p className="cardTitle">R$ 35,99</p>
              </div>
            </div>
          </div>
        );
      case 'Hamburger':
        return (
          <div>
            <h2 className="my-4 CatTitle">Hamburgers</h2>
            <div className="space-y-2">
              {/* Conteúdo de Hamburgers */}
              <div className="p-4 my-3 border border-border rounded cardCat">
                <h3 className="cardTitle">Hamburger Clássico</h3>
                <p className="cardContent">Hamburger com carne bovina, alface, tomate, e queijo.</p>
                <p className="cardTitle">R$ 19,99</p>
              </div>

              <div className="p-4 my-3 border border-border rounded cardCat">
                <h3 className="cardTitle">Hamburger Gourmet</h3>
                <p className="cardContent">Hamburger com carne bovina, Bacon, alface, tomate, e queijo.</p>
                <p className="cardTitle">R$ 29,99</p>
              </div>

              <div className="p-4 my-3 border border-border rounded cardCat">
                <h3 className="cardTitle">Hamburger Premium</h3>
                <p className="cardContent">Hamburger com carne bovina, Bacon, Ovo, alface, tomate, e queijo.</p>
                <p className="cardTitle">R$ 39,99</p>
              </div>

              <div className="p-4 my-3 border border-border rounded cardCat">
                <h3 className="cardTitle">Hamburger da Casa</h3>
                <p className="cardContent">Hamburger com carne bovina, Bacon, Ovo, Presunto, alface, tomate, e queijo.</p>
                <p className="cardTitle">R$ 49,99</p>
              </div>

            </div>
          </div>
        );
      case 'Pizzas':
        return (
          <div>
            <h2 className="my-4 CatTitle">Pizzas Salgadas</h2>
            <div className="space-y-2">

              {/* Conteúdo de Pizzas Salgadas */}
              <Link className="LinkText" to='/Sabores'>
              <div className="p-4 my-3 border border-border rounded cardCat">
                <h3 className="cardTitle">Família</h3>
                <p className="cardContent">Pizza com até 3 sabores e 12 fatias</p>
                <p className="cardTitle">A partir de R$ 60,99</p>
              </div>
              </Link>
              <div className="p-4 my-3 border border-border rounded cardCat">
                <h3 className="cardTitle">Grande</h3>
                <p className="cardContent">Pizza com até 2 sabores e 8 fatias</p>
                <p className="cardTitle">A partir de R$ 49,99</p>
              </div>
              <div className="p-4 my-3 border border-border rounded cardCat">
                <h3 className="cardTitle">Média</h3>
                <p className="cardContent">Pizza com até 2 sabores e 6 fatias</p>
                <p className="cardTitle">A partir de R$ 37,99</p>
              </div>
            </div>
            <h2 className="my-4 CatTitle">Pizzas Doces</h2>
            <div className="space-y-2">
              <div className="p-4 my-3 border border-border rounded cardCat">
                <h3 className="cardTitle">Média</h3>
                <p className="cardContent">Pizza com até 2 sabores e 6 fatias</p>
                <p className="cardTitle">A partir de R$ 37,99</p>
              </div>
            </div>
          </div>
        );
      case 'Bebidas':
        return (
          <div>
            <h2 className="my-4 CatTitle">Bebidas</h2>
            <div className="space-y-2">
              {/* Conteúdo de Bebidas */}
              <div className="p-4 my-3 border border-border rounded cardCat">
                <h3 className="cardTitle">Cerveja Long Neck</h3>
                <p className="cardContent">Heineken.</p>
                <p className="cardTitle">R$ 8,99</p>
              </div>

              <div className="p-4 my-3 border border-border rounded cardCat">
                <h3 className="cardTitle">Refigerante 1L</h3>
                <p className="cardContent">Coca Cola.</p>
                <p className="cardTitle">R$ 8,99</p>
              </div>

              <div className="p-4 my-3 border border-border rounded cardCat">
                <h3 className="cardTitle">Refigerante 1L</h3>
                <p className="cardContent">Guaraná.</p>
                <p className="cardTitle">R$ 5,99</p>
              </div>
            </div>
          </div>
        );
      case 'Tortas':
        return (
          <div>
            <h2 className="my-4 CatTitle">Tortas</h2>
            <div className="space-y-2">
              {/* Conteúdo de Tortas */}
              <div className="p-4 my-3 border border-border rounded cardCat">
                <h3 className="cardTitle">Torta de Chocolate</h3>
                <p className="cardContent">Deliciosa torta de chocolate.</p>
                <p className="cardTitle">A partir de R$ 29,99</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Container className="pb-5 mb-5">
        
          <header className="my-4 Logo">
            <img src={Logo} height={100} alt="Pizza Delivery Logo" className="h-12 clientLogo" />
          </header>

          <h1 className="Title">Seja bem-vindo, Nomecliente</h1>
          <p className="subTitle">O que gostaria de comer hoje?</p>

          <div className="mt-4 searchDiv">
            <input type="text" placeholder="Pesquisar" className=" searchBar p-2 my-3 border border-border rounded" />
          </div>

          <Banner/>

          <h2 className="my-3 CatTitle">Categorias</h2>
          <div className="grid grid-cols-4 gap-4 mt-2">
            <button className="catButton p-2 m-2 rounded" onClick={() => setSelectedCategory('Yakosoba')}>
              <FontAwesomeIcon icon={faBowlFood} alt='Yakosoba' /> Yakosoba
            </button>
            <button className="catButton p-2 m-2 rounded" onClick={() => setSelectedCategory('Hamburger')}>
              <FontAwesomeIcon icon={faBurger} alt='Hamburger' /> Hamburger
            </button>
            <button className="catButton p-2 m-2 rounded" onClick={() => setSelectedCategory('Pizzas')}>
              <FontAwesomeIcon icon={faPizzaSlice} alt='Pizzas' /> Pizzas
            </button>
            <button className="catButton p-2 m-2 rounded" onClick={() => setSelectedCategory('Bebidas')}>
              <FontAwesomeIcon icon={faWineGlass} alt='Bebidas' /> Bebidas
            </button>
            <button className="catButton p-2 m-2 rounded" onClick={() => setSelectedCategory('Tortas')}>
              <FontAwesomeIcon icon={faCake} alt='Tortas' /> Tortas
            </button>
          </div>

          {/* Renderiza o conteúdo da categoria selecionada */}
          {renderCategoryContent()}
        
      </Container>
      <Footer />
    </>
  );
}