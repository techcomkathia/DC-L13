let divUsuario = document.getElementById('usuario')

function cadastrarInfos(){
    let nome = prompt('Digite seu nome')
    let email = prompt('Digite seu e-mail')
    let cargo = prompt('Digite seu cargo')
    let urlImagem = prompt('Digite o link da imagem')

    divUsuario.innerHTML+= ` <img class='imagemPerfil' src="${urlImagem}" alt= "${nome}">`
    divUsuario.innerHTML+= `<h2> ${nome} </h2>`
    divUsuario.innerHTML+= `<h3> ${cargo} </h3>`
    divUsuario.innerHTML+= `<h3> ${email} </h3>`
}