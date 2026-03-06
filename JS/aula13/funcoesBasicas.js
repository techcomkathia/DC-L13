//funcoes de saída de dados
console.log("Textos escritos dentro de aspas simples ou duplas são considerados strings, ou seja, textos.");
let x = "conteúde de uma variável";
console.log(x);
//mostrar uma caixa de dialogo com o usuario e um botão de ok. só é fechada quando o usuário clicar no botão.
alert("Esse é um alerta! Ele é usado para mostrar mensagens para o usuário.");
// escrever no documento HTML, ou seja, na página web. pode ser usado para mostrar o resultado de um cálculo ou para mostrar uma mensagem para o usuário.
document.write("Esse texto foi escrito usando a função document.write(). Ele é usado para mostrar mensagens para o usuário ou para mostrar o resultado de um cálculo.");

//função de entrada de dados
//mostrar uma caixa de dialogo com o usuário, um campo para ele digitar algo e um botão de ok. só é fechada quando o usuário clicar no botão.
let nome = prompt("Qual é o seu nome?");
console.log(nome);

//confirme: mostrar uma caixa de dialogo com o usuário, um texto e dois botões: ok e cancelar. retorna true se o usuário clicar em ok e false se clicar em cancelar.
let resposta = confirm("Você tem certeza que deseja continuar?");
console.log(resposta);

let meuNumero = 10
//concatenar: juntar duas ou mais strings ou variáveis em uma única string (texto). pode ser feito usando o operador + ou usando template literals.
console.log("O valor da variável meuNumero é: " + meuNumero);

// ATIVIDADE 1
//Leia informações do usuário usando a função prompt(), armazene cada uma em uma variável e depois mostre todas essas informações no console, com console.log()
/* nome, idade, cidade, email e telefone*/
/* mostre as informações da seguinte forma : 
Nome: [nomeUsuario]
Idade: [idadeUsuario]
Cidade: [cidadeUsuario]
Email: [emailUsuario]
Telefone: [telefoneUsuario]
*/