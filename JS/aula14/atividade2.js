//Leia dois números e informe o maior deles.

let num1 = prompt('Digite o primeiro número')
num1 = Number(num1)
let num2 = Number(prompt('Digite o segundo número'))

// num1 > num2
// num2 > num1

if(num1>num2){
    alert('O primeiro número é maior que o segundo ')
    console.log(`O primeiro número é ${num1} e o segundo número é ${num2}. O primeiro número é maior que o segundo.`)
}
else{
    alert('O segundo número é maior que o primeiro ')
    console.log(`O primeiro número é ${num1} e o segundo número é ${num2}. O segundo número é maior que o primeiro.`)
}
console.log('Fim das comparações')