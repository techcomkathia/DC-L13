let num1 = "1.5"
let num2 = 2
let num3 = 3.5
console.log(num1 + num2) // 12

//converter para tipo numérico
let num1Convertido = Number(num1)
console.log(num1Convertido) // 1.5
//Number converte o valor para número, se possível. Se o número for inteiro ele converte para inteiro, se for decimal ele converte para decimal. 
console.log(num1Convertido + num2) // 3
console.log(Number("kathia")) // NaN

let numeroDecimalTexto = "550.20"
console.log(Number(numeroDecimalTexto)) // 550.2, o Number converte o número decimal para número decimal, mesmo que o número decimal esteja em formato de texto. O ponto é o separador decimal, e a vírgula é o separador de milhar.
console.log(parseFloat(numeroDecimalTexto)) 
console.log(parseInt(numeroDecimalTexto))
console.log(parseFloat("550,20")) //ignora a vírgula e converte o número para 550, o parseFloat e parseInt não reconhecem a vírgula como separador decimal, apenas o ponto. O parseInt converte o número para inteiro, ignorando a parte decimal. O parseFloat converte o número para decimal, reconhecendo a parte decimal.

// + para soma e concatenação'
// - para subtração
// * para multiplicação
// / para divisão
// % para resto da divisão (parte inteira da divisão/ módulo)
// ** para potência
