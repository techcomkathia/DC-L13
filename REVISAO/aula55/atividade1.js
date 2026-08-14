//Crie uma super classe e uma classe filha. 
//A classe veículo deverá ter os seguintes atributos:
//marca
//modelo
//ano
//placa
//cor
//proprietario


//a super classe deverá ter os seguintes métodos:
//mostrarDetalhes
//getProprietario
//setProprietario

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



//classe carro deverá ter o atributo : quantidade de portas, quantidade de passageiros, tipo (manual ou automático)
class Carro extends Veiculo{
    constructor(marca, modelo, ano, placa, cor, proprietario, quantidadePortas, quantidadePassageiros, tipo = 'manual'){
        super(marca, modelo, ano, placa, cor, proprietario)
        this.quantidadePortas = quantidadePortas
        this.quantidadePassageiros = quantidadePassageiros
        this.tipo = tipo
    }
}

//classe moto deverá ter o atributo de cilindradas

class Moto extends Veiculo{
    constructor(marca, modelo, ano, placa, cor, proprietario, cilindradas){
        super(marca, modelo, ano, placa, cor, proprietario)
        this.cilindradas = cilindradas
    }
}

//classe caminhão deverá ter o atributo de eixos

class Caminhao extends Veiculo{
    constructor(marca, modelo, ano, placa, cor, proprietario, eixos){
        super(marca, modelo, ano, placa, cor, proprietario)
        this.eixos = eixos
    }
}


const carro = new Carro('Fiat', 'Uno', 2000, 'ABC-1234', 'Branco', 'Joaquim', 4, 5)
console.log(carro.getProprietario())
carro.mostrarDetalhes()

const moto = new Moto('Honda', 'CBR', 2010, 'DEF-5678', 'Preto', 'Maria', 500)
console.log(moto.getProprietario())
moto.mostrarDetalhes()

const caminhao = new Caminhao('Mercedes', 'Actros', 2020, 'GHI-9012', 'Vermelho', 'Pedro', 6)
console.log(caminhao.getProprietario())
caminhao.mostrarDetalhes()