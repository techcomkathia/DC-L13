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
async function getCategoria(req, res){
    const {id} = req.params

    const dados = await CategoriasServices.listarUmaCategoria(id)
    if(dados.erro == 'categoria nao encontrada'){
        res.status(404).json({
            status: 404,
            erro: dados.erro
        })
        return
    }
    else if(dados.erro){
        //esse erro acontece quando existe uma exceção no service, ou seja, quando o servidor não está funcionando
        res.status(500).json({
            status: 500,
            erro: 'nao foi possivel listar a categoria'
        })
        return
    }
    
    res.status(200).json({
        status: 200,
        categoria: dados.categoria
    })
}

//postCategoria (usa o req.body para obter os parâmetros do corpo da requisição, o nome da categoria, no json com um objeto com atributo nome)

async function postCategoria(req, res){
    const {nome} = req.body

    //validação deve estar na camada se serviço
    // if(!nome){
    //     res.status(400).json({
    //         status: 400,
    //         erro: 'nome nao informado'
    //     })
    //     return
    // }

    const dados = await CategoriasServices.criarUmaCategoria(nome)

    if(dados.erro == 'nome nao informado'){
        res.status(400).json({
            status: 400,
            erro: dados.erro
        })
        return
    }
    else if(dados.erro == 'categoria nao criada'){
        res.status(500).json({
            status: 500,
            erro: dados.erro
        })
        return
    }
        
    res.status(201).json({
        status: 201,
        categoria: dados.categoria
    })
}

module.exports = {
    getCategorias,
    postCategoria,
    getCategoria
}