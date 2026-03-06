//Leia dois números e exiba com um alert a soma dos dois.
let num1 = Number(prompt('Digite o primeiro número:'))
let num2 = Number(prompt('Digite o segundo número:'))
let soma = num1 + num2
alert(`A soma dos dois números é: ${soma}`)


// calcular o valor do aumento com referencia no salario
//somar o salario com o aumento
// 1000
// 1000 * (10/100) = 100

let salario = Number(prompt('Digite o salário:'))
let percentagemAumento =  20
let novoSalario = salario + (salario * (percentagemAumento / 100))
alert('O novo salário com  aumento é de ' + novoSalario)
// novoSalario = salario * 1.20