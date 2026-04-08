function mostrarNoConsole(num1, num2, funcaoCallback){
    console.log(funcaoCallback(num1,num2))
}

function somar(num1, num2){
    return num1 + num2
}

mostrarNoConsole(2,2, somar)

mostrarNoConsole(10,5, (parametro1, parametro2) => parametro1 / parametro2 )

//arrow function de uma linha dispensa o retorno explicito. O valor processado será automaticamente retornado
let funcaoSetaUmaLinha = (parametro1, parametro2) => parametro1 / parametro2

//arrow function que recebe 2 números e retorna o maior deles
//arrow function de muitas linhas
let funcaoSetaMuitasLinhas = (num1, num2) => {
    if(num1>num2){
        return num1
    }
    else{
        return num2
    }
}
//não precisa de parâmetros mas a estrutura é necessária () e o símbolo da => define a estrutura. O mesmo vale para funções de seta com muitas linhas e sem parâmetro
let funcaoSetaSemParametro =  ()=> console.log('Olá mundo')


