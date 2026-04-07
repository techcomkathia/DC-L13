//para explorar os conceitos de funções sem parâmetros e sem retornos faça a seguinte atividade:
//1. crie uma função que através do prompt solicite o nome e a idade de um usuário. Caso a idade seja maior ou igual a 10 anos, exiba uma mensagem de boas-vindas. Caso contrário, exiba uma mensagem informando que o acesso é restrito a maiores de 10 anos.

//conceitos explorados: função sem parâmetro, condicional e funções de conversão de tipos

function verificarIdade() {
    //solicitar nome e idade do usuário
    const nome = prompt("Digite seu nome:");
    const idade = parseInt(prompt("Digite sua idade:"));

    if(idade >= 10){
        alert(`Bem-vindo, ${nome}!`);
    } else{
        alert(`Desculpe, ${nome}. O acesso é restrito a maiores de 10 anos.`);
    }
}

verificarIdade();