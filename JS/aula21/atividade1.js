//construa 4 funções para as operações aritméticas: soma, subtração, multiplicação e divisão. Essas funções devem receber dois números como parâmetros e retornar o resultado da operação.
function soma(num1, num2) {
    return num1 + num2  
}

function subtracao(num1, num2) {
    return num1 - num2  
}

function multiplicacao(num1, num2) {
    return num1 * num2  
}

function divisao(num1, num2) {
    if(num2 === 0) {
        return "Erro: Divisão por zero"
    } else {
        return num1 / num2  
    }
}


//construa uma função chamada calculadora que recebe 3 parametros: 2 numeros e uma operação. Essa função deve executar a operação matemática e mostrar o resultado no console ou no alert.

function calculadora(num1, num2, operacaoCallback) {
    let resultado = operacaoCallback(num1, num2)
    
    console.log(`A função de callback ${operacaoCallback.name} foi executada e os parametros foram ${num1} e ${num2} é o resultado é ${resultado}`);
}

calculadora(10, 5, soma)
calculadora(10, 5, subtracao)
calculadora(10, 5, multiplicacao)
calculadora(10, 5, divisao)