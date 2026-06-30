// requisição dos módulos
const http = require('http');
const fs = require('fs');

//dados do banco db
const dadosBanco = fs.readFileSync('db.json', 'utf-8');

//criação do servidor 
const servidor = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(dadosBanco); // já está no formato json, por isso não é necessário converter
    res.end(); //finaliza a requisição
})

//inicar o servidor
//porta e uma função que será executada quando o servidor iniciar
servidor.listen(8000, () => {
    console.log('Servidor iniciado na porta 8000')
    console.log('Acesse no navegador http://localhost:8000 para requisições do tipo GET')
})