const numeros = [1,2,3,4,5,6,7,8,9,10]

//10 elementos
//primeiro index 0
//ultimo index 9
//tamanho do array pode ser obtido com a propriedade length
console.log(`Tamanho do array: ${numeros.length}`)
console.log(`Primeiro elemento: ${numeros[0]}`)
console.log(`último elemento: ${numeros[numeros.length-1]}`)
console.log(`Indice 200 tem o valor: ${numeros[200]}`)

numeros[12]= 'novo valor adicionado pelo index 12'

console.log(numeros)
//para não inserir espaços vazios em um array é indicado utilizar os métodos de inserção e remoção

//pop, shift
//retirada do final do array
console.log(numeros.pop())
console.log(numeros)
//retirada do inicio do array
console.log(numeros.shift())
console.log(numeros)

//push, ushift
//inserção no final do array
console.log(numeros.push('onze'))
console.log(numeros)
//inserção no inicio do array
console.log(numeros.unshift('zero'))
console.log(numeros)

numeros[10]= 'valor a ser removido'
numeros[11]= 'valor a ser removido'
console.log(numeros)

//splice -> funciona tanto como remoção quanto como inserção
//remoção
console.log(numeros.splice(10,2))
console.log(numeros)
//inserção
console.log(numeros.splice(10,0, 'onze', 'doze'))
console.log(numeros)


console.log('-------------------------------------------------------------')


for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i])
}


//for of
for(let itemArray of numeros){
    console.log(itemArray)
}

//de tras para frente
for(let i = numeros.length-1; i >= 0; i--){
    console.log(numeros[i])
}

//reverse 
console.log(`Nosso array invertido: ${numeros.reverse()}`) 

console.log('-------------------------------strings x arrays------------------------------')
console.log(`a palavra 'palavra' tem ${'palavra'.length} letras`)
console.log(`a palavra "palavra" ao contrário fica ${'palavra1 palavra2'.split('').reverse().join('')}`)
console.log(numeros.join(' ')) //concatenar os elementos do array em uma string

//DESAFIO COM ARRAYS:
/* Em uma fila de atentimento temos 2 classificações: normal e preferencial
Você foi convocado para organizar a fila e montar o registro dos atendidos:
Para cada 2 pessoas da fila normal, 1 pessoa da fila preferencial será chamada.
Teremos 10 atendimentos nesse turno. Faça um programa que monte o registro dos atendimentos e ao final mostre em texto os nomes dos atendidos. */

//Dicas: métodos de remoção sempre retornam os elementos removidos. 
//O método join pode ser utilizado para concatenar os elementos de um array em uma string.

let filaNormal = ['Pessoa 1 Fila Normal ', 'Pessoa 2 fila normal', 'Pessoa 3 Fila Normal', 'Pessoa 4 Fila Normal', 'Pessoa 5 Fila Normal', 'Pessoa 6 Fila Normal', 'Pessoa 7 Fila Normal', 'Pessoa 8 Fila Normal', 'Pessoa 9 Fila Normal', 'Pessoa 10 Fila Normal']
let filaPreferencial = ['Pessoa 1 Fila Preferencial', 'Pessoa 2 Fila Preferencial', 'Pessoa 3 Fila Preferencial', 'Pessoa 4 Fila Preferencial', 'Pessoa 5 Fila Preferencial']

//iteração com um laço de repetição para que sejam chamados 10 atendimentos. Cada atendimento consiste em 2 pessoas da fila normal e 1 da preferencial
//A lógica de remoção deve ser:

//remoção de 2 pessoas da fila normal
//remoção de 1 pessoa da fila preferencial
//contatdor de atendimentos

console.log(`-------------------------------------------------------`)
let contador = 0
let filaAtendidos = [] //acumulador
for(let i = 0; contador<=9; i++){
    if(contador<=7){
       filaAtendidos.push(filaNormal.shift()) 
       filaAtendidos.push(filaNormal.shift()) 
       filaAtendidos.push(filaPreferencial.shift())
       contador+=3
    }
    else if(contador <= 8){
        filaAtendidos.push(filaNormal.shift()) 
        filaAtendidos.push(filaNormal.shift()) 
        contador+=1
    }
    else {
        filaAtendidos.push(filaNormal.shift())
        contador+=1
    }
    
}
console.log(`Fila dos atendidos: ${filaAtendidos}. Quantidade de atendimentos: ${filaAtendidos.length}`) 
console.log(`Fila normal: ${filaNormal}`)
console.log(`Fila preferencial: ${filaPreferencial}`)

console.log(`Nome de todas as pessoas atendidas: ${filaAtendidos.join(', ')}`)