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

listarTodosAutores()