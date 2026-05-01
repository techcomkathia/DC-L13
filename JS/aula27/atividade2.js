//usando a lógica das funções async com o await, crie uma função que recebe um objeto produto para ser atualizado. Esse objeto precisa ter os seguintes atributos: 
// id, title, price, description, category, image. Essa função deve atualizar o produto no banco de dados com base no id, passando como parâmetro o id na url da api fakestoreapi e o objeto produto no corpo da requisição com o método PUT.
//A função deve retornar o produto atualizado ou um objeto com o erro.
//O status code deve ser verificado e caso seja da classe 200, o produto deve ser retornado, caso seja da classe 400, o erro deve ser retornado.
//DICA : use o try catch para estruturar sua função e o await para permitir a atribuição de valor a uma variável quando existir uma promisse.

async function atualizarProduto(produto) {

    try{
        //verificação dos campos do objeto informado
        if(produto.id == null || produto.title == null || produto.price == null || produto.description == null || produto.category == null || produto.image == null){
            throw new Error('Os campos do produto devem ser preenchidos')
        }

        //caso todos os campos sejam informados, prosseguir com a atualização (consumo da API)
        let respostaAPI = await fetch(`https://fakestoreapi.com/products/${produto.id}`,
            {
                method: 'PUT',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(produto)
            }
        )

        //verficação do status code da resposta
        if(respostaAPI.status == 200){
            let produtoAtualizado = await respostaAPI.json() //conversão do corpo da resposta em objeto js
            return produtoAtualizado //retorna o produto
        }
        else{
            throw new Error('Erro ao atualizar o produto') //levantar um erro personalizado informando o erro ao atualizar o produto, ele vai ser capturado pelo catch
        }

    }
    catch(error){
        console.log(error.message)
        return {erro: 'Erro ao atualizar o produto'}
    }
    
}