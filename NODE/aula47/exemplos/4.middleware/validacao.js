// os middlewares de validação tem por objetivo verificar se os dados enviados pelo usuario estao corretos
// ex: se o email nao for valido, ou se a senha nao tiver pelo menos 6 caracteres, ou se o nome nao tiver pelo menos 3 caracteres


//o livro precisa ter nome, preco, ano_publicacao, categoria e autor
const validacaoLivro = (req, res, next) => {

    const {nome, preco, ano_publicacao, categoria_id, autor_id} = req.body

    if(!nome || !preco || !ano_publicacao || !categoria_id || !autor_id){
        res.status(400).json({erro: 'nome, preco, ano_publicacao, categoria_id e autor_id sao obrigatorios'})
        //porque não tendo os dados, nao passaremos para a etapa seguinte (o controller)
        return
    }

    if(preco < 0){
        res.status(400).json({erro: 'preco nao pode ser negativo'})
        return
    }

    //passou pelas validações
    next() //passa para o controller

}

const validacaoCategoria = (req, res, next) => { 
    const {nome} = req.body
    if(!nome){
        res.status(400).json({erro: 'nome é obrigatorio'})
        return
    }
    next()

}
module.exports = {
    validacaoLivro,
    validacaoCategoria}

//ATIVIDADE 1

//Crie o serviço "criarAutor", o controlador postAutor e o middleware de validação correspondente
//faça uma rota post para criar um autor