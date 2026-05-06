function Card(objetoProduto){

    return(
        <div>
            <h3>{objetoProduto.nome}</h3>
            <p>R$ {objetoProduto.preco}</p>
        </div>
    )
}

export default Card