//Selecionar os elementos e definir como variaveis Globais

const divPai1 = document.querySelector('#escritaNoInnerHTML')
const divPai2 = document.querySelector('#createElement')

divPai1.innerHTML = ' <p> Parágrafo de teste escrito completamente dentro do inner HTML  </p>'
divPai1.innerHTML = '<p> Escevi por cima do parágrafo anterior <p>'

// o processo de criação passa por 2 etapas
//1º a criação do elemento filho
let texto = document.createElement('p')
texto.innerHTML = 'Parágrafo criado com createElement'
//2º a inserção do elemento filho dentro do elemento pai
divPai2.appendChild(texto)

//criando um elemento filho e inserindo dentro do elemento pai
let texto2 = document.createElement('p')
texto2.innerHTML = 'Segundo Parágrafo criado com createElement'
divPai2.appendChild(texto2)