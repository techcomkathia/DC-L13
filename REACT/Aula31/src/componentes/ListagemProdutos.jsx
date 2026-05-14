//ATIVIDADE: monte um componente que mostre todos os nomes de produtos da api The Fake Store garantindo que a chamada a api será executada apenas uma vez, na montagem do componente

import { useEffect, useState } from "react";

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
        <>
            <h1>Produtos</h1>
            <ul>
              {produtos.map(produto => <li key={produto.id}>{produto.title}</li>)}  
            </ul>
            
        </>
    )
    
}