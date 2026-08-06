/*console.log(document.getElementById('exemplo').innerHTML) //ocasiona um erro se for executado no terminal do node
console.log('passei da função com erro')*/

/*try{
    somar(1,2)
}
catch(error){
    console.log(error.message)
    console.log('deu ruim, mas foi tratado no bloco catch')
}

console.log('passei da PARTE DO ERRO, pois ele foi tratado')*/


function avaliarAprovacao(media){
    //caso a media não seja igual ou maior q 7, criar um erro personalizado
    if(media < 7){
        throw new Error('A nota tem que ser maior ou igual a 7')
    }
    return 'Aprovado'
}

try{
    console.log(avaliarAprovacao(6))
}
catch(error){
    console.log(error.message)
}

//crie uma função que receba um objeto e retorne sucesso se as condições para dirigir foram atendidas, caso contrario, retorne um erro personalizado para a condição nao ser atendida

//o objeto deve conter as seguintes propriedades: idade e cnh 
//1ª possibilidade: idade maior ou igual a 18 e cnh true -> sucesso
//2ª possibilidade: idade maior ou igual a 18 e cnh false -> erro
//3ª possibilidade: idade menor que 18 -> erro

function avaliarCondutor(objCondutor){
    //atributos não terem sido informados para verificação
    if(objCondutor.idade === undefined || objCondutor.cnh === undefined){
        throw new Error('Idade e/ ou CNH nao foram informados')
    }
    //caso idade e cnh tenham sido informados
    if(objCondutor.idade >= 18 && objCondutor.cnh === true){
        return 'sucesso'
    } else if(objCondutor.idade >= 18 && objCondutor.cnh === false){
        throw new Error('CNH não foi informada ou não foi verificada')
    } else if(objCondutor.idade < 18){
        throw new Error('Idade deve ser maior ou igual a 18')
    }
}

//teste 3 casos possíveis. Lembre-se de executar usando a estrutura try/catch

try{
    console.log(avaliarCondutor({}))
}
catch(error){
    console.log(error.message)
}

