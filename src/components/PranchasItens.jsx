function PranchasItens(calopsita){
    return(
        <div>
            <img src="/core.png"/>
            <img src={calopsita.img}/>
            <p>{calopsita.descrição}</p>
            <p>{calopsita.preço}</p>

            <button> Ver mais...</button>
        </div>
    )
}

export default PranchasItens