import cssNav from "./Nav.module.css"
function Nav(){
    return(
        <nav className={cssNav.calop}>
            <p>Início</p>
            <p>Produtos</p>
            <p>Contatos</p>
        </nav>
    )
}

export default Nav