//importar o card do produto
import CardProduto from './CardProduto'

export default function SecaoProdutos(props) {
    return(
        <>
        <section id={props.idSecao}>
            <h2>{props.tituloSecao}</h2>

            {props.produtos.map((produto, index) => {
                return(
                    <CardProduto 
                        key={produto.nome + index}
                        nome={produto.nome}
                        preco={produto.preco}
                        descricao={produto.descricao}
                        imagem={produto.imagem}
                        carrinho={props.carrinho}
                        setCarrinho={props.setCarrinho}
                    />
                )
            })}

        </section>       
        
        </>
    )
}
