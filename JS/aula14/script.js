let x = 10
let y = null // intencionalmente deixado como null para declarar a variável sem atribuir um valor específico
let z // z é declarada, mas não inicializada, o que significa que seu valor é undefined

let w = Number("palavra") // Isso resultará em NaN (Not a Number) porque "palavra" não pode ser convertido para um número

console.log(x, y, z, w) // Imprime o valor de x, y, z e w

// --------------- operadores de comparação ---------------
// OPERADOR DE IGUALDADE (==)
console.log("x == 10:", x == 10) // true, porque x é igual a 10
console.log("'10' == 10:", '10' == 10) // true, porque o operador de comparação == faz coerção de tipo
console.log("PALAVRA == 'palavra':", "PALAVRA" == "palavra") // false, porque as strings são diferentes (case-sensitive)

// OPERADOR DIFERENTE (!=)

console.log("x != 5:", x != 5) // true, porque x é diferente de 5
console.log("'10' != 10:", '10' != 10) // false, porque o operador de comparação != faz coerção de tipo
console.log(" precisa negar algo vai utilizar o !boolean:", !true , !false) // false, porque o operador de negação ! inverte o valor booleano

// OPERADOR DE IDENTIDADE ou IGUALDADE ESTRITA (===)
// Para ser igual estritamente, os valores devem ser iguais e do mesmo tipo
console.log(" '10' === 10:", '10' === 10) // false, porque os tipos são diferentes (string vs number)
console.log(" palavra === 'Palavra':",  "palavra" === "Palavra") // false, porque as strings são diferentes (case-sensitive)

// OPERADOR DE DIFERENTE ESTRITO (!==)
console.log(" '10' !== 10:", '10' !== 10) // true, porque os tipos são diferentes (string vs number)
console.log(" palavra !== 'Palavra':", "palavra" !== "Palavra") // true, porque as strings são diferentes (case-sensitive)

// OPERADOR DE MAIOR QUE (>)
console.log("10 > 5:", 10 > 5) // true, porque 10 é maior que 5
console.log("10 > 10:", 10 > 10) // false, porque 10 é igual a 10
console.log("10 > '10':", 10 > '10') // false, porque o operador de comparação > faz coerção de tipo

// OPERADOR DE MENOR QUE (<)
console.log("10 < 5:", 10 < 5) // false, porque 10 é maior que 5
console.log("10 < 10:", 10 < 10) // false, porque 10 é igual a 10
console.log("10 < '10':", 10 < '10') // false, porque o operador de comparação < faz coerção de tipo

// OPERADOR DE MAIOR OU IGUAL (>=)
console.log("10 >= 5:", 10 >= 5) // true, porque 10 é maior que 5
console.log("10 >= 10:", 10 >= 10) // true, porque 10 é igual a 10
console.log("10 >= '10':", 10 >= '10') // true, porque o operador de comparação >= faz coerção de tipo

// OPERADOR DE MENOR OU IGUAL (<=)
console.log("10 <= 5:", 10 <= 5) // false, porque 10 é maior que 5
console.log("10 <= 10:", 10 <= 10) // true, porque 10 é igual a 10
console.log("10 <= '10':", 10 <= '10') // true, porque o operador de comparação <= faz coerção de tipo