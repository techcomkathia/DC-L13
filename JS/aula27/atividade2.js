//usando a lógica das funções async com o await, crie uma função que recebe um objeto produto para ser atualizado. Esse objeto precisa ter os seguintes atributos: 
// id, title, price, description, category, image. Essa função deve atualizar o produto no banco de dados com base no id, passando como parâmetro o id na url da api fakestoreapi e o objeto produto no corpo da requisição com o método PUT.
//A função deve retornar o produto atualizado ou um objeto com o erro.
//O status code deve ser verificado e caso seja da classe 200, o produto deve ser retornado, caso seja da classe 400, o erro deve ser retornado.
//DICA : use o try catch para estruturar sua função e o await para permitir a atribuição de valor a uma variável quando existir uma promisse.