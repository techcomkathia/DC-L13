let pessoa = ['Cleitinho', 30, 'Masculino', 'Programador']
console.log(pessoa[0])

let pessoa2 = {
    nome: 'Cleitinho',
    idade: 30,
    sexo: 'Masculino',
    profissao: 'Programador',
    linguagens: ['JavaScript', 'Python', 'Java']
}
console.log(pessoa2.nome)
console.log(pessoa2.linguagens[0])

let produtos = ['mouse', 'teclado', 'monitor', 'gabinete']

let produto ={ 
    nome: prompt('Digite o nome do produto: '),
    preco: 100,
    estoque: 50,
    cor: 'preto',
    fabricante: 'Logitech'
}

// crie um objeto para representar um veículo:
//o veículo terá tipo, marca, modelo, ano, cor , quantidade de portas
//os valores serão : onibus, Mercedes-Benz, Sprinter, 2020, branco, 4