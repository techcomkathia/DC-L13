const livrosServices = require('../2.Services/LivrosServices')

async function getLivros(req, res) {
    const livros = await livrosServices.listarLivros();

    if (livros.erro) {
        res.status(500).json({
            status: 500,
            erro: 'Nao foi possivel listar os livros'
        })
    } else {
        res.status(200).json({
            status: 200,
            livros: livros.livros
        })
    }
}

async function getLivro(req, res) {
    const {id} = req.params

    const dados = await livrosServices.buscarLivroPorId(id);

    if(dados.erro){
        res.status(404).json({
            status: 404,
            erro: dados.erro
        })
        return
    }

    res.status(200).json({
        status: 200,
        livro: dados.livro
    })
    
} 

module.exports = {getLivros, getLivro}