
const bcrypt = require('bcrypt');
const usuarioModel = require('../1.modelos/usuariosModel')
require('dotenv').config({path: '../.env'})
const jwt = require('jsonwebtoken');



async function logarUsuario(email, senha) {

    try{

        const usuarioEncontrado = await usuarioModel.findOne({ where: { email: email } });

        if(!usuarioEncontrado){
            console.log('Usuário nao encontrado')
            return { erro: "Usuário nao encontrado" }
        }

        const senhaCriptografada = usuarioEncontrado.dataValues.senha
        const senhaCorreta = await bcrypt.compare(senha, senhaCriptografada)

        //ATIVIDADE 2 :
        /*
        Quando a senha estiver correta gere um token JWT que no payload contenha o email do usuário, o id do usuário e o nome do usuário.
        O token deve expirar em 1 hora.
        DICAS:
        use o módulo jsonwebtoken para gerar o token com o método sign
        use o módulo dotenv para carregar as variáveis de ambiente (importante no método config usar o {path: '../.env'} para indicar onde está o arquivo .env)
        use o módulo bcrypt para comparar as senhas(essa funcionalidade ja foi implementada na atividade da aula passada)
        */

        if(senhaCorreta){
            const token = jwt.sign({
                    usuarioId: usuarioEncontrado.dataValues.id,
                    email: usuarioEncontrado.dataValues.email,
                    nome: usuarioEncontrado.dataValues.nome
                },
                process.env.PALAVRA_SECRETA_JWT,
                {expiresIn: '1h'}
            )
            console.log('Senha correta, login efetuado com sucesso!', token)
            return { token: token, mensagem: "Login efetuado com sucesso!Salve o token para usar nas rotas privadas.Ele é valido por 1h" }
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

//logarUsuario('joao@email.com', '123456')

module.exports = {
    logarUsuario
}

