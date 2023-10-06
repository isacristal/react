import styles from "./PrimeiroComponente.module.css";

function CardProduto(calopsita){
    return(
        <div>
            <p>Nome: {calopsita.nome}</p>
            <p>Descrição: {calopsita.descrição}</p>
            <p>Preço: {calopsita.preço}</p>
        </div>
    )
}


export default CardProduto