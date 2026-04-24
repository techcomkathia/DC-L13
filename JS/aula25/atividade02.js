//trazer os elementos do DOM, que serão usados para capturar os dados

//formulario
const formulario = document.getElementById('cadastro');

//inputs
const inputNome = document.getElementById('inputNome');
const inputEmail = document.getElementById('inputEmail');
const inputCargo = document.getElementById('inputCargo');

//Elemento para exibir os dados
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const cargo = document.getElementById('cargo');

//a imagem no perfil não terá o atributo src modificado, mas sim a classe, para que seja possível usar uma imagem de perfil diferente para cada pessoa cadastrada
const imagemPerfil = document.getElementById('imagemPerfil');
const divPerfil = document.getElementById('perfil');

// adicionar um escutador de evento para o formulário, para que quando ele for submetido, a função seja executada
formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault(); //evitar que a página seja recarregada ao submeter o formulário

    //capturar os dados dos inputs 
    const nomeUser = inputNome.value;
    const emailUser = inputEmail.value;
    const cargoUser = inputCargo.value;

    //exibir os dados capturados nos elementos correspondentes
    nome.innerHTML = `Nome: ${nomeUser}`;
    email.innerHTML = `Email: ${emailUser}`;
    cargo.innerHTML = `Cargo: ${cargoUser}`;

    //modificar as classes para que a imagem e a div sejam exibidas
    imagemPerfil.classList.remove('oculta');
    divPerfil.classList.remove('oculta');

    //limpar os inputs
    inputNome.value = '';
    inputEmail.value = '';
    inputCargo.value = '';

    //ou usar o metodo reset()
    //cadastro.reset();
})
