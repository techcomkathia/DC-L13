//construir o postLogin 

// - retorna 200 e {status: 200, dados: dadosDoServico, mensagem: 'Login efetuado com sucesso!'}
// - caso erro 400 e {status: 400, dados: erro, mensagem: 'mensagem de erro retornada'}
// - no catch retorna 500 e {status: 500, dados: erro, mensagem: 'Erro ao efetuar o login'}

//utilizem o console.log para depurar o codigo na fase de desenvolvimento

const loginServices = require('../2.servicos/loginServices');

async function postLogin(req, res) {
    try{
        const { email, senha } = req.body;
        const dadosDoServico = await loginServices.logarUsuario(email, senha);
        
        if(dadosDoServico.erro){
            res.status(400).json({ status: 400, mensagem: dadosDoServico.erro });
            return;
        }
        res.status(200).json({ status: 200, dados: dadosDoServico.usuario, mensagem: 'Login efetuado com sucesso!' });
    }
    catch(error){
        console.log(error);
        res.status(500).json({ status: 500, erro: error, mensagem: 'Erro ao efetuar o login' });
    }
}

module.exports = { postLogin };