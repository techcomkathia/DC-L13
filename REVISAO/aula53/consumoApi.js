//captando os dados do front e utilizando a api para criar um token

//trazer os elementos do DOM para o arquivo
//remover o eventoDefault do form
//criar uma função para enviar os dados para a api 
//adicionar o evento de submit ao formulario

//na parte do html (eventos e captura de dados)
//addEventListener('submit')
//preventDefault
//elementoFormulario.value

const formulario = document.querySelector('form');
const inputNome = document.querySelector('#nome');
const submit = document.querySelector('input[type="submit"]');
const button = document.querySelector('button');

function exemploFuncao(){
    alert('A função foi chamada')
    console.log(inputNome.value)
}


formulario.addEventListener('submit',()=>{
    event.preventDefault();
    exemploFuncao()
}
 )


//fetch com then e catch
function exemploFetch(){
    fetch('http://localhost:3001/usuarios')
    .then(response => {
        console.log('passou por aqui')
        return response.json()
    }) //retorna uma promisse que será captada pelo próximo then
    .then(data => console.log(data))
    .catch(error => console.log(error))
}



//função async com await
async function exemploAsyncAwait(){
    try{
        const response = await fetch('http://localhost:3001/usuarios')
        const data = await response.json()
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
}

//Crie um formulário com 2 campos e um botão de submit:
//email e password
//quando o botão for clicado, faca a chamada a api com os dados do formulário e retorne o token na tela abaixo do formulário
//Importante: use o a função fetch para fazer a chamada a api e manipule os dados da resposta para extrair o token e exibir na tela. Não esqueça de remover o eventoDefault do formulário e após o sucesso da chamada a api, exibir o token na tela abaixo do formulário e limpar os campos do formulário.



//link da api no chat https://fakestoreapi.com/docs#tag/Auth

const formAutenticacao = document.querySelector("#autenticacao")
const inputEmail = document.querySelector("#email")
const inputPassword = document.querySelector("#senha")
const tokenTexto = document.querySelector("#tokenTexto")

async function autenticar(emailUser, passwordUser){
    try{

        const token = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: emailUser,
                password: passwordUser
            })
        })
        const tokenJson = await token.json()
        if(tokenJson.token){
            tokenTexto.innerHTML = `Sucesso na autenticação, Token: ${tokenJson.token}`
        }
        else{
            tokenTexto.innerHTML = `Erro na autenticação`
        }

    }
    catch(error){
        console.log(error)
        tokenTexto.innerHTML = `Erro na autenticação`
    }
}


formAutenticacao.addEventListener('submit', (event) => {
    event.preventDefault()
    autenticar(inputEmail.value, inputPassword.value)
    //limpar os campos do formulário
    inputEmail.value = ''
    inputPassword.value = ''
})
