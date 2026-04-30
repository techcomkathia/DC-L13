async function criarProduto2(objetoProduto) {

    try{
        let resposta = await  fetch('https://fakestoreapi.com/products/01',
        {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(obj)
        }
        ) //será retornada a informação apenas quando a promisse for finaliza. Ou seja, um objeto resposta será atribuido a variavel resposta e não uma promisse

        let objetoResposta = await resposta.json()

        //verficar o status code da resposta
        if( resposta.status == 201){
            alert('Produto Criado com Sucesso')
            console.log(objetoResposta) //objeto javascript
            return objetoResposta
        }
        else{
            alert('Erro ao Criar o Produto')
            throw new Error ('status code 400. Erro ao criar um produto')
            
        }
    }
    catch(erro){
        console.log(erro)
        return {erro: 'status code 400. Erro ao criar um produto'}
    }
    
}