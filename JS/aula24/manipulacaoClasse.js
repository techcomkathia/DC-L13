const itemEspecial = document.querySelector('#itemListaEspecial')
//forma errada pois sobreescreve a lista de classes da tag
//itemEspecial.classList = 'azul'


//uma adição de uma nova classe de css deve sempre ser feita pelo método 
itemEspecial.classList.add('azul')

//remover uma classe de css

const tituloH2 = document.querySelectorAll('h2')[1]
tituloH2.classList.remove('oculto')


//método para criação:
//let x = document.createElement('p')
//adicionar o texto dentro do parágrafo
//x.innerHTML = 'Parágrafo criado com createElement'
//adicionar o parágrafo dentro do pai
//elementoPai.appendChild(x)