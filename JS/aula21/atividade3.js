function calculadora(num1, num2, operacaoCallback) {
    let resultado = operacaoCallback(num1, num2)
    
    console.log(`A função de callback ${operacaoCallback.name} foi executada e os parametros foram ${num1} e ${num2} é o resultado é ${resultado}`);
}


//faça a invocação da função calculadora usando arrow functions para o seguinte caso:
//subtração dos números 50, 6
//divisão dos números 50, 2
//divisao dos números 50, 0

calculadora(50,6,(num1, num2) => num1 - num2)

// funções do tipo seta com mais de uma linha
calculadora(50,2, (x, y)=>{
    if(y==0){
        return "Erro: divisão por 0 é impossível"
    }
    else{
        return x/y
    }
})

calculadora(50,0, (x, y)=>{
    if(y==0){
        return "Erro: divisão por 0 é impossível"
    }
    else{
        return x/y
    }
})

calculadora(50,0, (x,y)=> x/y)