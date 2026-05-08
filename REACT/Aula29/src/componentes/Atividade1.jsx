//Atividade 1 - Crie um componente chamado CardProduto que recebe propriedade/atributos nome, preco , descricao e  imagem. Retorna um card que é uma div com uma imagem, um h2 com o nome do produto, um h3 com o preco e um p com a descricao. 

//utilize esse componente para renderizar os produtos do array abaixo

import './Atividade1.css' //importação do css externo

let produtos = [
    {nome: 'camisa de linho', preco: 150.00, descricao: 'camisa feita de linho de alta qualidade', imagem: 'https://placehold.co/600x400'},
    { nome: 'tenis branco', preco: 100.00, descricao: 'tenis feito de couro de alta qualidade', imagem: 'https://placehold.co/600x400'},
    {nome: 'mochila preta', preco: 300.00, descricao: 'mochila feita de couro de alta qualidade', imagem: 'https://placehold.co/600x400'
    }
]

export function CardProduto(props){

    return(
        <div>
            <img className="imagemProduto" src={props.imagem} alt={props.nome} />
            <h2>{props.nome}</h2>
            <h3>{props.preco}</h3>
            <p>{props.descricao}</p>
        </div>
    )

}

export default function Atividade1(){
    return(

        // atributo key serve para identificar os elementos do array em um renderização por lista, de forma que possam ser identificados e modificados/ removidos da tela mediante uma atualização de estado
        <div>
            <h1>Atividade 1</h1>
            {
                produtos.map((produto) => <CardProduto 
                key={produto.nome} 
                nome={produto.nome} 
                preco={produto.preco} 
                descricao={produto.descricao} 
                imagem={produto.imagem}/>)
            }
        </div>
    )
}