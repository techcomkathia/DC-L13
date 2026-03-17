/* peça 5 números ao usuário e some todos eles.
O usuário deverá saber qual é a ordem do número que ele está informando . Ex: "Digite o x º numero de 5 números"*/

let quantidadeDeNumeros = 50
let contador = 1
let somaNumeros = 0

while(contador<=quantidadeDeNumeros){
    //pedir um número ao usuário
    let numeroUsuario = Number(prompt(`Digite o ${contador}º número de ${quantidadeDeNumeros} números: `)) 
    //(prompt('Digite o ' + contador + 'º número de ' + quantidadeDeNumeros + ' números: ')) 
    
    //adicinar o número informado pelo usuário à soma dos números
    somaNumeros = somaNumeros + numeroUsuario
    //somaNumeros += numeroUsuario

    //atualizar o contador
    contador++
}

console.log('A soma dos números é: ' + somaNumeros)
