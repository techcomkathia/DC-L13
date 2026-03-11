//Faça um algoritmo que leia dois valores inteiros A e B. Se os valores forem iguais deverá se somar os dois, caso contrário, multiplique A por B.

let a = parseInt(prompt('Digite o valor de A'))
let b = parseInt(prompt('Digite o valor de B'))

// condição -> procedimento
//se a = b -> somar os dois números
//se a não for = b -> multiplicar os dois números

/*if(condição teste){
   procedimento realizado se a condição for verdadeira
}
else{
    procedimento realizado se nenhuma das condições anteriores for verdadeira
}*/

if(a == b){
   let soma = a + b
   console.log('A e B são iguais, o valor da soma dele é ' + soma)
   console.log(`A e B são iguais, o valor da soma deles é ${soma}`)
}
else{
    let multiplicacao = a * b
    console.log('A e B são diferentes, o valor da multiplicação deles é ' + multiplicacao)
    console.log(`A e B são diferentes, o valor da multiplicação deles é ${multiplicacao}`)
}