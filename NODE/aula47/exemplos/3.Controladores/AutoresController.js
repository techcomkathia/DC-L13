const autoresServices = require('../2.Services/AutoresServices')

async function getAutores (req, res){
    const resultado = await autoresServices.listarTodosAutores()

    if (resultado.erro) {
        res.status(500).json({
            status: 500,
            erro: 'Nao foi possivel listar os autores'
        })
    } else {
        res.status(200).json({
            status: 200,
            autores: resultado.autores
        })
    }
}

async function postAutores (req, res){
    const {nome, nacionalidade, data_nascimento} = req.body
    const resultado = await autoresServices.criarAutor(nome, nacionalidade, data_nascimento)

    if (resultado.erro ) {
        resultado.status = 400
        res.status(400).json(resultado)
        return
    }  
    
    resultado.status = 201
    res.status(201).json(resultado)
}

module.exports = {
    getAutores,
    postAutores
}