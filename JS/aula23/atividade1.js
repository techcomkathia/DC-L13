const paragrafos = document.getElementsByTagName('p')
//segundo elemento tem indice 1
paragrafos[1].style.color = 'blue'


const elementoComId = document.getElementById('especial')
//modificar o valor da propriedade background-color
elementoComId.style.backgroundColor = 'red'

const comClasse = document.getElementsByClassName('borda')

for(let i = 0; i < comClasse.length; i++){
    comClasse[i].style.border = '2px solid blue'
}

