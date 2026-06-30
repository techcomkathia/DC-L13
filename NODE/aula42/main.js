//importar o módulo http
const http = require('http');

const banco = {
    frutas: [
        {id: 1, name: 'banana', price: 2.00},
        {id: 2, name: 'maca', price: 3.00},
        {id: 3, name: 'laranja', price: 4.00 }
    ],
    legumes: [
        {id: 10, name: 'cenoura', price: 2.00},
        {id: 20, name: 'batata', price: 3.00}
    ]
}

const servidor =  http.createServer((req, res) => {
    //configurar o tipo de conteúdo a ser devolvido
    //primeiro parâmetro o código de status, segundo parâmetro um objeto com o cabeçalho do tipo da resposta
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify({nome: 'cleitinho', raca: 'gato laranja'}))
    res.end();
})

//iniciar o servidor
servidor.listen(3000, () => {
    console.log('servidor rodando na porta 3000. Acesse no navegador http://localhost:3000 para requisições do tipo GET');
})