// executar o servico de login para verificação da senha do usuário

const bcrypt = require('bcrypt');
const usuarioModel = require('../1.modelos/usuariosModel')

//criação da função de login:
//será passado email e senha e retornar um objeto com o usuario e mensagem de sucesso ou erro


//ATIVIDADE 2 :
/* crie uma função assíncrona para logar um usuario, será recebido um email e uma senha.
verifique se o email existe no banco de dados, se existir, verifique se a senha corresponde ao hash salvo no banco de dados.
se a senha estiver correta, retorne o usuario e uma mensagem de sucesso, caso contrário, retorne um erro.*/

async function logarUsuario(email, senha) {

    try{

        const usuarioEncontrado = await usuarioModel.findOne({ where: { email: email } });

        if(!usuarioEncontrado){
            console.log('Usuário nao encontrado')
            return { erro: "Usuário nao encontrado" }
        }

        const senhaCriptografada = usuarioEncontrado.dataValues.senha
        const senhaCorreta = await bcrypt.compare(senha, senhaCriptografada)


        if(senhaCorreta){
            console.log('Senha correta, login efetuado com sucesso!')
            return { usuario: usuarioEncontrado.dataValues, mensagem: "Login efetuado com sucesso!" }
        }
        else{
            console.log('Senha incorreta, mensagem de erro retornada')
            return { erro: "Usuario ou senha incorretos" }
        }
    }
    catch(error){
        console.log(error)
        return { erro: error.message }
    }
    
}

logarUsuario('joao@email.com', 'senha errada') //erro
