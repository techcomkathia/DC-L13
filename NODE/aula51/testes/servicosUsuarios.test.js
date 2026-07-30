const servicos = require('../src/2.servicos/usuariosServices');

describe('usuariosServices', () => {

    test('veificar sucesso na criação de um usuario', async () => {
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

    test('veificar erro na criação de um usuario', async () => {
    //dados usuario
    const nomeUsuario = 'fulano';
    const emailUsuario = 'fulano@com';
    const senhaUsuario = '123456';
    expect(await servicos.criarUsuario(nomeUsuario, emailUsuario, senhaUsuario)).toEqual({
        erro: 'Email duplicado'
        })
    })

})