
//crie uma função para cada operação matemática básica (soma, subtração, multiplicação e divisão), essas funções devem receber dois números como parâmetros e mostrar o resultado da operação no console.
//importante, para a divisão faça a validação para não permitir a divisão por zero, caso o segundo número seja zero, mostre uma mensagem de erro no console.

function soma(num1, num2){
    let resultado = num1 + num2;
    console.log(`A soma de ${num1} e ${num2} é: ${resultado}`);
}

function subtracao(num1, num2){
    let resultado = num1 - num2;
    console.log(`A subtração de ${num1} e ${num2} é: ${resultado}`);
}

function multiplicacao(num1, num2){
    let resultado = num1 * num2;
    console.log(`A multiplicação de ${num1} e ${num2} é: ${resultado}`);
}

function divisao(num1, num2){
    if(num2 === 0){
        console.log("Erro: Não é possível dividir por zero.");
    } else {
        let resultado = num1 / num2;
        console.log(`A divisão de ${num1} por ${num2} é: ${resultado}`);
    }

}

function calculadora(num1, num2, operacao){
    switch(operacao){
        case 'soma':
            soma(num1, num2);   
            break;
        case 'subtracao':
            subtracao(num1, num2);
            break;
        case 'multiplicacao':
            multiplicacao(num1, num2);
            break;
        case 'divisao':
            divisao(num1, num2);
            break;
        default:
            console.log("Operação inválida.");
    }
}


