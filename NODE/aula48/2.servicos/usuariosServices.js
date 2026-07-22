//ATIVIDADE 1 : Crie uma função assíncrona para criar um usuario.
/* Dica: use o método create do sequelize para passar um objeto com os dados do usuario sendo cada propriedade um par chave-valor.
//use o módulo bcrypt para criptografar a senha do usuario.
//em um arquivo de teste crie um usuario e verifique se ele foi criado corretamente.

//IMPORTANTE: use os arquivos commitados no repositório, na camada de modelos mas garanta que os módulo do node e o banco de dados foi corretamente criado. Faça as alterações no arquivo conexaoBanco.js para que ele use os seus dados para se conectar ao banco de dados.*/


const usuarioModel = require('../1.modelos/usuariosModel');
const bcrypt = require('bcrypt');

async function criarUsuario(nome, email, senha) {
    try{

        //verificar se o email já existe, usando o método findOne pode usar a clausula where
        const usuarioEncontrado = await usuarioModel.findOne({ where: { email: email } });

        //se existir, retorna um erro de email duplicado
        if(usuarioEncontrado){
            //existe: retorna o erro de email duplicado
            console.log('Email duplicado')
            return { erro: "Email duplicado" }
        }

        const salts = bcrypt.genSaltSync(10);
        const senhaCriptografada = await bcrypt.hash(senha, salts);

        const novoUsuario = await usuarioModel.create({
            nome: nome,
            email: email,
            senha: senhaCriptografada
        });
        console.log(novoUsuario)
        return { 
            usuario: novoUsuario.dataValues,
            mensagem: "Usuario criado com sucesso!" 
        }
        //não existe: criptografa a senha, executa o método create e retorna o usuario criado com a mensagem de sucesso
    }
    catch(error){
        console.log(error)
        return { erro: error.message }
    }

}

async function  buscarUsuarioPorEmail(email) {
    try{
        const usuarioEncontrado =await usuarioModel.findOne({ where: { email: email } });
        if(usuarioEncontrado){
            return { usuario: usuarioEncontrado.dataValues }
        }
        return { erro: "Usuário não encontrado" }
    }
    catch(error){
        return { erro: error.message }
    }
}

//DESAFIO: construa os serviços para listar todos os usuarios, listar um usuario, atualizar e deletar um usuario

module.exports = {
    criarUsuario,
    buscarUsuarioPorEmail
}


//criarUsuario('joao', 'joao@email.com', '123456')
