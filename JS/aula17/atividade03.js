//Atividade 3
//Sistema de nota fiscal. Peça para o usário digitar quantos itens estarão na nota. O valor de cada item deve ser adicionado em um array, o nome do item deve ser adicionado em outro array. No final, mostre o valor total da nota e a lista de itens comprados.
//Exemplo: 3 itens na nota
//nomesItens = ['arroz', 'feijão', 'macarrão']
//valoresItens = [10, 8, 5]
//No console: 
/*  arroz - R$10
    feijão - R$8
    macarrão - R$5
    Total: R$23 
*/


let nomesItens = []
let valoresItens = []
let total = 0

let quantidadeItens = Number(prompt('Quantos itens tem na compra?'))

//para garantir que o usuário vai digitar um número :
//numero < 0 
//numero == palavra/string
while(quantidadeItens <=0 || isNaN(quantidadeItens)){
    alert('Digite um número válido!')
    quantidadeItens = Number(prompt('Quantos itens tem na compra?'))
}
//O código segue após as validações
// de 0 até quantidadeItens - 1 será um processo repetitivo
for(let i = 0; i < quantidadeItens; i++){
    nomesItens[i] = prompt(`Digite o nome do item ${i}`) // na primeira repetição " digite o nome do item 0"
    valoresItens[i] = Number(prompt(`Digite o valor do item ${i+1}`))

    //exibição do texto no console 
    // arroz - R$10
    console.log(`${nomesItens[i]} - R$${valoresItens[i].toFixed(2)}`) //exibição do valor do item com 2 casas decimais, indicado para exibição de valores monetários

    //atualizar a variável total, somando o valor do item atual
    //total = total + valoresItens[i].toFixed(2) //arrendodamento de valor na atribuição não indicado, pois o valor total só deve ser arredondado no final
    total += valoresItens[i]
}

//exibição do total no console
console.log(`Total: R$${total.toFixed(2)}`) //arredondamento do valor total para 2 casas decimais, indicado para exibição de valores monetários


