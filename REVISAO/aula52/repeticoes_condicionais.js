//objetivo: repetições para além do for e do while 
//condicionais para além do if/else if /else e switch/case


//OPERADOR TERNÁRIO -> Será uma boa opção sempre que existir APENAS 2 possibilidades. Seu uso é análogo ao if/else, mas com uma sintaxe mais simples.

function maiorIdade(idade){
    //18 ou mais -> maior
    //abaixo de 18 -> menor
    return idade >= 18 ? 'maior' : 'menor';
    //primeiro termo ? segundo termo : terceiro termo
    //primeiro termo -> condição
    //segundo termo -> se a condição for verdadeira, retorna o segundo termo
    //terceiro termo -> se a condição for falsa, retorna o terceiro termo
}

/*console.log(maiorIdade(18));
console.log(maiorIdade(17));
console.log(maiorIdade(8));
console.log(maiorIdade(50));*/

//crie um objeto com os seguintes atributos: nome, email e senha.
//crie uma função que receba como parametro um objeto e o texto da senha. 
//caso a senha esta correta, uma mensagem de sucesso, caso contrário, retorne o texto 'Senha incorreta'

let usuario ={
    nome:'cleitinho',
    email:'cleitinho@ig.com.br',
    senha:'123456'
}

function verificarSenha(objeto, senha){
    return objeto.senha === senha ? 'senha correta' : 'senha incorreta'
    //=== comparar valor e tipo do dado
    //== comparar apenas o valor
}

console.log(verificarSenha(usuario, '123456')); //senha correta
console.log(verificarSenha(usuario, 123456 ));//senha incorreta (tipo de dado diferente)
console.log(verificarSenha({nome:'nome', email:'email', senha:'senha'}, '1234567'));//senha incorreta


