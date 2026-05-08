export default function CardProduto(props){

    return(

        <div className="boxProduto" >
            <div className="boxImg">  
                <img src={props.imagem} alt={props.nome}/>   
            </div>
            <div className="boxTexto">
                <h3>{props.nome} - R$ {props.preco}</h3>
                <p>
                    {props.descricao}
                </p>
                <button className="btn" onClick={() => {props.setCarrinho([...props.carrinho,{nome: props.nome, preco: props.preco}])}}>Pedir</button>
            </div>
        </div>

    )
}