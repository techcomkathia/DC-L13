function minhaFuncao( texto) {
    alert( texto);
}


//funções executadas por eventos no DOM
//1- Selecionar o objeto que irá disparar o evento
//2- Definir o tipo do evento
//3- Definir a função que irá ser executada quando o evento ocorrer (podendo ser uma função nomeada ou uma função anônima- arrow function)

//usando uma função para modificar a cor de plano de fundo do body
const btn = document.querySelector('#btn');

//seleção do elemento que será modificado pela função
const body = document.querySelector('body');

//primeiro título da página
const titulo = document.querySelector('h1');

//O MÉTODO addEventListener('nome_do_evento') RECEBE DOIS PARÂMETROS: O TIPO DO EVENTO E A FUNÇÃO QUE SERÁ EXECUTADA QUANDO O EVENTO OCORRER
btn.addEventListener('click', () => {
    body.style.backgroundColor = 'lightblue';
})

titulo.addEventListener('mouseover', () => {
    titulo.style.color = 'red';
});

titulo.addEventListener('mouseout', () => {
    titulo.style.color = 'black';
});

//titulo já tem um evento clik no html, então se outra função for adicionada ao mesmo evento ao mesmo elemento, ele irá ser executado antes da primeira 
titulo.addEventListener('click', () => {
   minhaFuncao('Você clicou no título!');
});

//sempre que um evento executar uma função que precisa receber um parâmetro, é necessário usar uma função anônima para chamar a função nomeada
