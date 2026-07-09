//importar Autores no app para executar a função e inserir um autor no banco

/*const Autores = require('./modelos/AutorModel');

Autores.create({
    nome: 'Cleitinho Lima',
    nacionalidade: 'Brasileiro',
    data_nascimento: '2013-07-31'
}).then(() => {
    console.log('Autor inserido com sucesso!');
}).catch((error) => {
    console.error('Erro ao inserir autor:', error);
});*/

const itensModel = require('./modelos/ItensModel');
const produtoresModel = require('./modelos/ProdutoresModel');

// itensModel.create({
//     nomeItem: 'Livro 2',
//     valorUnit: 500.00
// }).then(() => {
//     console.log('Item inserido com sucesso!');
// }).catch((error) => {
//     console.error('Erro ao inserir item:', error);
// });

produtoresModel.create({
    nomeProdutor: 'Cleitinho Lima',
    endereco: 'Rua 1',
    cidade: 'Recife',
    uf: 'PE'
}).then(() => {
    console.log('Produtor inserido com sucesso!');
}).catch((error) => {
    console.error('Erro ao inserir produtor:', error);
})