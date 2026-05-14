//ATIVIDADE2: monte um componente que mostre todos os nomes de produtos da api The Fake Store garantindo que a chamada a api será executada apenas uma vez, na montagem do componente

import { useEffect, useState } from "react";
import CardProduto from "./CardProduto";

export default function ListagemProdutos() {

    const [produtos, setProdutos] = useState([])

    async function buscarProdutos() {
        
        try{
            const respostaApi = await fetch('https://fakestoreapi.com/products')
            const prods = await respostaApi.json()
            setProdutos(prods)
        }
        catch(erro){
            console.log(erro)
        }

    }

    useEffect(() => {
        buscarProdutos()
    }, [])

    return(
        //retorno condicional : caso a lista de produtos esteja vazia, mostrar uma mensagem de carregamento, caso contrario, mostrar a lista
        <>
            <h1>Produtos</h1>

            {produtos.length === 0 && <p>Carregando...</p>}
            
            {/* ATIVIDADE2 : faça a instalação do react-bootstrap e bootstrap na sua aplicação, crie um componente  CardProduto. Use o componente Card do react-bootstrap. O componente CardProduto deve receber as seguintes propriedades: imagem, nome, preco e descricao e ser usado na renderização da lista de produtos abaixo 
            https://react-bootstrap.netlify.app/docs/components/cards
            
            */}
            { produtos.length > 0 &&
                <div className="d-flex flex-wrap justify-content-center gap-3 mt-3 my-5">
                    {produtos.map(produto => <CardProduto key={produto.id} imagem={produto.image} nome={produto.title} preco={produto.price} descricao={produto.description} />)}
                </div>
            }
            
        </>
    )
    
}


