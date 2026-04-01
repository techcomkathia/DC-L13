//atividade consiste em manipular um array de objetos. Verificar se determinado objeto tem uma propriedade específica, criar uma variável que armazene um valor de acordo com a manipulação de propriedades de todos os objetos do array e por fim mostrar no console informaçoes específicas

let estoque = [
    {   nome: "Camiseta",
        quantidade: 10,
        preco: 29.99
    },
    {   nome: "Calça",
        quantidade: 5,
        preco: 49.99    
    },
    {   nome: "Tênis",
        quantidade: 3,
        preco: 89.99    
    },
    {   nome: "Jaqueta",
        quantidade: 2,
        preco: 99.99    
    }
]

//faça um inventário e verifique quantas peças existem no estoque. Dica: utilize um loop para percorrer o array  acessando a propriedade correta e somando ela em variável

//o gerente enloqueceu: vai adicionar um desconto a cada um dos produtos: 10%. Faça a criação de uma propriedade em cada um dos objetos do array chamada desconto. Além disso faça a criação de uma propriedade chamada precoComDesconto, que deve ser o resultado do preço original com o desconto aplicado (dica: use as duas propriedades para calcular o valor do preço com desconto)

//mostre no console a tabela de estoque no seguinte formato:
// nomeProduto - preço original - preço com desconto - quantidade em estoque

//no final, converta o array de objetos para o formato json e mostre no console o resultado. Dica: utilize a função JSON.stringify() para fazer a conversão do array para json