//faça um get na api The Fake Store e mostre os nomes de todos os produtos seguidos dos preços
// Exemplo : Nome do Produto 1 - $Preço 


//dicas: use o fetch com then e catch para tratar o erro
// para o objeto json, use o json() para converter a resposta em json. Que nesse caso será um array de objetos
// use os métodos para arrays para iterar sobre o array e mostrar as informações na tela
// se a api estiver inativa  ou retornar um array vazio, crie uma exceção e mostre uma mensagem de erro na tela. Utilize o throw new Error() para criar e o catch para capturar o erro

//https://fakestoreapi.com/

function buscarProdutosAPI(){
    //primeiro passo: fazer o fetch na api

    fetch(`https://fakestoreapi.com/products`)
    .then((respostaAPI)=>respostaAPI.json())// conversão da respotas, para um array de objetos
    .then((produtos)=> mostrarNaTela(produtos))// montagem da tela ( passando os dados para a função especifica)
    .catch((erro) => console.log(erro.message))//tratamento dos erros

}

function mostrarNaTela(produtos){
    //elemento do document que irá agrupar os produtos
    const listaProdutos = document.getElementById('produtos')

    produtos.forEach((item)=> {
        //criar o elemento li
        const li = document.createElement('li')
        //adicionar o texto do nome produto mais o preço dentro do innerHTML do li
        li.innerText = `${item.title} - $ ${item.price}`
        //adicionar o li na lista
        listaProdutos.appendChild(li)
    });
}

buscarProdutosAPI()


//DESAFIO: modifique a função mostrar na tela para que seja criado um card com as informações do produto: imagem, nome, preço e categoria. Use um componente do bootstrap para montar o card