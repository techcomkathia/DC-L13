let num1 = 10;
let num2 = 20;

let soma = num1 + num2;
console.log(soma);

//declaração
function dizerOla() {
    let x = 'dentro de uma função'
    console.log("Olá, mundo!");
    console.log(`Variavel x: ${x}`);
}

dizerOla();
dizerOla();
//console.log(x); // erro, x é uma variável local da função dizerOla()


let x = 'fora da função';
console.log(x);