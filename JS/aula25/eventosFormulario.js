//seleção dos elementos
const form = document.querySelector('#formulario1');
const inputSenha = document.querySelector('#senha');
const texto = document.querySelector('#textoAqui');


const form2 = document.querySelector('#formulario2');
const inputSenha2 = document.querySelector('#senha2');
const texto2 = document.querySelector('#textoAqui2');
const turnos = document.querySelectorAll('input[name="turnos"]');
// atributo name
const turnosLista = document.getElementsByName('turnos'); 

//para evitar o comportamento padrão do formulário, ou seja, o envio dos dados e recarregamento da página, podemos usar o método preventDefault() no evento de submit do formulário.

form.addEventListener('submit', (event) => {
    //evita o comportamento padrão do formulário
    event.preventDefault();
    console.log(inputSenha.value);

    //posso validar os dados do formulário aqui:
    //se a senha for 123 exibir um alert de sucesso e apagar o formulário
    if (inputSenha.value === '123') {
        alert('Senha correta!');
        texto.innerHTML = '';
        form.reset(); //limpa os campos do formulário
    }
    else { 
        texto.innerHTML = 'Senha incorreta, tente novamente!';
    }
});


form2.addEventListener('submit', (event) => {
    event.preventDefault();

    //mostrar as opções selecionadas dos turnos
    console.log('Turnos selecionados:');
    console.log(turnosLista[0].value, turnosLista[0].checked);
    console.log(turnosLista[1].value, turnosLista[1].checked);
})

//para os selects as propriedades são value e selected, onde value é o valor da opção e selected é um booleano que indica se a opção está selecionada ou não.


