// leia 2 números e mostre no console o booleano indicando se o primeiro número é maior que o segundo
// ex: 5 e 3 -> true
// ex: 2 e 4 -> false

let num1 = Number(prompt("Digite o primeiro número:")); //"10"-> 10
let num2 = Number(prompt("Digite o segundo número:")); // "50" -> 50
// "palavra" -> NaN

let resultado = num1 > num2; // true ou false
console.log( num1 + " é maior que " + num2 + "? " + resultado);
console.log(`${num1} é maior que ${num2}? ${resultado}`); // template string