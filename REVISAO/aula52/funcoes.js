//sem parametros
soma(2,2) //não é armazenado em uma variável ou utilizado como parametro para outra funcao
console.log(soma(4,2))

function exibir() {
    //executa sempre que for chamado e tem o mesmo resultado
    console.log('exibir');
}

//sem retorno
function exibir2() {
    //executa sempre que for chamado, tem o mesmo resultado e ele não pode ser captado em uma variável ou passado como parametro para uma otra funcao
    console.log('exibir');
}

//com parametros e/ou retorno
function soma(a, b) {
    //executa sempre que for chamado, tem resultado diferente com base nos parametros passados  e ele pode ser captado em uma variável ou passado como parametro para uma otra funcao
    return a + b;
}


function media(num1, num2){
//usa outra função definida dentro do seu processamento
//todas as vezes que for executada o processamento será o mesmo, porém pode retornar valores diferentes pois ela recebe parametros
let valorSoma = soma(num1, num2)
return (valorSoma / 2)
//todas as linhas após o primeiro retorno serão ignoradas
//elas aparecem um pouco mais "translucidas" indicando que esse trecho de código nunca vai ser executado
return((soma(num1, num2) / 2))
}

function calcular(num1, num2, operacao) {
    //está preparada para executar outra, porém o seu processamento depende da função passada como parâmetro. Como a função recebe uma função como parâmetro, ela pode ser executada dentro do processamento e modificar o comportamento da mesma
    const resultado = operacao(num1, num2)
    console.log(`O resultado da ${operacao.name} de ${num1} e ${num2} é: ${resultado}`);
    return resultado
}

let resultadoFuncaoMedia = media(10, 2)
console.log('O resultado da média é: ' + resultadoFuncaoMedia)

let resultadoFuncaoCallback = calcular(10, 2, media)
resultadoFuncaoCallback=calcular(10, 2, soma)
resultadoFuncaoCallback=calcular(10, 2, (num1, num2)=> num1/num2)
resultadoFuncaoCallback=calcular(10, 2, function(num1, num2){ return num1*2/num2} )


//DESAFIO 1
//escreva uma função que recebe 4 números como parâmetros e retorna o maior deles
//DICA! Crie uma variável auxiliar para armazenar o número e que permita reatribuição
function desafio1(num1, num2, num3, num4) {
    let maior = num1
    if (num2 > maior) {
        maior = num2
    }
    if (num3 > maior) {
        maior = num3
    }
    if (num4 > maior) {
        maior = num4
    }
    return maior
    
}

function desafio2(num1,num2, num3,num4){
    let maior = num1
    let menor = num1

    const numeros = [num1, num2, num3, num4]
    
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] > maior) {
            maior = numeros[i]
        }
        if (numeros[i] < menor) {
            menor = numeros[i]
        }
    }

   
    return [maior, menor]
}

//Caso você termine antes dos 10 min, faça também para o menor deles. Retorne os dois numeros em um array