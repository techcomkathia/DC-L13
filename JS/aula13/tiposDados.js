let texto = 'olá, mundo!'
let numeroInteiro = 50
let numeroDecimal = 5.55
let numeroTexto = '20'

let subtracao = numeroInteiro - numeroTexto
console.log(subtracao) // 30, o JS converte o numeroTexto para número automaticamente
let multiplicacao = numeroInteiro * numeroTexto
console.log(multiplicacao) // 1000, o JS converte o numeroTexto para número automaticamente
let divisao = numeroInteiro / numeroTexto
console.log(divisao) // 2.5, o JS converte o numeroTexto para número automaticamente

let somaTexto = numeroInteiro + numeroTexto
console.log(somaTexto) // 5020, o JS converte o numeroTexto para número automaticamente

let numeroUsuario = prompt('Digite um número:')
console.log(numeroUsuario + 10) // o valor digitado pelo usuário, como string