const servicos = require('../src/2.servicos/usuariosServices');
const UsuarioModel = require('../src/1.modelos/usuariosModel');

//convertendo teste de intregração em teste unitário, usando mocks
//vamos mockar um módulo inteiro: UsuarioModel
// 
jest.mock('../src/1.modelos/usuariosModel', () => ({
            findOne: jest.fn(),
            create: jest.fn()
}))

describe('usuariosServices', () => {

    test('verificar sucesso na criação de um usuario', async () => {
        //mockando o módulo UsuarioModel
        jest.spyOn(UsuarioModel, 'findOne').mockResolvedValue(null);
        jest.spyOn(UsuarioModel, 'create').mockResolvedValue({
            dataValues: {
                id: 1,
                email: 'fulano2@com',
                nome: 'fulano2',
                senha: '123456'
            }
        });
        //dados usuario
        const nomeUsuario = 'fulano2';
        const emailUsuario = 'fulano2@com';
        const senhaUsuario = '123456';
        expect(await servicos.criarUsuario(nomeUsuario, emailUsuario, senhaUsuario)).toEqual({
            usuario: {
                email: emailUsuario,
                nome: nomeUsuario
            },
            mensagem: 'Usuario criado com sucesso!'
        })
    })

    test('verificar erro na criação de um usuario', async () => {

    //mockando o módulo UsuarioModel
        jest.spyOn(UsuarioModel, 'findOne').mockResolvedValue({id: 1, email: 'fulano100000@com', nome: 'fulano', senha: '123456'});

    //dados usuario
        const nomeUsuario = 'fulano100000';
        const emailUsuario = 'fulano100000@com';
        const senhaUsuario = '123456';
        expect(await servicos.criarUsuario(nomeUsuario, emailUsuario, senhaUsuario)).toEqual({
            erro: 'Email duplicado'
            })
        })

})