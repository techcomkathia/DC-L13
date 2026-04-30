//consumindo a API fakestoreapi
//crie um produto com o método POST para a url abaixo
//https://fakestoreapi.com/products

//você deve usar o produto:

let produto = {
    id: 0,
    title: "camisa tech sabor Insider",
    price: 50.00,
    description: "camisa que faz o mesmo que a da Insider só que mais barata",
    category: "vestuario",
    image: "http://example.com"
}

//caso o status code seja da classe 200 mostre um alert com 'produto criado com sucesso'
//caso o status code seja da classe 400 mostre um alert com 'erro ao criar o produto'

function criarProduto(obj){
   fetch('https://fakestoreapi.com/products/01',
    {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(obj)
    }
    )
    .then((resposta)=>{
        if(resposta.status == 201){
            alert('Produto Criado com Sucesso')
            //opcionalmente converter a resposta em objeto js
            return resposta.json()
        }
        else{
            alert('Erro ao Criar o Produto')
            throw new Error ('status code 400. Erro ao criar um produto')
        }
    })
    .then((objetoRespota)=> console.log(objetoRespota))
    .catch((erro)=> console.log(erro.message)) 
}

criarProduto(produto)