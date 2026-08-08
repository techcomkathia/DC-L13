//querySelector -> primeiro elemento encontrado
//querySelectorAll -> todos os elementos encontrados

//getElementById
//getElementsByClassName
//getElementsByTagName
//getElementsByName

const listaNormal = document.querySelector('#listaNormal')
const listaPreferencial = document.querySelector('#listaPreferencial')


let filaNormal = ['Pessoa 1 Fila Normal ', 'Pessoa 2 fila normal', 'Pessoa 3 Fila Normal', 'Pessoa 4 Fila Normal', 'Pessoa 5 Fila Normal', 'Pessoa 6 Fila Normal', 'Pessoa 7 Fila Normal', 'Pessoa 8 Fila Normal', 'Pessoa 9 Fila Normal', 'Pessoa 10 Fila Normal']
let filaPreferencial = ['Pessoa 1 Fila Preferencial', 'Pessoa 2 Fila Preferencial', 'Pessoa 3 Fila Preferencial', 'Pessoa 4 Fila Preferencial', 'Pessoa 5 Fila Preferencial']

//innerHTML
//innerText
//textContent
listaNormal.innerHTML= `<li>${filaNormal[0]}</li>`
listaNormal.innerHTML+= `<li>${filaNormal[1]}</li>`

//para inserir conteúdo sem a necessecidade de tags podemos utilizar 2 métodos: criação e atribuição dos filhos
//createChild
//appendChild
let novoLi= document.createElement('li')
novoLi.textContent= filaNormal[2]
listaNormal.appendChild(novoLi)

const json = `[{ "nome": "João", "idade": 30, "cidade": "São Paulo"}, { "nome": "Maria", "idade": 25, "cidade": "Rio de Janeiro"}]`

//parse faz a conversão de json para objeto
const pessoas = JSON.parse(json)
//stringify faz a conversão de objeto para json
const json2 = JSON.stringify(pessoas)

//represente cada uma das pessoas (objetos) do array pessoas em card dentro de uma div ou do proprio body
//Esse card terá h1 para nome, h2 para cidade e h3 para idade
const desafio1 = document.querySelector('#desafio1')
for(let pessoa of pessoas){
    const card = document.createElement('div')
    const nome = document.createElement('h1')
    nome.innerHTML = pessoa.nome
    nome.classList.add('exemplo')
    const cidade = document.createElement('h2')
    cidade.innerHTML = pessoa.cidade
    const idade = document.createElement('h3')
    idade.innerHTML = pessoa.idade

    card.appendChild(nome)
    card.appendChild(cidade)
    card.appendChild(idade)
    desafio1.appendChild(card)
}