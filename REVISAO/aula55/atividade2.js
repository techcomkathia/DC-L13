//para o método mostrarDetalhes, faça uma adaptação em cada uma das classes filhas,para mostrar os atributos que só existem naquela classe filha.


//faça uma instância de um objeto de cada uma das classes filhas, adicione em um array e aplique o método forEach para mostrar os detalhes de cada veículo

class Veiculo{
    #proprietario
    constructor(marca, modelo, ano, placa, cor, proprietario){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.placa = placa
        this.cor = cor
        this.#proprietario = proprietario
    }

    getProprietario(){
        return this.#proprietario
    }

    setProprietario(proprietario){
        this.#proprietario = proprietario
    }

    mostrarDetalhes(){
        console.log(`Marca: ${this.marca}`)
        console.log(`Modelo: ${this.modelo}`)
        console.log(`Ano: ${this.ano}`)
        console.log(`Placa: ${this.placa}`)
        console.log(`Cor: ${this.cor}`)
        console.log(`Proprietario: ${this.#proprietario}`)
    }
}


class Carro extends Veiculo{
    constructor(marca, modelo, ano, placa, cor, proprietario, quantidadePortas, quantidadePassageiros, tipo = 'manual'){
        super(marca, modelo, ano, placa, cor, proprietario)
        this.quantidadePortas = quantidadePortas
        this.quantidadePassageiros = quantidadePassageiros
        this.tipo = tipo
    }

    mostrarDetalhes(){
        console.log(`O veículo é um carro. Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Placa: ${this.placa}, Cor: ${this.cor}, Proprietario: ${this.getProprietario()}, Quantidade de Portas: ${this.quantidadePortas}, Quantidade de Passageiros: ${this.quantidadePassageiros}, Tipo: ${this.tipo}`)
    }
}


class Moto extends Veiculo{
    constructor(marca, modelo, ano, placa, cor, proprietario, cilindradas){
        super(marca, modelo, ano, placa, cor, proprietario)
        this.cilindradas = cilindradas
    }

    mostrarDetalhes(){
        console.log(` O veículo do tipo moto. Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Placa: ${this.placa}, Cor: ${this.cor}, Proprietario: ${this.getProprietario()}, Cilindradas: ${this.cilindradas}`)
    }
}


class Caminhao extends Veiculo{
    constructor(marca, modelo, ano, placa, cor, proprietario, eixos){
        super(marca, modelo, ano, placa, cor, proprietario)
        this.eixos = eixos
    }

    mostrarDetalhes(){
        console.log(` O veículo do tipo caminhão. Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Placa: ${this.placa}, Cor: ${this.cor}, Proprietario: ${this.getProprietario()}, Eixos: ${this.eixos}`)
    }
}


let veiculos = []

const moto = new Moto('Honda', 'CBR', 2010, 'DEF-5678', 'Preto', 'Maria', 500)
const carro = new Carro('Fiat', 'Uno', 2000, 'ABC-1234', 'Branco', 'Joaquim', 4, 5)
const caminhao = new Caminhao('Mercedes', 'Actros', 2020, 'GHI-9012', 'Vermelho', 'Pedro', 6)

veiculos.push(moto, carro, caminhao)

veiculos.forEach(veiculo => veiculo.mostrarDetalhes())