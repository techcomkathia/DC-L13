//seleção dos elementos
const form = document.querySelector('#formulario1');
const inputSenha = document.querySelector('#senha');
const texto = document.querySelector('#textoAqui');


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