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

function validacaoAutor(req, res, next) {
    const {nome, nacionalidade, data_nascimento} = req.body
    if(!nome || !nacionalidade || !data_nascimento){
        res.status(400).json({status: 400, erro: 'nome, nacionalidade e data_nascimento sao obrigatorios'})
        return
    }
    if(nome.length < 3){
        res.status(400).json({status: 400, erro: 'nome nao pode ter menos de 3 caracteres'})
        return
    }
    if(nacionalidade.length < 3){
        res.status(400).json({status: 400, erro: 'nacionalidade nao pode ter menos de 3 caracteres'})
        return
    }
    next()
}
module.exports = {
    validacaoLivro,
    validacaoCategoria,
    validacaoAutor}

//ATIVIDADE 1

//Crie o serviço "criarAutor", o controlador postAutor e o middleware de validação correspondente
//faça uma rota post para criar um autor