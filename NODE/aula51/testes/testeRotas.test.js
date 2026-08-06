//Faça a instalação do Supertest
//Monte o ambiente com o BeforeAll criando um servidor para o app na porta 4000, exclusivo para os testes
//importe o supertest e com o método request do supertest, faca uma request para a rota /usuarios verifique o retorno da chamada a api
const app = require('../src/app')
const supertest = require('supertest')
const sequelize = require('../src/1.modelos/conexaoBanco')

//  beforeAll(() => {
//          app.listen(4000)
//         //podemos autenticar com um banco de testes
//         sequelize.authenticate()

//     })

// afterAll(async() => {
//         sequelize.close() //fecha a conexão com o banco de dados
//         //app.close()
// })

describe('testando rotas públicas de usuarios',()=>{
    //montagem do ambiente com a criação do servidor
   

    test('testando rota /usuarios', async () => {
        const response = await supertest(app).get('/usuarios')
        expect(response.status).toBe(200)
    })
})
