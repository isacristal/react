import styles from "./PrimeiroComponente.module.css"
function PrimeiroComponente(){
    return(
        <div>
            <h1 className={styles.titulo}>Meu Primeiro Componente</h1>
            <h2 className={styles.subtitulo}>React é muito legal!</h2>
            <p style={{color: "green", fontSize: "25px"}}>Um texto aqui</p>
        </div>

    )
}
export default PrimeiroComponente