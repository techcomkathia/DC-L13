//Você foi contratado para criar um sistema de gerenciamento de estoque para uma loja. 
//O primeiro módulo  a ser entregue é o de cadastro de produtos. O sistema deve permitir que o usuário adicione novos produtos, com as seguintes características: 
//um produto deve ter nome, preço, quantidade, coresDisponíveis (array de strings) e tamanhosDisponíveis (array de strings).
//exemplo: camisa Tech 
// valor R$129.00 
// quantidade 100 unidades
// coresDisponíveis:preta, branca e vermelha
// tamanhosDisponíveis: P, M, G e GG
//[nome, preço, quantidade, [coresDisponíveis], [tamanhosDisponíveis]]

//crie a estrutura de perguntas para o cadastro de um produto, utilizando arrays para armazenar as informações de cores e tamanhos disponíveis.
let produtosLOJA = []
//Objetivo: adicionar um array ( o produto cadastrado pelo usuário) dentro do array produtosLOJA

let nomeProduto = prompt('Digite o nome do produto:')
let precoProduto = Number(prompt('Digite o preço do produto:'))
let quantidadeProduto = Number(prompt('Digite a quantidade do produto:'))
//primeiro array dentro do array de um produto: coresDisponíveis
let qtdCores = Number(prompt('Quantas cores estão disponíveis para esse produto?')) //2
let coresDisponiveis = [] //inicializar um array vazio para armazenar as cores que serão passadas
//adicionando as cores disponíveis para o produto
for(let i = 0; i < qtdCores; i++){
    coresDisponiveis[i] = prompt(`Digite a cor ${i+1} disponível para esse produto:`)
}
let qtdTamanhos = Number(prompt('Quantos tamanhos estão disponíveis para esse produto?'))
let tamanhosDisponiveis = []    
//adicionando os tamanhos disponíveis para o produto    
for(let i = 0; i < qtdTamanhos; i++){
    tamanhosDisponiveis[i] = prompt(`Digite o tamanho ${i+1} disponível para esse produto:`)
}
//adicionando o produto cadastrado pelo usuário dentro do array produtosLOJA
produtosLOJA[0] = [nomeProduto, precoProduto, quantidadeProduto, coresDisponiveis, tamanhosDisponiveis]


//DESAFIO! Evolua a questão para que o usuário determine quantos produtos ele deseja cadastrar, e utilize um loop para repetir o processo de cadastro para cada produto, armazenando cada produto como um array dentro do array produtosLOJA.