/* 
// OPERADORES 
// divisao /
// módulo (o resto da divisão inteira) %

// 2/2 =  1
// 2%2 = 0
// 5/2 = 2,5
// 5%2 = 1

//para um número ser ímpar o módulo da divisão por 2 tem que ser diferente de 0
//para um número ser par o módulo da divisão por 2 tem que ser igual a 0

let num = 80

if(num % 2 == 0){
    console.log('O número é par')
}
else{
    console.log('O número é ímpar')
}

// laço de repetição while

let contador = 0
while(contador <= 10){
    console.log(contador)
    //atualizar o valor do contador / condição de parada
    contador++
}

console.log('Fim do laço de repetição')
*/
// um programa onde o usuario diz se vai continuar ou não
let continuar = true
while(continuar){
    console.log('O laço de repetição foi executado')
    continuar = confirm('Deseja continuar?')
}

console.log('Fim do laço de repetição')



//Faça um programa que peça 5 números ao usuario e mostre eles no console

let numero = Number(prompt('Digite um número: ')) //5
console.log(numero)
 
numero = Number(prompt('Digite um número: ')) //10
console.log(numero)

numero = Number(prompt('Digite um número: ')) //15
console.log(numero)

numero = Number(prompt('Digite um número: ')) //20
console.log(numero)

numero = Number(prompt('Digite um número: ')) //25
console.log(numero)

let quantidadeVezes = 5
let contador = 1 //vai variar de 1 a 5. Quando for 6 o laço é finalizado

while(contador <= quantidadeVezes){
    //processo que será repetido
    let numero = Number(prompt('Digite um número: ')) //5
    console.log(numero)
    //atualização da condição de parada
    //adicionar +1 ao contador
    contador++
}

console.log('Fim do laço de repetição')