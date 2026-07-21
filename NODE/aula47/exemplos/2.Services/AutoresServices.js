const {AutoresModel} = require('../1.Modelos/relacionamentos')

async function listarTodosAutores(){
    try{
        const autores = await AutoresModel.findAll()
        const dados = autores.map((autor) => autor.dataValues)
        console.log(dados)
        return { autores: dados }
    }
    catch(error){
        console.log(error)
        return { erro: error.message }
    }
}

async function criarAutor(nome, nacionalidade, data_nascimento) {
    try{
        const dados = await AutoresModel.create({nome: nome, nacionalidade: nacionalidade, data_nascimento: data_nascimento})
        console.log(dados)
        
        return { autor: dados.dataValues }

    }
    catch(error){
        console.log(error)
        return { erro: error.message }
    }

    
}

module.exports = {
    listarTodosAutores,
    criarAutor
}

