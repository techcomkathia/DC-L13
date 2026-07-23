//construir o postUsuario - passará o email, senha e nome obtidos pelo corpo da requisição
// - retorna 200 e {status: 200, dados: dadosDoServico, mensagem: 'Usuario criado com sucesso!'}
// - caso erro 400 e {status: 400, dados: erro, mensagem: 'Email duplicado'}
// - no catch retorna 500 e {status: 500, dados: erro, mensagem: 'Erro ao criar o usuario'}


//utilizem o console.log para depurar o codigo na fase de desenvolvimento

const usuariosServices = require('../2.servicos/usuariosServices');

async function postUsuario(req, res) {
    try{
        const { email, senha, nome } = req.body;
        const dadosDoServico = await usuariosServices.criarUsuario(email, senha, nome);
        
        if(dadosDoServico.erro){
            res.status(400).json({ status: 400, dados: dadosDoServico.erro, mensagem: 'Email duplicado' });
            return;
        }
        res.status(200).json({ status: 200, dados: dadosDoServico.usuario, mensagem: 'Usuario criado com sucesso!' });
    }
    catch(error){
        console.log(error);
        res.status(500).json({ status: 500, dados: error, mensagem: 'Erro ao criar o usuario' });
    }
}


//DESAFIO: construa os controladores para listar, atualizar e deletar um usuario

module.exports = { postUsuario };