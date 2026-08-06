const app = require('../src/app');
const request = require('supertest');
const sequelize = require('../src/1.modelos/conexaoBanco');

const middlewareAutenticacao = require('../src/4.middlewares/autenticacaoMiddleware');

// transforma o middleware em mock
jest.mock('../src/4.middlewares/autenticacaoMiddleware');

beforeAll(async () => {
    await sequelize.authenticate();
});

beforeEach(() => {
    jest.clearAllMocks();

    // comportamento padrão: usuário autenticado
    middlewareAutenticacao.mockImplementation((req, res, next) => {
        next();
    });
});

afterAll(async () => {
    await sequelize.close();
});

describe('testando autenticação para acesso em rotas protegidas', () => {

    test('testando acesso a rota protegida com sucesso na autenticação', async () => {

        const resposta = await request(app).get('/exemplo');

        expect(resposta.status).toBe(200);
    });

    test('testando acesso a rota protegida sem autenticação', async () => {

        // altera o mock apenas para este teste
        middlewareAutenticacao.mockImplementation((req, res, next) => {
            return res.status(401).json({
                erro: 'falta autenticação'
            });
        });

        const resposta = await request(app).get('/exemplo');

        expect(resposta.status).toBe(401);
    });

});