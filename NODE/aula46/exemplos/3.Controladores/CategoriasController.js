const CategoriasServices = require('../2.Services/CategoriasServices');

async function getCategorias (req, res){
    const dados = await CategoriasServices.listarTodasCategorias()

    if(dados.erro){
        res.status(500).json({
            status: 500,
            erro: 'nao foi possivel listar as categorias'
        })
        return
    }
    
    res.status(200).json({
        status: 200,
        categorias: dados.categorias
    })   

}

//getCategoria (usa o req.params para obter os parâmetros da URL, o id da categoria)

//postCategoria (usa o req.body para obter os parâmetros do corpo da requisição, o nome da categoria, no json com um objeto com atributo nome)

module.exports = {
    getCategorias
}