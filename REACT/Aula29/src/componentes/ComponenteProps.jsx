export default function ComponenteProps(props){
    //receber atributos : nome, idade e cidade do componente pai e será utilizado para mostrar na tela informações diferentes a cada utilização
    return(
        <div>
            <h2>Nome: {props.nome}</h2>
            <h2>Idade: {props.idade}</h2>
            <h2>Cidade: {props.cidade}</h2>
        </div>
    )

}

//Atividade 1 - Crie um componente chamado CardProduto que recebe propriedade/atributos nome, preco , descricao e  imagem. Retorna um card que é uma div com uma imagem, um h2 com o nome do produto, um h3 com o preco e um p com a descricao. 

//utilize esse componente para renderizar os produtos do array abaixo

let produtos = [
    {nome: 'camisa de linho', preco: 150.00, descricao: 'camisa feita de linho de alta qualidade', imagem: 'https://placehold.co/600x400'},
    { nome: 'tenis branco', preco: 100.00, descricao: 'tenis feito de couro de alta qualidade', imagem: 'https://placehold.co/600x400'},
    {nome: 'mochila preta', preco: 300.00, descricao: 'mochila feita de couro de alta qualidade', imagem: 'https://placehold.co/600x400'
    }
]