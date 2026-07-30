const funcoes = require('../funcoesExemplo.js')

test('verificar objeto', ()=>{
    expect(funcoes.montarProduto('coisa',10, 10)).toEqual({
        nome: "coisa",
        preco: 10,
        quantidade:10,
        disponivel:true
    })
})


//Atividade: Faça a configuração do Jest no projeto da aula passada e crie um spec para o serviço " criarUsuario"