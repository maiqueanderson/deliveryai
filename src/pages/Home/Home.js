import { Container } from "react-bootstrap";
import Logo from '../../assets/LOGO.png';
import './Home.css'


export default function Home() {
  return (
    <Container>

    <div className="">
       
      <header className="my-4 Logo">
        {/* LOGO DO CLIENTE         */}
        <img src={Logo} height={100} alt="Pizza Delivery Logo" className="h-12 clientLogo" />
      </header>

      {/* NOME DO USUARIO */}
      <h1 className="Title">Seja bem-vindo, Nomecliente</h1>
      <p className="subTitle">O que gostaria de comer hoje?</p>
      
      {/* BARRA DE PESQUISA */}
      <div className="mt-4 searchDiv">
        <input type="text" placeholder="Pesquisar" className=" searchBar p-2 my-3 border border-border rounded" />
      </div>

      {/* CATEGORIAS */}
      <h2 className="my-3 CatTitle">Categorias</h2>

      <div className="grid grid-cols-4 gap-4 mt-2">
        <button className="bg-secondary text-secondary-foreground p-2 m-2 rounded">
          <img src="https://openui.fly.dev/openui/24x24.svg?text=🍜" alt="Yakosoba" />
          Yakosoba
        </button>
        <button className="bg-secondary text-secondary-foreground p-2 m-2 rounded">
          <img src="https://openui.fly.dev/openui/24x24.svg?text=🍔" alt="Hamburger" />
          Hamburger
        </button>
        <button className="bg-secondary text-secondary-foreground p-2 m-2 rounded">
          <img src="https://openui.fly.dev/openui/24x24.svg?text=🍕" alt="Pizzas" />
          Pizzas
        </button>
        <button className="bg-secondary text-secondary-foreground p-2 m-2 rounded">
          <img src="https://openui.fly.dev/openui/24x24.svg?text=🍺" alt="Bebidas" />
          Bebidas
        </button>
        <button className="bg-secondary text-secondary-foreground p-2 m-2 rounded">
          <img src="https://openui.fly.dev/openui/24x24.svg?text=🍰" alt="Tortas" />
          Tortas
        </button>
      </div>

      {/* TELA ONDE O USUARIO ESCOLHEU A CATEGORIA */}
      <h2 className="my-4 CatTitle">Pizzas Salgadas</h2>
      <div className="space-y-2">

        <div className="p-4 my-3 border border-border rounded cardCat">
          <h3 className="cardTitle">Família</h3>
          <p className="cardContent">Pizza com até 3 sabores e 12 fatias</p>
          <p className="cardTitle">A partir de R$ 60,99</p>
        </div>

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
    </Container>
  );
}
