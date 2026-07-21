//importar o modelo
const {LivrosModel, AutoresModel, CategoriasModel} = require('../1.Modelos/relacionamentos')

async function listarLivros() {
    const livros = await LivrosModel.findAll();
    return { livros: livros.map(livro => livro.dataValues) }
}

async function buscarLivroPorId(id) {
    const livro = await LivrosModel.findByPk(id, {
        include: [
            { model: AutoresModel, attributes: ['nome'] },
            { model: CategoriasModel,attributes: ['nome'] }
        ]
    });
    return livro ? { livro: livro.dataValues }: {erro: 'Livro nao encontrado'};
}

module.exports = {
    listarLivros,
    buscarLivroPorId
}