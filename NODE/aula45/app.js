//importar Autores no app para executar a função e inserir um autor no banco

const Autores = require('./modelos/AutorModel');

Autores.create({
    nome: 'Cleitinho Lima',
    nacionalidade: 'Brasileiro',
    data_nascimento: '2013-07-31'
}).then(() => {
    console.log('Autor inserido com sucesso!');
}).catch((error) => {
    console.error('Erro ao inserir autor:', error);
});