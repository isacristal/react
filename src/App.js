import logo from './logo.svg';
import './App.css';
import PrimeiroComponente from "./components/PrimeiroComponente";
import styles from "./components/PrimeiroComponente.module.css";
import CardProduto from "./components/CardProduto";
import HeaderSurf from "./components/HeaderSurf";
import Banner from "./components/Banner";
import MainSurf from "./components/MainSurf";
import PranchasItens from "./components/PranchasItens";
import FotterSurf from "./components/FotterSurf";

function App() {
    return (
        <div className="App">
            <HeaderSurf></HeaderSurf>
            <Banner></Banner>
            <MainSurf></MainSurf>
            <PranchasItens img="/pran1.webp" descrição="Prancha amarela, laranja e vermelha" preço="R$698,97"></PranchasItens>
            <PranchasItens img="/pran2.webp" descrição="Prancha amarela" preço="R$1.986,77"></PranchasItens>
            <PranchasItens img="/cera.webp" descrição="Cera para prancha" preço="R$87,92"></PranchasItens>
            <FotterSurf></FotterSurf>
        </div>
    );
}

export default App;