import styles from "./HeaderSurf.module.css"
import Nav from "./Nav";

function HeaderSurf() {
    return(
        <div className={styles.sur}>
            <p style={{color:"red"}}>Cristal'Surfs</p>
            <div>
                <Nav></Nav>
                <img src="/carrinho.png"/>
                <img src="/core.png"/>
            </div>
        </div>
    )
}

export default HeaderSurf