let numeros = [1,2,3,4,5,6,7,8,9,10,11]
numeros[numeros.length] = 'novoNumero'
numeros[numeros.length] = 'novoNumero2'
console.log(numeros) //tamanho do array
let ultimoIndice = numeros.length - 1
//percorrer o array e mostrar todos os numeros no console
 for(let i = 0; i<=ultimoIndice; i++){
    //acesso
    console.log(numeros[i])
    //atualização ou inserção numeros[i] = numeros[i] ** 2
}
console.log(numeros)

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