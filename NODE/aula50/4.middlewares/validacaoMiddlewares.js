//criação de um middleware de validação

async function validacaoUsuario(req, res, next) {
    const {nome, email, senha} = req.body
    if(!nome || !email || !senha){
        res.status(400).json({erro: 'nome, email e senha obrigatorios'})
        return
    }
    next()
}

module.exports = validacaoUsuario